import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { MaterialManagementComponent } from './pages/material-management/material-management.component';
import { EtapasVincularComponent } from './pages/etapas-vincular/etapas-vincular.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
      path: 'clientes',
      loadChildren: () => import('./routes/cliente.routes').then(m => m.clienteRoutes)
    },
    {
      path: 'ordens',
      loadChildren: () => import('./routes/ordem-servico.routes').then(m => m.ordemServicoRoutes)
    },
    {
      path: 'usuarios',
      loadChildren: () => import('./routes/usuario.routes').then(m => m.usuarioRoutes)
    },
    { 
      path: 'etapas',
      component: EtapasVincularComponent
    },
    { 
      path: 'materiais',
      component: MaterialManagementComponent
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];
