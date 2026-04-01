import { Component } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';

@Component({
  selector: 'eventos',
  standalone: true,
  imports: [MessageBoxComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {

}
