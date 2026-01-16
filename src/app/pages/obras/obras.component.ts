import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LightboxImageViewModel } from '../../viewModels/lightbox-image.viewModel';
import { LightboxComponent } from '../../components/lightbox/lightbox.component';
import { LightboxService } from '../../components/lightbox/lightbox.service';

@Component({
  selector: 'obras',
  standalone: true,
  imports: [MatRippleModule, MatIconModule, CommonModule, LightboxComponent],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.scss'
})
export class ObrasComponent {
  constructor(private lightboxService: LightboxService) {

  }

  lightboxImagemViewModel: LightboxImageViewModel[] = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
    {
      id: 6,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
    {
      id: 7,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
    {
      id: 8,
      imageUrl: 'https://picsum.photos/seed/picsum/620/480',
    },
  ];

  obras: string[] = [
    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',

    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',

    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',
    'https://picsum.photos/seed/picsum/620/480',
  ];

  onClickImagem(target: any) {
    console.log(target);
    this.lightboxService.open();
  }
}
