import { Component } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';

@Component({
  selector: 'premiacoes',
  standalone: true,
  imports: [MessageBoxComponent],
  templateUrl: './premiacoes.component.html',
  styleUrl: './premiacoes.component.scss'
})
export class PremiacoesComponent {

}
