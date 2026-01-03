import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { GridViewModel } from '../../viewModels/grid.viewModel';
import { NgxMasonryComponent, NgxMasonryModule, NgxMasonryOptions } from 'ngx-masonry';
import { animate, style } from '@angular/animations';


@Component({
  selector: 'grid-gallery',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatRippleModule, NgxMasonryModule, CommonModule],
  templateUrl: './grid-gallery.component.html',
  styleUrl: './grid-gallery.component.scss'
})
export class GridGalleryComponent {
  @ViewChild('masonry') masonry?: NgxMasonryComponent;

  @Input() gridViewModel!: GridViewModel[];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20, // Espaço horizontal entre as colunas em pixels
    columnWidth: '.masonry-item', // Usa a largura da classe para o cálculo
    percentPosition: true,
    animations: {
      show: [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ]
    }
  };

  reloadLayout() {
    this.masonry?.layout();
  }
}
