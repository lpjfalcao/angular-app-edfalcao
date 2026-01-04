import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselViewModel } from '../../../viewModels/carousel.viewModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'owl-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './owl-carousel.component.html',
  styleUrl: './owl-carousel.component.scss'
})
export class OwlCarouselComponent {
  @Input() carouselViewModel!: CarouselViewModel[];

  customOptions: OwlOptions = {
    nav: true,
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    autoplayTimeout: 3000,    // Tempo de espera (3000ms = 3 segundos)
    autoplaySpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      }
    },
    navText: [
      `<span class="material-symbols-outlined material-icon">
    chevron_left
  </span>`,
      `<span class="material-symbols-outlined material-icon">
    chevron_right
  </span>`
    ],
  }
}
