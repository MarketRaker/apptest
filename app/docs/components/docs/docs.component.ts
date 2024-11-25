import { Component, OnInit, inject } from '@angular/core';
import { DOCS_NAV_TREE, DocsMenuNode } from './docs.menu';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { catchError, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { MarketRakerBaseComponent } from 'src/app/shared/components/base/market-raker-base.component';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent extends MarketRakerBaseComponent implements OnInit {
  treeControl = new NestedTreeControl<DocsMenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<DocsMenuNode>();

  httpService = inject(HttpClient);
  location = inject(Location);
  route = inject(ActivatedRoute);

  doc: { content: string, i18n_content: string, lastReviewedOn: string } = {
    content: '',
    i18n_content: '',
    lastReviewedOn: ''
  };
  iframeSrc?: SafeResourceUrl;
  lastReviewedOn = '';
  lastSelected: DocsMenuNode[] = [];
  currentUrl: string = '';
  currentDoc?: DocsMenuNode;

  constructor(private sanitizer: DomSanitizer) {
    super();
    this.dataSource.data = DOCS_NAV_TREE;
  }
  ngOnInit(): void {
    this.onNodeClick(DOCS_NAV_TREE[0]);
    this.route.url.subscribe((url) => {
      this.currentUrl = url.join('/');
      const routeMenuLink = this.findLink(DOCS_NAV_TREE, this.currentUrl);
      if (routeMenuLink) {
        this.onNodeClick(routeMenuLink);
      } else {
        this.onNodeClick(DOCS_NAV_TREE[0]);
      }
    })
    this.translationPath = 'app/docs/components/docs';
    this.translationService.use(this.translationPath).subscribe(() => {
      this.toastrService.info(this._t("translations_coming_soon", "Translations for the documentation are coming soon."));
    });
  }

  hasChild = (_: number, node: DocsMenuNode) => !!node.children && node.children.length > 0;

  onNodeClick(menuItem: DocsMenuNode) {
    if (!menuItem.link) return;

    this.currentDoc = menuItem;
    this.lastSelected.push(menuItem);

    const fileUrl = 'assets/docs/' + menuItem.link + '.json';
    const notFoundUrl = 'assets/docs/404.json';

    this.httpService.head(fileUrl)
      .pipe(
        switchMap(() => this.httpService.get(fileUrl)),
        catchError(() => this.httpService.get(notFoundUrl)),
      )
      .subscribe((data: any) => {
        if (data.link) {
          (window as any).open(data.link, '_blank');
          return;
        }

        this.doc.content = data.content.replace(/__API__/g, environment.apiUrl);
        this.doc.i18n_content = data.i18n_content || '';
        this.doc.lastReviewedOn = data.lastReviewedOn;

        if (data.iframeSrc) {
          this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.iframeSrc);
        } else if (data.api) {
          this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(environment.apiUrl);
        } else {
          this.iframeSrc = undefined;
        }

        this.lastReviewedOn = data.lastReviewedOn;
        this.location.replaceState(`/docs/${menuItem.link}`);

        this.changeSelected(menuItem);
      });
  }

  next() {
    let nextItem: DocsMenuNode;
    let found = false;
    const findNextNode = (node: DocsMenuNode) => {
      if (found) {
        found = false;
        this.onNodeClick(node)
        return;
      }
      if (node.name === this.currentDoc?.name) {
        found = true;
        nextItem = node;
      }
      if (node.children) {
        node.children.forEach(findNextNode);
      }
    };

    this.dataSource.data.forEach(findNextNode);
  }

  prev() {
    let prevItem: DocsMenuNode;
    let found = false;
    const findPreviousNode = (node: DocsMenuNode) => {
      if (found) {
        found = false;
        this.onNodeClick(prevItem)
        return;
      }
      if (node.name === this.currentDoc?.name) {
        found = true;
      } else {
        prevItem = node;
      }
      if (node.children) {
        node.children.forEach(findPreviousNode);
      }
    };

    this.dataSource.data.forEach(findPreviousNode);
  }

  changeSelected(menuItem: DocsMenuNode) {
    const setNodeSelected = (node: DocsMenuNode) => {
      node.selected = node.link === menuItem.link;
      if (node.children) {
        node.children.forEach(setNodeSelected);
      }
    };

    this.dataSource.data.forEach(setNodeSelected);
  }

  findLink(menuItems: DocsMenuNode[], targetLink: string): DocsMenuNode | null {
    for (let item of menuItems) {
      // Check if the current node contains the target link
      if (item.link === targetLink) {
        return item;
      }

      // If the current node has children, search recursively
      if (item.children) {
        const found = this.findLink(item.children, targetLink);
        if (found) {
          return found;
        }
      }
    }

    // If no link was found, return null
    return null;
  }

}
