import { Component } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';

@Component({
  selector: 'contato',
  standalone: true,
  imports: [MessageBoxComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

}
