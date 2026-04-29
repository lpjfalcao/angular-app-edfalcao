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
import { CommonService } from '../../shared/services/common.service';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';

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
    MatProgressSpinnerModule,
    ErrorMessageComponent],
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
  somAtivado: boolean = false;

  @ViewChild('emblaRef', { static: false }) emblaRef!: ElementRef;
  @ViewChild('masonry') masonry?: NgxMasonryComponent;
  @ViewChild('meuVideo') _meuVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoBackground') _videoBackground!: ElementRef<HTMLVideoElement>;

  carouselText: string = 'Clique nas imagens para visualizar';
  carouselViewModel: CarouselViewModel[] = [];
  carouselPrincipaisObraViewModel: CarouselViewModel[] = [];
  sobreViewModel!: SobreViewModel;
  eventosViewModel: EventoViewModel[] = [];
  hasError: boolean = false;

  constructor(private homeService: HomeService, public commonService: CommonService) {
  }



  ngOnInit() {
    this.homeService.getHomeData(`${environment.api.baseUrl}/home`).subscribe({
      next: (homeData: any) => {
        this.carregarDestaques(homeData);
        this.carregarBiografia(homeData);
        this.carregarObrasPrincipais(homeData);
        this.carregarEventos(homeData);

        setTimeout(() => {
          this.isLoading = false;
        }, environment.isLoadingTimeout)

        document.querySelector('footer')?.classList.remove('u-hide');
      },
      error: (err) => {
        console.log(err);
        setTimeout(() => {
          this.hasError = true;
          this.isLoading = false;
        }, environment.isLoadingTimeout)
      }
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

  @ViewChild('meuVideo') set videoRef(content: ElementRef<HTMLVideoElement>) {
    if (content) { // O 'content' existirá quando o *ngIf for true
      this._meuVideo = content;
      this.configurarVideo();
    }
  }

  @ViewChild('videoBackground') set videoRefBackground(content: ElementRef<HTMLVideoElement>) {
    if (content) {
      this._videoBackground = content;
      this._videoBackground.nativeElement.muted = true;
      this._videoBackground.nativeElement.play();
    }
  }

  get meuVideo() {
    return this._meuVideo;
  }

  configurarVideo() {
    if (this._meuVideo) {
      const video = this._meuVideo.nativeElement;
      console.log('Vídeo detectado e pronto para uso:', video);
      this._meuVideo.nativeElement.muted = true;
      this._meuVideo.nativeElement.play();
    }
  }

  ligarSom() {
    if (this._meuVideo) {
      const video = this._meuVideo.nativeElement;
      video.muted = false; // Desmuta o vídeo
      video.volume = 0.5;  // Define um volume de 50%
      this.somAtivado = true;
      video.play().catch(err => console.error("Erro ao dar play com som:", err));
    }
  }

  desligarSom() {
    if (this._meuVideo) {
      const video = this._meuVideo.nativeElement;
      video.muted = true
      this.somAtivado = false;
    }
  }
}


export class EventoViewModel {
  id!: number;
  imagemUrl!: string;
  titulo!: string;
  descricao!: string;
  link?: string;
}