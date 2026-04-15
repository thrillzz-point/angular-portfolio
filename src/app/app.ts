import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <mat-icon class="logo-icon">code</mat-icon>
      <span>Golden's Portfolio</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
        <mat-icon>home</mat-icon>
        Home
      </a>
      <a mat-button routerLink="/about" routerLinkActive="active-link">
        <mat-icon>person</mat-icon>
        About
      </a>
      <a mat-button routerLink="/contact" routerLinkActive="active-link">
        <mat-icon>mail</mat-icon>
        Contact
      </a>
    </mat-toolbar>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .logo-icon {
      margin-right: 10px;
    }
    .content {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .active-link {
      background: rgba(255, 255, 255, 0.2);
    }
    mat-icon {
      margin-right: 4px;
      vertical-align: middle;
    }
  `]
})
export class App {}