import { Routes } from "@angular/router";
import { ClienteListComponent } from "../pages/cliente-management/cliente-list/cliente-list.component";
import { ClienteFormComponent } from "../pages/cliente-management/cliente-form/cliente-form.component";
import { ClienteInfoComponent } from "../pages/cliente-management/cliente-info/cliente-info.component";

export const clienteRoutes: Routes = [
  { path: '', component: ClienteListComponent },
  { path: 'form', component: ClienteFormComponent },
  { path: 'info/:id', component: ClienteInfoComponent }
];
