import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../layout/header/header.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ClienteService } from '../../../core/services/cliente.service';
import { EtapaService } from '../../../core/services/etapa.service';
import { ToastService } from '../../../shared/services/toast.service';
import { Cliente } from '../../../models/cliente';
import { Etapa } from '../../../models/etapa';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmService } from '../../../shared/services/confirm.service';
import { OrdemService } from '../../../core/services/ordem.service';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-ordem-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HeaderComponent, FloatLabel, InputMaskModule, InputTextModule, SelectModule, ButtonModule, CheckboxModule],
  templateUrl: './ordem-form.component.html',
  styleUrl: './ordem-form.component.css'
})
export class OrdemFormComponent {
  private formBuilder = inject(FormBuilder);
  private clienteService = inject(ClienteService);
  private etapaService = inject(EtapaService);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);
  private ordemService = inject(OrdemService);
  form: FormGroup;
  clientes: Cliente[] = []
  etapas: Etapa[] = []

  constructor(){
    this.form = this.buildOSForm();
    this.fetchClientes();
    this.fetchEtapas();
  }

  private buildOSForm(): FormGroup{
    return this.formBuilder.group({
      cliente: [null, [Validators.required]],
      etapa: [null, [Validators.required]],
      hasAutomacao: [false],
      quantidadeSetores: [null],
      hasOrcamentoBanco: [false],
      hasProjetoPlantio: [false]
    })
  }

  private fetchClientes(){
    this.clienteService.getAll().subscribe({
      next: (result) => {
        this.clientes = result;
      },
      error: (err) => {
        this.toastService.error('Erro ao buscar clientes');
      }
    })
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

  confirmAction(event: Event){
    this.confirmService.confirmation({
      event: event,
      message: 'Tem certeza que deseja cadastrar a ordem de serviço?',
      onAccept: () => this.onSubmit()
    })
  }

  onSubmit(){
    if(!this.form.valid){
      this.toastService.error('Formulário inválido, tente novamente.')
      return;
    }

    this.ordemService.create(this.form.value).subscribe({
      next: () => {
        this.toastService.success('Ordem de serviço cadastrada com sucesso')
      },
      error: () => {
        this.toastService.error('Erro ao cadastrar ordem de serviço')
      }
    })
  }
}
