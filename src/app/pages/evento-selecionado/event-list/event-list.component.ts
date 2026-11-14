import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface EventItem {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {
  @Input() title: string = 'Agenda de Eventos';

  @Input() events!: EventItem[];
}
