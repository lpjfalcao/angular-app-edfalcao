import { Injectable } from '@angular/core';
import { LightboxImageViewModel } from '../../viewModels/lightbox-image.viewModel';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  imagens: LightboxImageViewModel[] = [];

  constructor() { }

  open() {
    const lightbox = document.getElementById('lightbox');
    lightbox?.classList.remove('u-hide');
  }

  close() {
    const lightbox = document.getElementById('lightbox');
    lightbox?.classList.add('u-hide');
  }

  previous() {

  }

  next() {

  }
}
