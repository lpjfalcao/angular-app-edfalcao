import { Component, Input } from '@angular/core';
import { GridViewModel } from '../../../viewModels/grid.viewModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'principais-obras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principais-obras.component.html',
  styleUrl: './principais-obras.component.scss',
})
export class PrincipaisObrasComponent {
  @Input() gridViewModel!: GridViewModel[];
}
