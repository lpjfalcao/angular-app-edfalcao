import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MobileMenuService } from '../../menus/mobile-menu/mobile-menu.service';

@Component({
  selector: 'login-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  fieldOnFocusUser: boolean = false;
  fieldOnFocusPassword: boolean = false;

  constructor(public mobileMenuService: MobileMenuService) { }

  active(target: Event) {
    const element = target.currentTarget as HTMLElement;
    switch (element.id) {
      case 'fieldOnFocusUser':
        this.fieldOnFocusUser = true;
        this.fieldOnFocusPassword = false;
        break;
      case 'fieldOnFocusPassword':
        this.fieldOnFocusPassword = true;
        this.fieldOnFocusUser = false;
        break;
    }
  }

  off(target: Event) {
    const element = target.currentTarget as HTMLElement;
    switch (element.id) {
      case 'fieldOnFocusUser':
        this.fieldOnFocusUser = false;
        break;
      case 'fieldOnFocusPassword':
        this.fieldOnFocusPassword = false;
        break;
    }
  }
}
