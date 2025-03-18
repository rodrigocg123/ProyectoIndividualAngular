import { Component } from '@angular/core';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Ordenador } from '../ordenador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formularioproductos',
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './formularioproductos.component.html',
  styleUrl: './formularioproductos.component.scss'
})
export class FormularioproductosComponent {
  ordenador: Ordenador = {} as Ordenador; 

  constructor(private ordenadorRestService: OrdenadorRestService) { }

  public insertar() {
    this.ordenadorRestService.insertar(this.ordenador).subscribe((datos:Ordenador)=>{

      console.log(datos);
      
  });
}
}
