import { Component, Input, ViewChildren } from '@angular/core';
import { MainMenuViewModel } from '../../../viewModels/mainMenu.viewModel';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  @ViewChildren('itemLista') itensMenu!: any;
  @Input() menuItems: MainMenuViewModel[] = [];

  ngOnInit() {
    this.loadMenuItems();
  }

  loadMenuItems() {
    this.menuItems = [
      { title: 'Home', url: '/home', icon: 'home', active: true },
      { title: 'Obras', url: '/obras', icon: 'palette' },
      { title: 'Premiações', url: '/premiacoes', icon: 'trophy' },
      { title: 'Eventos', url: '/eventos', icon: 'calendar_month' },
      { title: 'Biografia', url: '/bio', icon: 'person_book' },
      { title: 'Contato', url: '/contato', icon: 'call' }
    ];
  }

  active(element: MouseEvent) {
    this.itensMenu.forEach((el: any) => {
      el.nativeElement.classList.remove('menu-active');
      el.nativeElement.querySelector('.hover-border').classList.remove('hover-border-active');
      el.nativeElement.querySelector('a').classList.remove('active-link');
    });

    const target = element.currentTarget as HTMLElement;
    const hoverBorder = target.querySelector('.hover-border');
    const link = target.querySelector('a');

    target?.classList.add('menu-active');
    hoverBorder?.classList.add('hover-border-active');
    link?.classList.add('active-link');
  }
}
