import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselComponent } from '../../components/carousels/3d-carousel/carousel.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { MatButtonModule } from '@angular/material/button';
import { MobileCarouselComponent } from '../../components/carousels/mobile-carousel/mobile-carousel.component';
import { MatCardModule } from '@angular/material/card';
import { Tile } from '../../interfaces/tile.interface';
import { GridGalleryComponent } from '../../shared/grid-gallery/grid-gallery.component';
import { NgxMasonryComponent, NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';
import { GridViewModel } from '../../viewModels/grid.viewModel';
import { HomeService } from './home.service';
import { SobreViewModel } from '../../viewModels/sobre.viewModel';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CarouselComponent, MatButtonModule, MatCardModule, MobileCarouselComponent, GridGalleryComponent, CommonModule],
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
  carouselViewModel: CarouselViewModel[] = []; 
  gridViewModel: GridViewModel[] = [];
  sobreViewModel!: SobreViewModel;

  constructor(private homeService: HomeService) {

  }

  ngOnInit() {
    this.carouselViewModel = this.homeService.getCarouselItems();
    this.gridViewModel = this.homeService.getGridItems();
    console.log(this.gridViewModel);
    this.sobreViewModel = this.homeService.getBioInfo();
  }

  setCarouselText(event: any) {
    this.carouselText = event;
  }  
}
