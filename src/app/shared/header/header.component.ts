import { Component, ViewChildren } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChildren('itemLista') itensMenu!: any;

  active(element: MouseEvent) {
    this.itensMenu.forEach((el: any) => {
      el.nativeElement.classList.remove('menu-active');
      el.nativeElement.querySelector('.hover-border').classList.remove('hover-border-active');
    });

    const target = element.currentTarget as HTMLElement;
    const hoverBorder = target.querySelector('.hover-border');

    if (target) {
      target.classList.add('menu-active');
      hoverBorder?.classList.add('hover-border-active');
    }    
  }
}
