import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LightboxImageViewModel } from '../../viewModels/lightbox-image.viewModel';
import { LightboxComponent } from '../../components/lightbox/lightbox.component';
import { LightboxService } from '../../components/lightbox/lightbox.service';
import { ObrasService } from './obras.service';
import { environment } from '../../../environments/environment';
import { ObrasResponse } from '../../interfaces/responses/obras.response';

@Component({
  selector: 'obras',
  standalone: true,
  imports: [MatRippleModule, MatIconModule, CommonModule, LightboxComponent],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.scss'
})
export class ObrasComponent {
  imagemSelecionada!: LightboxImageViewModel;
  lightboxImagemViewModel: LightboxImageViewModel[] = [];
  
  constructor(private lightboxService: LightboxService, private obrasService: ObrasService) {

  }

  ngOnInit() {
    this.carregarObras();
  } 

  onClickImagem(target: LightboxImageViewModel) {
    this.imagemSelecionada = target;
    this.lightboxService.open();
  }

  carregarObras() {
    this.obrasService.getObras(`${environment.api.baseUrl}/obras`).subscribe((obraResponse: any) => {
      for (const item of obraResponse.obras) {
        this.lightboxImagemViewModel.push({
          id: item.Id,
          imageUrl: item.Obra.ImageUrl
        });
      }
    });
  }
}
