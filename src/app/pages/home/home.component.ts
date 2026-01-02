import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselComponent } from '../../components/carousels/3d-carousel/carousel.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { MatButtonModule } from '@angular/material/button';
import { MobileCarouselComponent } from '../../components/carousels/mobile-carousel/mobile-carousel.component';
import { MatCardModule } from '@angular/material/card';
import { Tile } from '../../interfaces/tile.interface';
import { GridGalleryComponent } from '../../shared/grid-gallery/grid-gallery.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CarouselComponent, MatButtonModule, MatCardModule, MobileCarouselComponent, GridGalleryComponent],
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

  carouselText: string = 'Recebendo nova confreira da Academia Brasileira de Belas Artes';
  carouselItems: CarouselViewModel[] = [
    {
      title: 'Recebendo nova confreira da Academia Brasileira de Belas Artes',
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-1.jpg'
    },
    {
      title: 'Tributo ao dia da Consciência Negra no CBMERJ',
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-2.jpg'
    },
    {
      title: 'Cerimônia de Posse na Academia Brasileira de Belas Artes com Iraci Carise',
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-3.jpg'
    },
    {
      title: 'Academia Brasileira de Belas Artes em Búzios/RJ',
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-4.jpg'
    },
    {
      title: 'Imortais Acadêmicos da FALASP no Rio de Janeiro',
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-5.jpg'
    }
  ];

  obrasPrincipais: Tile[] = [];

  ngOnInit() {
    this.height = '120px';
    this.width = '100%';
    this.cols = 1;
    this.rows = 1;
    this.isLoading = true;

    let contaGrids = 1;

    // if (this.pagina > 1) {
      for (let i = 0; i < this.quantidade; i++) {
        this.gerarLayoutGrid(contaGrids);
        this.obrasPrincipais.push({
          image: `https://edfalcao-app.s3.us-east-1.amazonaws.com/img/principais+obras/obra-p-${i}.jpg`,
          height: this.height,
          width: this.width,
          cols: this.cols,
          rows: this.rows,
          isLoading: true,
          color: ''
        });
      }
    // }
  }

  setCarouselText(event: any) {
    this.carouselText = event;
  }

  gerarLayoutGrid(contaGrids: number) {
    if (contaGrids == 10 || contaGrids == 21) {
      this.height = '240px';
      this.cols = 2;
      this.rows = 2;
    }

    if (contaGrids == 30) {
      this.cols = 3;
      this.rows = 1;
    }

    if (contaGrids == 21) {
      contaGrids = 1;
    }
  }

  quandoUsuarioSelecionarItemNaGrid(event: any) {
    console.log(`Evento acionado: ${event}`);
  }
}
