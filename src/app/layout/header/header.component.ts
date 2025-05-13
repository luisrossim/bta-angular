import { Component, inject, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerService } from '../../shared/services/drawer.service';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  template: `
    <header class="sticky top-0 z-10 w-full bg-white border-b border-slate-200 mb-6">
      <div class="flex justify-between items-center py-4 px-4 md:px-8 md:py-6">
        <div class="flex items-center gap-4">
          <button type="button" class="block md:hidden mt-[0.3rem] p-1" (click)="openDrawer()">
            <i class="pi pi-bars text-xl"></i>
          </button>
          <h1 class="font-bold text-xl md:text-2xl lg:text-3xl text-slate-800">
            {{ title }}
          </h1>
        </div>

        <img src="assets/images/bta.svg" class="w-[35px] md:w-[60px] mt-2" alt="bta-logo" draggable="false">
      </div>
    </header>
  `
})
export class HeaderComponent {
  private drawerService = inject(DrawerService);
  @Input() title: string = ""

  openDrawer() {
    this.drawerService.openDrawer();
  }

}
