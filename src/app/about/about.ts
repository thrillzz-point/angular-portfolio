import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
