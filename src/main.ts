import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    // BrowserAnimationsModule,
    MatIconModule,
  ],
  template: `
  <p>
  <mat-toolbar>
   <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
   <mat-icon>share</mat-icon>
 </button>
</mat-toolbar>
</p>
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
