import { Component, inject, Inject } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { BiografiaService } from './biografia.service';
import { BiografiaContainer, BiografiaResponse } from '../../interfaces/responses/biografia.response';
import { environment } from '../../../environments/environment';
import { SobreViewModel } from '../../viewModels/sobre.viewModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'biografia',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './biografia.component.html',
  styleUrl: './biografia.component.scss'
})
export class BiografiaComponent {
  readonly biografiaService = inject(BiografiaService)

  sobre: SobreViewModel = new SobreViewModel();

  ngOnInit() {
    this.biografiaService.getBiografias(`${environment.api.baseUrl}/biografia`).subscribe((bioResponse: BiografiaResponse) => {
      const biografiaContainer: BiografiaContainer = bioResponse.biografia[0];
      console.log(biografiaContainer);
      this.sobre.bio = biografiaContainer.Bio.Description;
      this.sobre.imageUrl = biografiaContainer.Bio.Foto;
    });
  }
}
