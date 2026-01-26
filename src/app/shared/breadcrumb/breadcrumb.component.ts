import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { CommonService } from '../services/common.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [MatRippleModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() title!: string;

  constructor(public commonService: CommonService) {

  }

}
