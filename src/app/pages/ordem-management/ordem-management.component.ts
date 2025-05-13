import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-ordem-management',
  imports: [HeaderComponent, Button],
  templateUrl: './ordem-management.component.html',
  styleUrl: './ordem-management.component.css'
})
export class OrdemManagementComponent {

}
