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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'obras',
  standalone: true,
  imports: [MatRippleModule, MatIconModule, CommonModule, LightboxComponent, MatProgressSpinnerModule, BreadcrumbComponent],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.scss'
})
export class ObrasComponent {
  imagemSelecionada!: LightboxImageViewModel;
  lightboxImagemViewModel: LightboxImageViewModel[] = [];
  isLoading: boolean = true;
  
  constructor(private lightboxService: LightboxService, private obrasService: ObrasService, private router: Router) {

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
      setTimeout(() => {
        this.isLoading = false;
      }, environment.isLoadingTimeout);
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
