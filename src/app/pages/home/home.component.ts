import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselComponent } from '../../components/carousels/3d-carousel/carousel.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { MatButtonModule } from '@angular/material/button';
import { MobileCarouselComponent } from '../../components/carousels/mobile-carousel/mobile-carousel.component';
import { MatCardModule } from '@angular/material/card';
import { GridGalleryComponent } from '../../shared/grid-gallery/grid-gallery.component';
import { NgxMasonryComponent, NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { SobreViewModel } from '../../viewModels/sobre.viewModel';
import { PrincipaisObrasComponent } from './principais-obras/principais-obras.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { OwlCarouselComponent } from '../../components/carousels/owl-carousel/owl-carousel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../environments/environment';
import { HomeResponse } from '../../interfaces/responses/home.response';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CarouselComponent,
    MatButtonModule,
    MatCardModule,
    MobileCarouselComponent,
    GridGalleryComponent,
    CommonModule,
    PrincipaisObrasComponent,
    CarouselModule,
    OwlCarouselComponent,
    MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  height!: string;
  width!: string;
  cols!: number;
  rows!: number;
  pagina: number = 0;
  quantidade: number = 4;
  quantidadeMaximaItensDaGrid!: number;
  quantidadeMaximaItensDaGridCategoriaSelecionada!: number;
  isLoading: boolean = true;

  @ViewChild('emblaRef', { static: false }) emblaRef!: ElementRef;
  @ViewChild('masonry') masonry?: NgxMasonryComponent;

  carouselText: string = 'Clique nas imagens para visualizar';
  carouselViewModel: CarouselViewModel[] = [];
  carouselPrincipaisObraViewModel: CarouselViewModel[] = [];
  sobreViewModel!: SobreViewModel;
  eventosViewModel: EventoViewModel[] = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getHomeData(`${environment.api.baseUrl}/home`).subscribe((homeData: any) => {
      this.carregarDestaques(homeData);
      this.carregarBiografia(homeData);
      this.carregarObrasPrincipais(homeData);
      this.carregarEventos(homeData);
      this.isLoading = false;
      document.querySelector('footer')?.classList.remove('u-hide');
    });
  }

  carregarDestaques(homeData: HomeResponse) {
    for (const item of homeData.homeDestaques) {
      this.carouselViewModel.push({
        imageUrl: item.Destaque.ImageUrl,
        title: item.Destaque.Title
      });
    }
  }

  carregarBiografia(homeData: HomeResponse) {
    this.sobreViewModel = {
      bio: homeData.homeBio.Bio.Description,
      imageUrl: homeData.homeBio.Bio.ImageUrl
    }
  }

  carregarObrasPrincipais(homeData: HomeResponse) {
    for (const item of homeData.homeObrasPrincipais) {
      this.carouselPrincipaisObraViewModel.push({
        imageUrl: item.Obra.ImageUrl
      })
    }
  }

  carregarEventos(homeData: HomeResponse) {
    for (const item of homeData.homeEventos) {
      this.eventosViewModel.push({
        id: item.Id,
        descricao: item.Evento.Description.substring(0, 200) + '...',
        titulo: item.Evento.Title,
        imagemUrl: item.Evento.ImageUrl
      })
    }
  }

  setCarouselText(event: any) {
    this.carouselText = event;
  }
}

export class EventoViewModel {
  id!: number;
  imagemUrl!: string;
  titulo!: string;
  descricao!: string;
  link?: string;
}