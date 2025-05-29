import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdemService } from '../../../core/services/ordem.service';
import { ToastService } from '../../../shared/services/toast.service';
import { OrdemServico } from '../../../models/ordem-servico';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../layout/header/header.component";
import { HistoricoOS } from '../../../models/historico-os';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-ordem-info',
  imports: [CommonModule, HeaderComponent, FormsModule, ReactiveFormsModule, SelectModule, Button],
  templateUrl: './ordem-info.component.html',
  styleUrl: './ordem-info.component.css'
})
export class OrdemInfoComponent implements OnInit {
  private activatedRouter = inject(ActivatedRoute);
  private router = inject(Router);
  private ordemService = inject(OrdemService);
  private toastService = inject(ToastService);
  private formBuilder = inject(FormBuilder);
  ordem?: OrdemServico
  latestHistorico?: HistoricoOS
  atribuicaoForm: FormGroup

  constructor(){
    this.atribuicaoForm = this.formBuilder.group({
      usuarioId: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.fetchOrdemInfo(this.activatedRouter.snapshot.paramMap.get('id')!);
  }

  private fetchOrdemInfo(ordemId: string){
    this.ordemService.getById(ordemId).subscribe({
      next: (result) => {
        this.ordem = result;
        this.latestHistorico = result.historicoOs[0] || null
      },
      error: (err: any) => {
        this.toastService.error(err.error.message)
      }
    })
  }

  protected atribuirUsuario(){
    if(this.atribuicaoForm.invalid){
      this.toastService.error('Formulário inválido, tente novamente.');
      return;
    }

    this.atribuicaoForm.addControl('historicoId', new FormControl(this.latestHistorico!.id))

    this.ordemService.atribuirUsuario(this.atribuicaoForm.value).subscribe({
      next: () => {
        this.toastService.success("Atribuição realizada com sucesso");
        this.reloadComponent();
      },
      error: (err) => {
        this.toastService.error(err.error.message)
      }
    })
  }

  protected concluirEtapa(){
    this.ordemService.concluirEtapa(this.latestHistorico!.id).subscribe({
      next: () => {
        this.toastService.success("Etapa concluída com sucesso");
        this.reloadComponent();
      },
      error: (err) => {
        this.toastService.error(err.error.message)
      }
    })
  }

  protected avancarEtapa(){
    this.ordemService.avancarEtapa(this.latestHistorico!.id).subscribe({
      next: () => {
        this.toastService.success("Ordem de serviço atualizada para a próxima etapa");
        this.reloadComponent();
      },
      error: (err) => {
        this.toastService.error(err.error.message)
      }
    })
  }

  reloadComponent() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
