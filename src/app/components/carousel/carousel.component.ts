import { Component } from '@angular/core';

declare var M: any;

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
 ngAfterViewInit() {
  const elems = document.querySelectorAll('.carousel');
    // Aqui você passa as opções, como o 'dist' para o efeito 3D
    const instances = M.Carousel.init(elems, {
      dist: -100, // Intensidade do efeito 3D (padrão é -100)
      shift: 0,
      padding: 0,
      numVisible: 5
    });
  }
}
