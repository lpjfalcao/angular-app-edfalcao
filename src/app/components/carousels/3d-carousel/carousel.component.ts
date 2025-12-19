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
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, {
      dist: -100,
      shift: 50,
      padding: 0,
      numVisible: 5
    });  
  }


  onClickCarousel(text: string) {
    console.log(text);
    this.onSetCarouselText.emit(text);
  }
}
