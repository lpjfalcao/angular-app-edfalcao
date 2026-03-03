import { Injectable } from '@angular/core';
import { LightboxImageViewModel } from '../../viewModels/lightbox-image.viewModel';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  public imagens: LightboxImageViewModel[] = [];
  public imagemSelecionadaService!: LightboxImageViewModel;

  constructor() {
  }

  open() {
    const lightbox = document.getElementById('lightbox');
    lightbox?.classList.remove('u-hide');
  }

  close() {
    const lightbox = document.getElementById('lightbox');
    lightbox?.classList.add('u-hide');
  }

  public previous(id: any) {
    id -= 2;
    console.log(`previous ${id}`);

    if (id < 0)
      return;

    return this.imagens[id];
  }

  public next(id: any) {
    // id++;
    
    console.log(`next ${id}`);

    if (id > this.imagens.length - 1)
      return;

    return this.imagens[id];
  }
}
