import { Component, Input } from '@angular/core';
import { GridViewModel } from '../../../viewModels/grid.viewModel';
import { CommonModule } from '@angular/common';
import { OwlCarouselComponent } from '../../../components/carousels/owl-carousel/owl-carousel.component';

@Component({
  selector: 'principais-obras',
  standalone: true,
  imports: [CommonModule, OwlCarouselComponent],
  templateUrl: './principais-obras.component.html',
  styleUrl: './principais-obras.component.scss',
})
export class PrincipaisObrasComponent {
  @Input() gridViewModel!: GridViewModel[];
}
