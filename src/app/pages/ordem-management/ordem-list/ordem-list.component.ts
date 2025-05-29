import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { OrdemServico } from '../../../models/ordem-servico';
import { OrdemService } from '../../../core/services/ordem.service';
import { ToastService } from '../../../shared/services/toast.service';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-ordem-list',
  imports: [CommonModule, HeaderComponent, Button, AvatarGroupModule, AvatarModule, PopoverModule],
  templateUrl: './ordem-list.component.html',
  styleUrl: './ordem-list.component.css'
})
export class OrdemListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly ordemService = inject(OrdemService);
  private toastService = inject(ToastService);
  ordens: OrdemServico[] = []

  ngOnInit(): void {
    this.fetchOrdensAtivas();
  }

  private fetchOrdensAtivas(){
    this.ordemService.getAllWithCurrentStage().subscribe({
      next: (results) => {
        this.ordens = results;
      },
      error: (err) => {
        this.toastService.error('Erro ao buscar ordens de serviço ativas')
      }
    })
  }

  protected enviarImage(event: Event){
    event.preventDefault();
    console.log(event);
  }

  redirectToForm(){
    this.router.navigateByUrl('ordens/form');
  }

  redirectToInfo(id: string){
    this.router.navigate(['ordens', 'info', id])
  }
}
