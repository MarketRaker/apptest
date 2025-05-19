
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MarketRakerBaseComponent } from 'src/app/shared/components/base/market-raker-base.component';
import { WalletService } from 'src/app/wallet/services/wallet.service';

declare global {
  interface Window {
    cardano: { [key: string]: any };
  }
}

@Component({
  selector: 'app-connect-wallet-modal',
  templateUrl: './connect-wallet-modal.component.html',
  styleUrls: ['./connect-wallet-modal.component.scss']
})
export class ConnectWalletModalComponent extends MarketRakerBaseComponent implements OnInit  {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  isWalletInstalled: { [key: string]: boolean } = { 'yoroi': false }
  isButtonActive: string = 'mobile';
  objectKeys = Object.keys;

  toggleButton(buttonType: string): void {
    this.isButtonActive = this.isButtonActive === buttonType ? '' : buttonType;
  }

  ngOnInit(): void {
    this.translationPath = 'app/trade/components/connect-wallet-modal';
    this.translationService.use(this.translationPath).subscribe(); // Set the language to English
    this.isWalletInstalled = this.walletService.getInstalledWallets()
  }
  onClick(key: string) {

    if (this.isWalletInstalled[key]) {
      this.walletService.authenticate(key)
    } else {
      this.toastrService.error('Wallet not installed', 'Error')
    }

  }

  getWalletIcon(key: string): string {
    return this.walletService.getWalletIcon(key);
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

}