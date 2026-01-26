import { Injectable, Input } from '@angular/core';
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

  // activeMenu() {
  //   const itemsMenu = document.querySelector('.items-lista-menu') as any;
  //   itemsMenu.forEach((el: any) => {
  //     el.nativeElement.classList.remove('menu-active');
  //     el.nativeElement.querySelector('.hover-border').classList.remove('hover-border-active');
  //     el.nativeElement.querySelector('a').classList.remove('active-link');
  //   });
  // }
}
