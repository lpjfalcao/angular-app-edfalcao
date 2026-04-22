import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
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
  carouselInstance: any;
  isMobile: boolean = false;

  ngOnInit() {
    this.checkIskMobile();
  }

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

    this.carouselInstance = instances[0];

    elems.removeEventListener('mousedown', (this.carouselInstance as any)._handleCarouselTap);
    elems.removeEventListener('mousemove', (this.carouselInstance as any)._handleCarouselDrag);
    elems.removeEventListener('mouseup', (this.carouselInstance as any)._handleCarouselRelease);
    elems.removeEventListener('touchstart', (this.carouselInstance as any)._handleTouchStart);
    elems.removeEventListener('touchmove', (this.carouselInstance as any)._handleTouchMove);
    elems.removeEventListener('touchend', (this.carouselInstance as any)._handleTouchEnd);

    const instance = this.carouselInstance;

    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      item.addEventListener('click', function(e) {
        // Impede o comportamento padrão que poderia disparar o drag
        e.preventDefault();
        instance.set(index);
      });
    });
  }

  next() {
    this.carouselInstance.next();
  }

  prev() {
    this.carouselInstance.prev();
  }


  onClickCarousel(text: string) {
    console.log(text);
    this.onSetCarouselText.emit(text);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIskMobile();
  }

  checkIskMobile() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
  }
}
