import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../core/services/user.service';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { roles } from '../../../utils/mocks/roles.mock';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-user-form',
  imports: [HeaderComponent, Button, FloatLabel, InputTextModule, InputMaskModule, ReactiveFormsModule, SelectModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  private formBuilder = inject(FormBuilder);
  private usuarioService = inject(UsuarioService);
  private toastService = inject(ToastService);
  private route = inject(Router);
  userForm: FormGroup;
  roles = roles

  constructor(){
    this.userForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefone: ['', [Validators.required]],
      role: this.formBuilder.group({
        connect: ['', [Validators.required]]
      })
    })
  }

  onSubmit(){
    console.log(this.userForm.value);
    if (this.userForm.invalid){
      this.toastService.error('Formulário inválido')
      return;
    }

    this.usuarioService.create(this.userForm.value).subscribe({
      next: (result) => {
        this.toastService.success('Usuário cadastrado com sucesso!');
        this.route.navigateByUrl('usuarios');
      },
      error: (err) => {
        this.toastService.error('Erro ao salvar usuário!');
      }
    })
  }
}
