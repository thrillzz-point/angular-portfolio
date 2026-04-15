import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
