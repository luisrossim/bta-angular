import { Routes } from "@angular/router";
import { UserFormComponent } from "../pages/user-management/user-form/user-form.component";
import { UserInfoComponent } from "../pages/user-management/user-info/user-info.component";
import { UserListComponent } from "../pages/user-management/user-list/user-list.component";

export const usuarioRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'info/:id', component: UserInfoComponent }
];
