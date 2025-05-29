import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { EtapaService } from '../../core/services/etapa.service';
import { ToastService } from '../../shared/services/toast.service';
import { CreateEtapaUsuario, Etapa, EtapaUsuario } from '../../models/etapa';
import { CommonModule } from '@angular/common';
import { EtapaCardComponent } from "./components/etapa-card/etapa-card.component";
import { UsuarioService } from '../../core/services/user.service';
import { Usuario } from '../../models/usuario';
import { catchError, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-etapas-vincular',
  imports: [CommonModule, HeaderComponent, EtapaCardComponent],
  templateUrl: './etapas-vincular.component.html',
  styleUrl: './etapas-vincular.component.css'
})
export class EtapasVincularComponent implements OnInit {
  private etapaService = inject(EtapaService);
  private usuarioService = inject(UsuarioService);
  private toastService = inject(ToastService);
  etapas: Etapa[] = []
  usuarios: Usuario[] = []
  relacionamentosPorEtapa: { [etapaId: number]: Usuario[] } = {};

  constructor() {}

  ngOnInit() {
    this.fetchEtapas();
    this.fetchUsuarios();
    this.fetchEtapaUsuario();
  }

  private fetchEtapas(){
    this.etapaService.getAll().subscribe({
      next: (result) => {
        this.etapas = result;
      },
      error: (err) => {
        this.toastService.error('Erro ao buscar etapas');
      }
    })
  }

  private fetchUsuarios(){
    this.usuarioService.getAll().subscribe({
      next: (result) => {
        this.usuarios = result;
      },
      error: (err) => {
        this.toastService.error('Erro ao buscar usuários');
      }
    })
  }

  private fetchEtapaUsuario(){
    this.etapaService.getRelacionamentos().subscribe({
      next: (result) => {
        this.processarRelacionamentos(result);
      },
      error: (err) => {
        this.toastService.error('Erro ao buscar relacionamentos');
      }
    })
  }

  processarRelacionamentos(result: EtapaUsuario[]) {
    this.relacionamentosPorEtapa = {};
    for (const r of result) {
      this.relacionamentosPorEtapa[r.etapa.id] = r.usuarios;
    }
  }

  getRelacionamentosPorEtapa(etapaId: number): Usuario[] {
    return this.relacionamentosPorEtapa[etapaId] || [];
  }

  protected handleSubmit = (dados: CreateEtapaUsuario): Observable<any> => {
    return this.etapaService.createRelacionamento(dados).pipe(
      tap(() => console.log("tap test")),
      catchError((err) => {
        throw err;
      })
    )
  }
}
