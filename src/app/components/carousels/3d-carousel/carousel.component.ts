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
      numVisible: 5,
      indicators: true
    });  

    const instance = instances[0];

  // Vamos interceptar os cliques nas imagens do carousel
  const carouselItems = document.querySelectorAll('.carousel-item');
  
  carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Forçamos o carousel a navegar para o item clicado
      instance.set(index);
      
      // O 'set' do Materialize deveria atualizar os indicadores, 
      // mas vamos forçar um 'refresh' visual para garantir:
      setTimeout(() => {
        const indicators = document.querySelectorAll('.indicator-item');
        indicators.forEach((dot, i) => {
          if (i === instance.center) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }, 300); // Tempo da animação de transição
    });
  });
  }


  onClickCarousel(text: string) {
    console.log(text);
    this.onSetCarouselText.emit(text);
  }
}
