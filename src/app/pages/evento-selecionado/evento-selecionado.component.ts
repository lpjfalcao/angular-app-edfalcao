import { Component, HostListener } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';
import { CommonService } from '../../shared/services/common.service';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { OwlCarouselComponent } from '../../components/carousels/owl-carousel/owl-carousel.component';
import { EventItem, EventListComponent } from './event-list/event-list.component';

@Component({
  selector: 'app-evento-selecionado',
  standalone: true,
  imports: [MessageBoxComponent, BreadcrumbComponent, OwlCarouselComponent, EventListComponent],
  templateUrl: './evento-selecionado.component.html',
  styleUrl: './evento-selecionado.component.scss'
})
export class EventoSelecionadoComponent {
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

  events: EventItem[] = [
    {
      id: 1,
      title: 'Mostra de Arte',
      category: 'Exposição',
      location: 'Centro Cultural de Nova Iguaçu',
      image: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      link: '/eventos/mostra-arte'
    },
    {
      id: 2,
      title: 'Encontro de Artistas',
      category: 'Encontro',
      location: 'Espaço Cultural da Baixada',
      image: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      link: '/eventos/encontro-artistas'
    },
    {
      id: 3,
      title: 'Exposição Coletiva',
      category: 'Exposição',
      location: 'Galeria Municipal de Belford Roxo',
      image: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      link: '/eventos/exposicao-coletiva'
    },
    {
      id: 4,
      title: 'Oficina de Pintura',
      category: 'Oficina',
      location: 'Casa de Cultura de São João de Meriti',
      image: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/I-Expo-Baixada-7-destaque.jpg',
      link: '/eventos/oficina-pintura'
    }
  ];

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    console.log('Eventos:', this.events);
    this.commonService.setHeaderStyles();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('redimensionado');
    this.commonService.setHeaderStyles();
  }
}
