import { Component, OnInit } from '@angular/core';
import { MarketRakerBaseComponent } from 'src/app/shared/components/base/market-raker-base.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.scss']
})
export class ConnectWalletComponent extends MarketRakerBaseComponent implements OnInit   {
  tokensPerMonthRequired = environment.tokensPerMonthRequired;
  tokensUnlimitedAccess = environment.tokensUnlimitedAccess;
  tokensStakeHolderAccess = environment.tokensStakeHolderAccess;
  isModalOpen: boolean = false;

  ngOnInit(): void {
    this.translationPath = 'app/trade/components/connect-wallet';
    this.translationService.use(this.translationPath).subscribe(); // Set the language to English
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
