import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'the_nourish_key';

  constructor(
    private modalService: NgbModal,
    @Inject(PLATFORM_ID)
    private platformId: Object) {
    if(isPlatformBrowser(this.platformId))
      { sessionStorage.setItem('NAV_BAR_HIDE', '1');}
  }

  public showNavbar() {
    if(isPlatformBrowser(this.platformId)) {
      if(sessionStorage.getItem('NAV_BAR_HIDE') == '0') {
        return true
      }
      else {
        return false
      }
    }
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
