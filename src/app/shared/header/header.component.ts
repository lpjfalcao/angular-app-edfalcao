import { Component, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MainMenuComponent } from '../../components/menus/main-menu/main-menu.component';
import { MobileMenuComponent } from '../../components/menus/mobile-menu/mobile-menu.component';
import { ClickOutsideDirective } from '../../directives/clickOutside.directive';
import { MobileMenuService } from '../../components/menus/mobile-menu/mobile-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MainMenuComponent, MobileMenuComponent, ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public mobileMenuService: MobileMenuService) {
  }
}
