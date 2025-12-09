import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './shared/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     HeaderComponent,
     MatSlideToggleModule,
     MatIconModule,
     MatDividerModule, 
     MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app-edfalcao';
}
