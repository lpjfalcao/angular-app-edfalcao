import { HostListener, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenuViewModel } from '../../viewModels/mainMenu.viewModel';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public menuItems: MainMenuViewModel[] = [];

  constructor(private router: Router) { }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  loadMenuItems() {
    this.menuItems = [
      { title: 'Home', url: '/home', icon: 'home' },
      { title: 'Obras', url: '/obras', icon: 'palette' },
      { title: 'Premiações', url: '/premiacoes', icon: 'trophy' },
      { title: 'Exposições', url: '/eventos', icon: 'calendar_month' },
      { title: 'Biografia', url: '/biografia', icon: 'person_book' },
      { title: 'Contato', url: '/contato', icon: 'call' }
    ];

    //this.activeMenu();
  }

  setHeaderStyles() {
    const pathname = window.location.pathname;
    const header = document.querySelector('header');

    if (header) {
      if (pathname.includes('/obras')) {
        header.style.background = '#2B5A8E';
        header.style.height = window.innerWidth > 1024 ? '57px' : '90px';
      }
      else {
        header.style.background = 'transparent';
        header.style.height = window.innerWidth > 1024 ? '70px' : '90px';
      }
    }
  }
}