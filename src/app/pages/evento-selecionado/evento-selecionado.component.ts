import { Component, HostListener } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';
import { CommonService } from '../../shared/services/common.service';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { OwlCarouselComponent } from '../../components/carousels/owl-carousel/owl-carousel.component';
import { EventItem, EventListComponent } from './event-list/event-list.component';
import { EventoContainerViewModel, EventoRootViewModel, EventosService, FotoEventoContainerViewModel } from '../eventos/eventos.service';
import { EventoSelecionadoRootViewModel, EventoSelecionadoService } from './evento-selecionado.service';
import { environment } from '../../../environments/environment';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-evento-selecionado',
  standalone: true,
  imports: [MessageBoxComponent, BreadcrumbComponent, OwlCarouselComponent, EventListComponent, ErrorMessageComponent, MatProgressSpinnerModule, CommonModule],
  templateUrl: './evento-selecionado.component.html',
  styleUrl: './evento-selecionado.component.scss'
})
export class EventoSelecionadoComponent {
  carouselItems: CarouselViewModel[] = [];

  events: EventItem[] = [];

  eventoSelecionadoViewModel!: EventoContainerViewModel;

  isLoading: boolean = true;
  hasError: boolean = false;
  isLoadingAside: boolean = true;
  hasErrorAside: boolean = false;

  constructor(private commonService: CommonService,
    private eventoSelecionadoService: EventoSelecionadoService,
    private eventosService: EventosService,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.commonService.setHeaderStyles();
    this.activeRoute.params.subscribe(params => {
      this.carregarDados(params['id']).subscribe({
        next: ({ eventos, eventoSelecionado, fotos }) => {
          this.eventoSelecionadoViewModel = eventoSelecionado.evento;

          eventos.eventos.forEach(evento => {
            this.events.push({
              id: evento.Id,
              image: evento.Evento.ImageUrl,
              category: 'Exposição',
              link: `/eventos/${evento.Id}`,
              location: evento.Evento.Cidade,
              title: evento.Evento.Title
            });

            let fotoEventos: CarouselViewModel[] = [];
            fotos.fotos.forEach((item: FotoEventoContainerViewModel) => {
              fotoEventos.push({
                imageUrl: item.ImageUrl
              });
            });

            this.carouselItems = fotoEventos;

            setTimeout(() => {
              this.hasError = false;
              this.isLoading = false;
            }, environment.isLoadingTimeout);
          });
        },
      });
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('redimensionado');
    this.commonService.setHeaderStyles();
  }

  obterEventoSelecionado(id: number) {
    this.eventoSelecionadoService.obterEventoPorId(`${environment.api.baseUrl}/eventos/${id}`).subscribe({
      next: (eventoRootViewModel) => {
        this.eventoSelecionadoViewModel = eventoRootViewModel.evento;
        this.isLoading = false;
      },
      error: (err) => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  obterEventos() {
    this.eventosService.obterEventos(`${environment.api.baseUrl}/eventos`).subscribe({
      next: (eventoRootViewModel) => {
        eventoRootViewModel.eventos.forEach(evento => {
          debugger;
          this.events.push({
            id: evento.Id,
            image: evento.Evento.ImageUrl,
            category: 'Exposição',
            link: `/eventos/${evento.Id}`,
            location: evento.Evento.Cidade,
            title: evento.Evento.Title
          });
          this.hasErrorAside = false;
          this.isLoadingAside = false;
        });
      },
      error: (err) => {
        this.hasErrorAside = true;
        this.isLoadingAside = false;
      }
    })
  }

  carregarDados(eventoId: number) {
    return forkJoin({
      eventos: this.eventosService.obterEventos(`${environment.api.baseUrl}/eventos`),
      eventoSelecionado: this.eventoSelecionadoService.obterEventoPorId(`${environment.api.baseUrl}/eventos/${eventoId}`),
      fotos: this.eventosService.obterFotosPorEvento(`${environment.api.baseUrl}/eventos/${eventoId}/fotos`)
    });
  }
}
