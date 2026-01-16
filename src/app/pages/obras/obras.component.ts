import { Component } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'obras',
  standalone: true,
  imports: [MatRippleModule, MatIconModule, CommonModule],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.scss'
})
export class ObrasComponent {
   obras: string[] = [
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',

    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',

    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/seed/picsum/200/300',
   ]
}
