import { Component, Input } from '@angular/core';
import { MobileMenuService } from './mobile-menu.service';
import { MatListModule } from '@angular/material/list';
import { MenuMobileViewModel } from '../../../viewModels/menuMobile.viewModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mobile-menu',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  @Input() menuItems: MenuMobileViewModel[] = [];

  constructor(public mobileMenuService: MobileMenuService) { }

  ngOnInit() {
    this.loadMenuItems();
  }

  action(url: string) {
    console.log(`open ${url}`);
  }

  loadMenuItems() {
    this.menuItems = [
      { title: 'Home', url: '/home'  },
      { title: 'Obras', url: '/obras' },
      { title: 'Premiações', url: '/premiacoes' },
      { title: 'Eventos', url: '/eventos'},
      { title: 'Biografia', url: '/bio',  },
      { title: 'Contato', url: '/contato' }
    ];
  }
}
