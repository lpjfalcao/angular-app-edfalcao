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
import { EventoContainerViewModel, EventoRootViewModel, EventosService } from './eventos.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'eventos',
  standalone: true,
  imports: [MessageBoxComponent,
    BreadcrumbComponent,
    OwlCarouselComponent,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatProgressSpinnerModule,
    ErrorMessageComponent],
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

  eventoContainerViewModel: EventoContainerViewModel[] = [];

  hasError: boolean = false;
  isLoading: boolean = true;

  constructor(public commonService: CommonService, public eventosService: EventosService) {
  }

  ngOnInit() {
    this.commonService.setHeaderStyles();
    this.loadEventos();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('redimensionado');
    this.commonService.setHeaderStyles();
  }

  loadEventos(): void {
    this.eventosService.obterEventos(`${environment.api.baseUrl}/eventos`).subscribe({
      next: ((eventoRootViewModel: EventoRootViewModel) => {        
        eventoRootViewModel.eventos.forEach(eventoContainer => {
          console.log(eventoContainer)
          this.eventoContainerViewModel.push({
            Id: eventoContainer.Id,
            Evento: {
              Description: eventoContainer.Evento.Description.substring(0, 300) + '...',
              ImageUrl: eventoContainer.Evento.ImageUrl,
              Title: eventoContainer.Evento.Title,
              Cidade: eventoContainer.Evento.Cidade
            }
          });
          this.isLoading = false;
        });
      }),
      error: (err) => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

   selecionarEvento(id: number) {
    this.commonService.goTo(`/eventos/${id}`)
  }
}
