import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { Role, Usuario } from '../../../../models/usuario';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CreateEtapaUsuario, Etapa } from '../../../../models/etapa';
import { Button } from 'primeng/button';
import { finalize, Observable } from 'rxjs';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-etapa-card',
  imports: [CommonModule, TagModule, CheckboxModule, FormsModule, Button],
  templateUrl: './etapa-card.component.html',
  styleUrl: './etapa-card.component.css'
})
export class EtapaCardComponent  {
  @Input() etapa!: Etapa;
  @Input() usuarios: Usuario[] = []
  @Input() relacionados: Usuario[] = []
  @Input() onSubmit!: (dados: CreateEtapaUsuario) => Observable<any>

  private toastService = inject(ToastService);
  disableActions: boolean = false
  relacionadoMap: { [usuarioId: number]: boolean } = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['relacionados'] && this.relacionados) {
      this.initRelacionados();
    }
  }

  initRelacionados() {
    for (const usuario of this.usuarios) {
      this.relacionadoMap[usuario.id] = this.relacionados.some(u => u.id === usuario.id);
    }
  }

  toggleRelacionamento(usuarioId: number, relacionado: boolean) {
    this.relacionadoMap[usuarioId] = relacionado;
  }

  getSeverity(role: Role): "danger" | "info" | "contrast" | "secondary" {
    switch (role?.sigla) {
      case 'ADM': return 'danger';
      case 'TEC': return 'info';
      case 'ASSIST': return 'secondary';
      default: return 'contrast';
    }
  }

  salvar() {
    this.disableActions = true;

    const relacionadosIds = Object.entries(this.relacionadoMap)
      .filter(([_, relacionado]) => relacionado)
      .map(([id]) => Number(id));

    const relacionados: CreateEtapaUsuario = {
      etapaId: this.etapa.id,
      usuarioIds: relacionadosIds
    }

    this.onSubmit(relacionados)
      .pipe(
        finalize(() => {
          setTimeout(() => { this.disableActions = false }, 1500)
        })
      ).subscribe({
        next: () => this.toastService.success("Atribuição realizada com sucesso"),
        error: (err) => this.toastService.error(`Erro ao salvar atribuição: ${err}`)
      })
  }
}
