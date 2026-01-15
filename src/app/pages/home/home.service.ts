import { Injectable } from '@angular/core';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';
import { SobreViewModel } from '../../viewModels/sobre.viewModel';
import { EventoViewModel } from './home.component';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  carouselViewModel!: CarouselViewModel[];
  carouselPrincipaisObraViewModel!: CarouselViewModel[];
  sobreViewModel!: SobreViewModel;
  eventosViewModel!: EventoViewModel[];

  constructor(private apiClient: HttpClient) { }


  getHomeData(url: string): Observable<any> {
    return this.apiClient.get(url);    
  }

  getEventos(): EventoViewModel[] {
    return this.eventosViewModel = [
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
    ]
  }

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

  getCarouselPrincipaisObrasItems(): CarouselViewModel[] {
    this.carouselPrincipaisObraViewModel = [
      {
        imageUrl: 'https://i.ibb.co/rvMSkrb/Santa-Teresa.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/C0dbXbP/Riacho-do-Amor.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/Fq48RM0/Praia-da-Urca.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/bR4c21v/O-Salvamento.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/gySyK4j/O-Resgate.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/PrDW11k/L-grimas-da-M-e-Natureza.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/ScYPdxv/A-Socorrista.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/f20fz3Y/Saquarema.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/7gSfc5X/O-acad-mico.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/44ZVStZ/Jardim-Tijucano.jpg',
      },
      {
        imageUrl: 'https://i.ibb.co/DQP77s0/Borboletas-de-Macondo.jpg'
      },
      {
        imageUrl: 'https://image.ibb.co/bKxpum/janela_submersa.jpg'
      },
      {
        imageUrl: 'https://image.ibb.co/bPxRem/Natureza_de_Macondo_2.jpg'
      },
      {
        imageUrl: 'https://image.ibb.co/jrizzm/image.jpg'
      },
      {
        imageUrl: 'https://image.ibb.co/cvDjS6/Abraco_da_paz.jpg'
      },
    ];

    return this.carouselPrincipaisObraViewModel;
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
