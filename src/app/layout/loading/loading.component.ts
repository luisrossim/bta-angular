import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  template: `
    <div class="loading-overlay">
      <div class="loading-content">
        <img src="assets/images/loading-icon.svg" class="w-[50px] h-[50px]" alt="loading">
      </div>
    </div>
  `,
  styleUrl: './loading.component.css'
})
export class LoadingComponent {}
