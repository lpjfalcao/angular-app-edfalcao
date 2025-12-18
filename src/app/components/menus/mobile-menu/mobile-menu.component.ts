import { Component, inject, Input } from '@angular/core';
import { MobileMenuService } from './mobile-menu.service';
import { MatListModule } from '@angular/material/list';
import { MenuMobileViewModel } from '../../../viewModels/menuMobile.viewModel';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from '../../modals/login-modal/login-modal.component';

@Component({
  selector: 'mobile-menu',
  standalone: true,
  imports: [MatListModule, CommonModule, MatButtonModule, MatDialogModule, LoginModalComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  @Input() menuItems: MenuMobileViewModel[] = [];
  
  readonly dialog = inject(MatDialog);

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

   openDialog() {
      const dialogRef = this.dialog.open(LoginModalComponent, {
        minWidth: '400px',
        minHeight: '600px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

      this.mobileMenuService.closeMenuMobile();
    }
}
