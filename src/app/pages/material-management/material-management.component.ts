import { Component } from '@angular/core';
import { materiaisCategory } from '../../utils/mocks/materiais.mock';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-material-management',
  imports: [HeaderComponent],
  templateUrl: './material-management.component.html',
  styleUrl: './material-management.component.css'
})
export class MaterialManagementComponent {
  categories = materiaisCategory
}
