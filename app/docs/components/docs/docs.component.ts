import { Component, OnInit, inject } from '@angular/core';
import { DOCS_NAV_TREE, DocsMenuNode } from './docs.menu';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { catchError, switchMap } from 'rxjs';

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

  doc = '';
  iframeSrc?: SafeResourceUrl;
  lastReviewedOn = '';
  lastSelected: DocsMenuNode[] = [];
  currentDoc?: DocsMenuNode;
  constructor(private sanitizer: DomSanitizer) {
    super();
    this.dataSource.data = DOCS_NAV_TREE;
    this.onNodeClick(DOCS_NAV_TREE[0]);
  }
  ngOnInit(): void {
    this.translationPath = 'app/docs/components/docs';
    this.translationService.use(this.translationPath).subscribe(() => this.toastrService.info(this._t("translations_coming_soon", "Translations for the documentation are coming soon.")));

    // this.translationService.lang$.subscribe(
    //   () => {
    //     this.translationService.use(this.translationPath).subscribe((response) => {
    //       this.dataSource.data = this.dataSource.data.map(
    //         (node, index_1) => {
    //           // Assign Translation name to the node
    //           node.name = response[`docs_nav_tree.node_${index_1 + 1}.name`];
    //           //Assign Translation name to the node children
    //           node.children = node.children?.map(
    //             (children, index_2) => {
    //               children.name = response[`docs_nav_tree.node_${index_1 + 1}.children_${index_2 + 1}.name`];
    //               children.children?.map((child, index_3) => {
    //                 child.name = response[`docs_nav_tree.node_${index_1 + 1}.children_${index_2 + 1}.children_${index_3 + 1}.name`]
    //                 return child;
    //               });
    //               return children;
    //             }
    //           );
    //           return node
    //         }
    //       )
    //     })
    //   }
    // )
  }

  hasChild = (_: number, node: DocsMenuNode) => !!node.children && node.children.length > 0;

  onNodeClick(menuItem: DocsMenuNode) {
    if (menuItem.link == undefined) {
      return;
    }

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

        if (!!data.link) {
          (window as any).open(data.link, '_blank');
          return;
        }
        this.lastReviewedOn = data.lastReviewedOn;
        // replace __API__ with the API URL
        this.doc = data.content.replace(/__API__/g, environment.apiUrl);
        if (!!data.iframeSrc) {
          this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.iframeSrc);
        } else if (!!data.api) {
          this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(environment.apiUrl);
        } else {
          this.iframeSrc = undefined;
        }

        // @TODO: Modify the URL here by appending the doc name to it
        //this.location.replaceState(`/docs/${menuItem.link}`);

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
}
