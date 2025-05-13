import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="body" [ngClass]="bodyClass">
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styleUrl: './body.component.css'
})
export class BodyComponent {
  private _collapsed: boolean = false;
  protected _screenWidth: number = window.innerWidth;
  bodyClass: string = '';

  constructor() {}

  @Input() set collapsed(value: boolean) {
    this._collapsed = value;
    this.updateBodyClass();
  }

  @Input() set screenWidth(value: number) {
    this._screenWidth = value;
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    const classes = [];
  
    if (this._collapsed && this._screenWidth > 1280) {
      classes.push('body-trimmed');
    }
  
    if (this._collapsed && this._screenWidth <= 1280) {
      classes.push('body-overlay');
    }
  
    this.bodyClass = classes.join(' ');
  }
}
