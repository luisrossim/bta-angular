import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Role, Usuario } from '../../../../models/usuario';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CreateEtapaUsuario, Etapa } from '../../../../models/etapa';

@Component({
  selector: 'app-etapa-card',
  imports: [CommonModule, TagModule, CheckboxModule, FormsModule],
  templateUrl: './etapa-card.component.html',
  styleUrl: './etapa-card.component.css'
})
export class EtapaCardComponent  {
  @Input() etapa!: Etapa;
  @Input() usuarios: Usuario[] = []
  @Input() relacionados: Usuario[] = []
  @Output() onSubmit = new EventEmitter<CreateEtapaUsuario>();

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

  salvar() {
    const relacionadosIds = Object.entries(this.relacionadoMap)
      .filter(([_, relacionado]) => relacionado)
      .map(([id]) => Number(id));

    this.onSubmit.emit({
      etapaId: this.etapa.id,
      usuarioIds: relacionadosIds
    });
  }

  getSeverity(role: Role): "danger" | "info" | "contrast" | "secondary" {
    switch (role?.sigla) {
      case 'ADM': return 'danger';
      case 'TEC': return 'info';
      case 'ASSIST': return 'secondary';
      default: return 'contrast';
    }
  }
}
