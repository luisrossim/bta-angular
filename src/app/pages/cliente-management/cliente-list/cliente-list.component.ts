import { Component, inject, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from '../../../layout/header/header.component';
import { Button } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { ClienteService } from '../../../core/services/cliente.service';
import { Cliente } from '../../../models/cliente';
import { ToastService } from '../../../shared/services/toast.service';
import { PhoneFormatPipe } from "../../../shared/pipes/phone-format.pipe";
import { CpfFormatPipe } from "../../../shared/pipes/cpf-format.pipe";

@Component({
  selector: 'app-cliente-list',
  imports: [TableModule, HeaderComponent, Button, InputIconModule, IconFieldModule, InputText, TagModule, PhoneFormatPipe, CpfFormatPipe],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit {
  private clienteService = inject(ClienteService);
  private toastService = inject(ToastService);
  private router = inject(Router)
  clientes: Cliente[] = [] 

  ngOnInit(): void {
    this.fetchClientes();
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

  editar(){}

  desativar(){}

  redirectToForm(){
    this.router.navigateByUrl('clientes/form');
  }
}
