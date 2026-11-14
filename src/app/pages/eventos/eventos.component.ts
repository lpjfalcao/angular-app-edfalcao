import { Component, HostListener } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';
import { CommonService } from '../../shared/services/common.service';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { OwlCarouselComponent } from '../../components/carousels/owl-carousel/owl-carousel.component';

@Component({
  selector: 'eventos',
  standalone: true,
  imports: [MessageBoxComponent, BreadcrumbComponent, OwlCarouselComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  carouselItems: CarouselViewModel[] = [
    {
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      title: 'Lorem ipsum'      
    },
    {
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      title: 'Lorem ipsum'      
    },
    {
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      title: 'Lorem ipsum'      
    },
    {
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      title: 'Lorem ipsum'      
    },
    {
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      title: 'Lorem ipsum'      
    }
  ];

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.setHeaderStyles();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('redimensionado');
    this.commonService.setHeaderStyles();
  }
}
