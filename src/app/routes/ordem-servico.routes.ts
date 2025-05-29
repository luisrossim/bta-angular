import { Routes } from "@angular/router";
import { OrdemFormComponent } from "../pages/ordem-management/ordem-form/ordem-form.component";
import { OrdemInfoComponent } from "../pages/ordem-management/ordem-info/ordem-info.component";
import { OrdemListComponent } from "../pages/ordem-management/ordem-list/ordem-list.component";

export const ordemServicoRoutes: Routes = [
  { path: '', component: OrdemListComponent },
  { path: 'form', component: OrdemFormComponent },
  { path: 'info/:id', component: OrdemInfoComponent }
];
