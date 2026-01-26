import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  
  @Output() onPrevious: EventEmitter<any> = new EventEmitter<any>();
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();

  constructor(public lightboxService: LightboxService) {

  }

  ngOnInit() {
    this.lightboxService.imagens = this.imagens;
  }

  onClickPrevious(event: MouseEvent, idx: any) {
    event.stopPropagation();
    this.onPrevious.emit(idx)
  }

  onClickNext(event: MouseEvent, idx: any) {
    event.stopPropagation();
    this.onNext.emit(idx);
  }  
}
