import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselViewModel } from '../../../viewModels/carousel.viewModel';
import { CommonModule } from '@angular/common';

declare var M: any;

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Output() onSetCarouselText = new EventEmitter<string>();
  @Input() carouselItems!: CarouselViewModel[];

  ngAfterViewInit() {
    this.configCarousel();
  }

  configCarousel() {
    const elems = document.querySelectorAll('.carousel') as unknown as HTMLElement;
    const instances = M.Carousel.init(elems, {
      dist: -100,
      shift: 50,
      padding: 0,
      numVisible: 5,
      indicators: false
    });

    const instance = instances[0];

    elems.removeEventListener('mousedown', (instance as any)._handleCarouselTap);
    elems.removeEventListener('mousemove', (instance as any)._handleCarouselDrag);
    elems.removeEventListener('mouseup', (instance as any)._handleCarouselRelease);
    elems.removeEventListener('touchstart', (instance as any)._handleTouchStart);
    elems.removeEventListener('touchmove', (instance as any)._handleTouchMove);
    elems.removeEventListener('touchend', (instance as any)._handleTouchEnd);

    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        // Impede o comportamento padrão que poderia disparar o drag
        e.preventDefault();
        instance.set(index);
      });
    });
  }


  onClickCarousel(text: string) {
    console.log(text);
    this.onSetCarouselText.emit(text);
  }
}
