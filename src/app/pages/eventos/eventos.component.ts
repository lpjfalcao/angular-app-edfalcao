import { Component, HostListener } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';
import { CommonService } from '../../shared/services/common.service';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { OwlCarouselComponent } from '../../components/carousels/owl-carousel/owl-carousel.component';
import { EventoViewModel } from '../home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eventos',
  standalone: true,
  imports: [MessageBoxComponent, BreadcrumbComponent, OwlCarouselComponent, MatButtonModule, MatCardModule, CommonModule],
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

  eventosViewModel: EventoViewModel[] = [
    {
      id: 1,
      imagemUrl: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      titulo: 'Lorem ipsum',
      descricao: 'teste descrição do evento vem aqui quando este dado for dinâmico será recuperado do servidor via chamada de api',
      link: ''
    },
    {
      id: 2,
      imagemUrl: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      titulo: 'Lorem ipsum',
      descricao: 'teste descrição do evento vem aqui quando este dado for dinâmico será recuperado do servidor via chamada de api',
      link: ''
    },
    {
      id: 3,
      imagemUrl: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      titulo: 'Lorem ipsum',
      descricao: 'teste descrição do evento vem aqui quando este dado for dinâmico será recuperado do servidor via chamada de api',
      link: ''
    },
    {
      id: 4,
      imagemUrl: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      titulo: 'Lorem ipsum',
      descricao: 'teste descrição do evento vem aqui quando este dado for dinâmico será recuperado do servidor via chamada de api',
      link: ''
    },
    {
      id: 5,
      imagemUrl: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      titulo: 'Lorem ipsum',
      descricao: 'teste descrição do evento vem aqui quando este dado for dinâmico será recuperado do servidor via chamada de api',
      link: ''
    },
    {
      id: 6,
      imagemUrl: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      titulo: 'Lorem ipsum',
      descricao: 'teste descrição do evento vem aqui quando este dado for dinâmico será recuperado do servidor via chamada de api',
      link: ''
    }
  ];

  constructor(public commonService: CommonService) {
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
