import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { Button } from 'primeng/button';
import { PickListModule } from 'primeng/picklist';
import { etapaUsuario } from '../../utils/mocks/etapa-usuario.mock';

@Component({
  selector: 'app-etapas-vincular',
  imports: [HeaderComponent, Button, PickListModule],
  templateUrl: './etapas-vincular.component.html',
  styleUrl: './etapas-vincular.component.css'
})
export class EtapasVincularComponent implements OnInit {
  sourceProducts: any[] = etapaUsuario
  targetProducts!: any[];

  constructor() {}

  ngOnInit() {
    this.targetProducts = [];
  }
}
