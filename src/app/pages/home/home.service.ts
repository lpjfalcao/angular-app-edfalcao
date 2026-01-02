import { Injectable } from '@angular/core';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { GridViewModel } from '../../viewModels/grid.viewModel';
import { SobreViewModel } from '../../viewModels/sobre.viewModel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  carouselViewModel!: CarouselViewModel[];
  gridViewModel!: GridViewModel[];
  sobreViewModel!: SobreViewModel;

  constructor() { }

  getCarouselItems(): CarouselViewModel[] {
    return this.carouselViewModel = [
      {
        title: 'Recebendo nova confreira da Academia Brasileira de Belas Artes',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-1.jpg',
        tipo: 'ratio-portrait'
      },
      {
        title: 'Tributo ao dia da Consciência Negra no CBMERJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-2.jpg',
        tipo: 'ratio-square'
      },
      {
        title: 'Cerimônia de Posse na Academia Brasileira de Belas Artes com Iraci Carise',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-3.jpg',
        tipo: 'ratio-square'
      },
      {
        title: 'Academia Brasileira de Belas Artes em Búzios/RJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-4.jpg',
        tipo: 'ratio-tall'
      },
      {
        title: 'Imortais Acadêmicos da FALASP no Rio de Janeiro',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-5.jpg',
        tipo: 'ratio-tall'
      }
    ];
  }

  getGridItems(): GridViewModel[] {
     this.gridViewModel = [
      {
        id: 1,
        title: 'Recebendo nova confreira da Academia Brasileira de Belas Artes',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-1.jpg',
      },
      {
        id: 2,
        title: 'Tributo ao dia da Consciência Negra no CBMERJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-2.jpg',
      },
      {
        id: 3,
        title: 'Cerimônia de Posse na Academia Brasileira de Belas Artes com Iraci Carise',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-3.jpg',
      },
      {
        id: 4,
        title: 'Academia Brasileira de Belas Artes em Búzios/RJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-4.jpg',
      },
      {
        id: 5,
        title: 'Imortais Acadêmicos da FALASP no Rio de Janeiro',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-5.jpg',
      },

      {
        id: 6,
        title: 'Recebendo nova confreira da Academia Brasileira de Belas Artes',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-1.jpg',
      },
      {
        id: 7,
        title: 'Tributo ao dia da Consciência Negra no CBMERJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-2.jpg',
      },
      {
        id: 8,
        title: 'Cerimônia de Posse na Academia Brasileira de Belas Artes com Iraci Carise',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-3.jpg',
      },
      {
        id: 9,
        title: 'Academia Brasileira de Belas Artes em Búzios/RJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-4.jpg',
      },
      {
        id: 10,
        title: 'Imortais Acadêmicos da FALASP no Rio de Janeiro',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-5.jpg',
      },
      {
        id: 11,
        title: 'Recebendo nova confreira da Academia Brasileira de Belas Artes',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-1.jpg',
      },
      {
        id: 12,
        title: 'Tributo ao dia da Consciência Negra no CBMERJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-2.jpg',
      },
      {
        id: 13,
        title: 'Cerimônia de Posse na Academia Brasileira de Belas Artes com Iraci Carise',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-3.jpg',
      },
      {
        id: 14,
        title: 'Academia Brasileira de Belas Artes em Búzios/RJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-4.jpg',
      },
      {
        id: 15,
        title: 'Imortais Acadêmicos da FALASP no Rio de Janeiro',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-5.jpg',
      },
      {
        id: 16,
        title: 'Recebendo nova confreira da Academia Brasileira de Belas Artes',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-1.jpg',
      },
      {
        id: 17,
        title: 'Tributo ao dia da Consciência Negra no CBMERJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-2.jpg',
      },
      {
        id: 18,
        title: 'Cerimônia de Posse na Academia Brasileira de Belas Artes com Iraci Carise',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-3.jpg',
      },
      {
        id: 19,
        title: 'Academia Brasileira de Belas Artes em Búzios/RJ',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-4.jpg',
      },
      {
        id: 20,
        title: 'Imortais Acadêmicos da FALASP no Rio de Janeiro',
        imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/destaques/academico-5.jpg',
      }
    ];

    return this.gridViewModel;
  }

  getBioInfo(): SobreViewModel {
    return {
      bio: `Membro da Academia Brasileira de Belas Artes (cadeira nº 50), da Academia de Letras e Artes Paranapuã
            (cadeira
            nº 38) e da Academia de Letras e Artes da Mantiqueira (cadeira nº 38 – FALASP), além de membro
            correspondente das Academias de Cabo Frio e de Búzios. Nascido no Rio de Janeiro, iniciou-se na pintura
            influenciado por sua cultura e incentivado por familiares e pela artista plástica Janete Boaventura. Seu
            trabalho retrata a cultura, o cotidiano e os momentos históricos do povo afrobrasileiro, em um gesto de
            resgate e gratidão aos ancestrais que, mesmo sob dor e sofrimento, deixaram um legado de força e
            liberdade.`,
      imageUrl: 'https://edfalcao-app.s3.us-east-1.amazonaws.com/img/edfalcao-ao-lado-quadro-exu.png'
    } as SobreViewModel
  }
}
