import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [MatRippleModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() title!: string;

  constructor(public commonService: CommonService) {

  }

}
