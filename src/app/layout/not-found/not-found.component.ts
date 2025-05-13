import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  template: `
    <div class="flex justify-center items-center w-screen h-screen text-center bg-neutral-900">
      <div class="flex flex-col gap-2">
        <i class="pi pi-ban text-gray-400 text-[24px] mb-8"></i>
        <h1 class="text-3xl font-bold text-gray-300">404 - Página não encontrada</h1>
        <p class="text-gray-400 mb-5">A rota que você tentou acessar não existe.</p>
        <button type="button" class="hover:bg-white/20 bg-white/5 text-center rounded-lg justify-center m-8 duration-200 ease-out text-gray-300 hover:text-gray-200 py-2 flex items-center gap-4" (click)="redirectToBase()">
          <i class="pi pi-arrow-left"></i>
          <span>Voltar para página inicial</span>
        </button>
      </div>
    </div>
  `
})
export class NotFoundComponent {
  router = inject(Router);

  redirectToBase(){
    this.router.navigateByUrl('/login');
  }
}
