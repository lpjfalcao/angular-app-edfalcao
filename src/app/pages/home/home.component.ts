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
    OwlCarouselComponent],
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
  isLoading: boolean = false;

  @ViewChild('emblaRef', { static: false }) emblaRef!: ElementRef;
  @ViewChild('masonry') masonry?: NgxMasonryComponent;

  carouselText: string = 'Recebendo nova confreira da Academia Brasileira de Belas Artes';
  carouselViewModel!: CarouselViewModel[];
  carouselPrincipaisObraViewModel!: CarouselViewModel[];
  sobreViewModel!: SobreViewModel;
  eventosViewModel!: EventoViewModel[];

  constructor(private homeService: HomeService) {

  }

  ngOnInit() {
    this.carouselViewModel = this.homeService.getCarouselItems();
    this.carouselPrincipaisObraViewModel = this.homeService.getCarouselPrincipaisObrasItems();
    this.sobreViewModel = this.homeService.getBioInfo();
    this.eventosViewModel = this.homeService.getEventos();
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
  link!: string;
}