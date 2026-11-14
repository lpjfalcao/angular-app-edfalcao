import { Component } from '@angular/core';
import { MessageBoxComponent } from '../../shared/message-box/message-box.component';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'premiacoes',
  standalone: true,
  imports: [MessageBoxComponent],
  templateUrl: './premiacoes.component.html',
  styleUrl: './premiacoes.component.scss'
})
export class PremiacoesComponent {
  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
      this.commonService.setHeaderStyles();
  }
}
