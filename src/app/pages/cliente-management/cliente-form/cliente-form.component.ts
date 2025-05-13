import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../layout/header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { ToastService } from '../../../shared/services/toast.service';
import { ClienteService } from '../../../core/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  imports: [HeaderComponent, ReactiveFormsModule, InputMaskModule, InputTextModule, FloatLabel, Button, TextareaModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  private formBuilder = inject(FormBuilder);
  private toastService = inject(ToastService);
  private clienteService = inject(ClienteService);
  private router = inject(Router);
  clienteForm: FormGroup;


  constructor(){
    this.clienteForm = this.buildClienteForm();
  }


  private buildClienteForm(): FormGroup {
    return this.formBuilder.group({
      nome: ['', [Validators.minLength(2), Validators.required]],
      telefone: ['', [Validators.required]],
      cpf: ['', [Validators.minLength(11), Validators.maxLength(11), Validators.required]],
      enderecos: this.formBuilder.group({
        create: this.formBuilder.group({
          cidade: ['Nova Venécia', [Validators.required]],
          estado: ['ES', [Validators.required]],
          hectare: [null],
          coordenadasGeograficas: [null],
          kmLojaCliente: [null],
          referencia: [null]
        })
      })
    });
  }


  onSubmit(){
    if(this.clienteForm.invalid){
      this.toastService.error('Formulário inválido.')
      return;
    }

    this.clienteService.create(this.clienteForm.value).subscribe({
      next: (result) => {
        this.toastService.success('Cliente salvo com sucesso');
        this.router.navigateByUrl('clientes');
      },
      error: (err) => {
        this.toastService.error('Erro ao salvar cliente.');
      }
    })
  }
}
