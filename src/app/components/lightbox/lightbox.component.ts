import { Component, Input } from '@angular/core';
import { LightboxImageViewModel } from '../../viewModels/lightbox-image.viewModel';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LightboxService } from './lightbox.service';

@Component({
  selector: 'lightbox',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  @Input() imagens: LightboxImageViewModel[] = [];

  @Input() imagemSelecionada!: LightboxImageViewModel;

  constructor(public lightboxService: LightboxService) {

  }

  ngOnInit() {
    console.log(this.imagens);
  }
}
