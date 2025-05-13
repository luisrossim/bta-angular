import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';
import { UsuarioService } from '../../../core/services/user.service';
import { SeverityType, Usuario } from '../../../models/usuario';
import { PhoneFormatPipe } from "../../../shared/pipes/phone-format.pipe";
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-user-list',
  imports: [HeaderComponent, Button, TableModule, PhoneFormatPipe, TagModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  private usuarioService = inject(UsuarioService);
  private toastService = inject(ToastService);
  private router = inject(Router)
  usuarios: Usuario[] = []

  roleSeverityMap: { [key: number]: SeverityType } = {
    1: 'danger',
    2: 'info',
    3: 'success'
  };

  ngOnInit(): void {
    this.fetchUsuarios();
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

  editar(){}

  desativar(){}

  getSeverity(roleId: number): SeverityType {
    return this.roleSeverityMap[roleId] || 'secondary';
  }

  redirectToUserForm(){
    this.router.navigateByUrl('usuarios/form')
  }
}
