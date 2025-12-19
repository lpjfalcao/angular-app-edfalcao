import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarouselViewModel } from '../../viewModels/carousel.viewModel';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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

  setCarouselText(event: any) {
    this.carouselText = event;
  }
}
