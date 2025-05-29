import { Component, EventEmitter, HostListener, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavData } from './sidenav-data';
import { Router, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { SidenavToggle } from './sidenav-model';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../shared/services/toast.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmService } from '../../shared/services/confirm.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  imports: [CommonModule, RouterModule, TooltipModule, ButtonModule, ConfirmDialogModule]
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  private readonly authService = inject(AuthService);
  private readonly toastService = inject(ToastService);
  private readonly confirmService = inject(ConfirmService);
  private router = inject(Router);

  collapsed = false;
  screenWidth = 0;
  sidenavData = SidenavData;

  constructor(){}

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 1280){
      this.collapsed = false;
      this.onToggleSidenav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
    }
  }
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  }

  confirmLogout(event: Event) {
    this.confirmService.confirmation({
      event: event,
      message: 'Deseja realmente sair da aplicação?',
      acceptButtonLabel: 'Sair',
      acceptButtonSeverity: 'danger',
      onAccept: () => this.logout()
    })
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.toastService.success("Realizou logout com sucesso.");
        this.router.navigateByUrl('login');
      },
      error: (err) => {
        this.toastService.error("Erro ao realizar logout.");
      }
    })
  }
}
