import { Routes } from "@angular/router";
import { OrdemManagementComponent } from "../pages/ordem-management/ordem-management.component";
import { OrdemFormComponent } from "../pages/ordem-management/ordem-form/ordem-form.component";
import { OrdemInfoComponent } from "../pages/ordem-management/ordem-info/ordem-info.component";

export const ordemServicoRoutes: Routes = [
  { path: '', component: OrdemManagementComponent },
  { path: 'form', component: OrdemFormComponent },
  { path: 'info/:id', component: OrdemInfoComponent }
];
