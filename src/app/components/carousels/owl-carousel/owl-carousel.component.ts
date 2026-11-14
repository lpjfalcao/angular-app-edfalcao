import { Component, HostListener, Input } from '@angular/core';
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
  @Input() quantidadeItemsMobile!: number;
  @Input() quantidadeItens!: number;
  @Input() mostrarIndicadores: boolean = false;
  @Input() owlId!: string;

  isMobile: boolean = false;
  currentWidth: number;
  customOptions!: OwlOptions;

  // customOptions: OwlOptions = {
  //   nav: true,
  //   loop: true,
  //   autoplay: false,
  //   center: true,
  //   dots: false,
  //   autoHeight: true,
  //   autoWidth: true,
  //   autoplayTimeout: 3000,    // Tempo de espera (3000ms = 3 segundos)
  //   autoplaySpeed: 800,
  //   responsive: {
  //     0: {
  //       items: this.quantidadeItemsMobile,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: this.quantidadeItens,
  //     }
  //   },
  //   navText: [
  //     `<span class="material-symbols-outlined material-icon">
  //   chevron_left
  // </span>`,
  //     `<span class="material-symbols-outlined material-icon">
  //   chevron_right
  // </span>`
  //   ],
  //}

  constructor() {
    this.currentWidth = window.innerWidth;
  }

  ngOnInit() {
    this.customOptions = {
      nav: true,
      loop: true,
      autoplay: false,
      center: true,
      dots: this.mostrarIndicadores,
      autoHeight: true,
      autoWidth: true,
      autoplayTimeout: 3000,    // Tempo de espera (3000ms = 3 segundos)
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: this.quantidadeItemsMobile,
        },
        600: {
          items: 1,
        },
        1000: {
          items: this.quantidadeItens,
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

    if (this.customOptions && this.customOptions.responsive) {
      this.customOptions.responsive['0'].items = this.quantidadeItemsMobile;
      this.customOptions.responsive['600'].items = this.quantidadeItemsMobile;
    }
  }

  ngAfterViewInit() {
    this.checkIskMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const newWidth = window.innerWidth;
    if (newWidth != this.currentWidth) {
      this.currentWidth = newWidth;
      window.location.reload();
    }
  }

  checkIskMobile() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
      this.setMobileStylesObrasCarousel();
      this.setMobileStylesDestaquesCarousel();
      this.hideNavIcons();
    }
    else {
      this.setWebStyles();
    }
  }

  setMobileStylesObrasCarousel() {
    const carouselItems = document.querySelectorAll('.owl-carousel-obras .owl-carousel .owl-item img') as NodeListOf<HTMLImageElement>;
    if (this.isMobile) {
      carouselItems.forEach(image => {
        if (this.owlId != 'destaques') {
          image.classList.remove('u-height-620');
          image.classList.add('u-height-142');
        }
      });
    }
  }

  setMobileStylesDestaquesCarousel() {
    const carouselItems = document.querySelectorAll('.owl-carousel-destaques .owl-carousel .owl-item img') as NodeListOf<HTMLImageElement>;
    if (this.isMobile) {
      carouselItems.forEach(image => {
        if (this.owlId == 'destaques') {
          image.classList.add('u-height-320');
        }
      });
    }
  }

  hideNavIcons() {
    const navIcons = document.querySelectorAll('.owl-carousel-obras .owl-carousel .owl-nav') as NodeListOf<HTMLElement>;
    navIcons.forEach(icon => {
      if (this.owlId != 'destaques') {
        icon.classList.add('u-hide');
      }
    })
  }

  setWebStyles() {
    const carouselItems = document.querySelectorAll('.owl-carousel .owl-item img') as NodeListOf<HTMLImageElement>;
    const pathname = window.location.pathname;
    const navs = document.querySelectorAll('.owl-carousel  .owl-nav') as NodeListOf<HTMLElement>;
    const previousIcon = document.querySelector('.owl-prev') as HTMLElement;
    const nextIcon = document.querySelector('.owl-next') as HTMLElement;

    carouselItems.forEach(image => {
      if (!pathname.includes('/eventos')) {
        image.classList.add('u-height-620');
      } 
      else {
          navs.forEach(nav => {
            nav.style.top = '40%';            
          });

          previousIcon.style.left = '-26px';
          previousIcon.style.position = 'relative';
      }     
    });
  }

  unSetStyles() {
    const carouselItems = document.querySelectorAll('.owl-carousel-obras .owl-carousel .owl-item img') as NodeListOf<HTMLImageElement>;
    carouselItems.forEach(image => {
      if (this.owlId != 'destaques') {
        image.classList.remove('u-height-142');
      }
    });
  }
}
