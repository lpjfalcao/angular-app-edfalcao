import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import { GridViewModel } from '../../viewModels/grid.viewModel';
import { NgxMasonryComponent, NgxMasonryModule } from 'ngx-masonry';


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

   reloadLayout() {
    this.masonry?.layout();
  }
}
