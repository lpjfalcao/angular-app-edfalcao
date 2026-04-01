import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'message-box',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.scss'
})
export class MessageBoxComponent {
  @Input() title: string = 'Página em construção';
  @Input() message = `Esta página está em construção. Enquanto isso você pode usar o menu acima para conferir as páginas de obras, biografia e a home que já estão prontas.`;
}
