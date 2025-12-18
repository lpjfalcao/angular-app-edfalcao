import { Component } from '@angular/core';
import { MobileMenuService } from './mobile-menu.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'mobile-menu',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  constructor(public mobileMenuService: MobileMenuService) {}

    action(task: string) {
      console.log('item list clicked');
  }
}
