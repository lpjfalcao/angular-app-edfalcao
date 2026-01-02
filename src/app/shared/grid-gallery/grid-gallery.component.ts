import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Tile } from '../../interfaces/tile.interface';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';


@Component({
  selector: 'grid-gallery',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatRippleModule],
  templateUrl: './grid-gallery.component.html',
  styleUrl: './grid-gallery.component.scss'
})
export class GridGalleryComponent {
  @Input() tiles!: Tile[];

  @Output() onSelectImage: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatRipple) ripple!: MatRipple;

  colorRipple = 'rgba(0,0,0,0.1)'
  white: string = 'white';

  ngDoCheck() {
    this.carregarImagens();
  }

  carregarImagens() {
    const imagens = this.tiles;;
    if (imagens && imagens.length > 0) {
      const images = document.querySelectorAll('.image-grid');
      if (images.length > 0) {
        Array
          .from(images)
          .forEach((image: any, index) => {
            image.onload = () => {
              this.tiles[index].isLoading = false;
            }
          });
      }
    }
  }

  quandoUsuarioSelecionarImagemNaGrid(imagem: any) {
    this.onSelectImage.emit({selectedImage: imagem})
  }
}
