import { Component } from '@angular/core';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Ordenador } from '../ordenador';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tablaproductos',
  imports: [RouterModule, CommonModule],
  templateUrl: './tablaproductos.component.html',
  styleUrl: './tablaproductos.component.scss'
})
export class TablaproductosComponent {
  ordenador : Ordenador= {} as Ordenador;
  tablaproductos: Ordenador[]=[];

  constructor(private ordenadorRestService: OrdenadorRestService) {
    this.loadOrdenadores(); 
  }
  loadOrdenadores() { 
    this.ordenadorRestService.buscartodos().subscribe((datos) => {
      this.tablaproductos = datos;
    })
  }

  public borrar(nserie: number) {
    this.ordenadorRestService.borrar(nserie).subscribe(() => {
      this.loadOrdenadores(); 
    });
  }
  public borrartodos() { 
    this.ordenadorRestService.borrartodos().subscribe((datos) => {
      this.loadOrdenadores(); 
    });
  }
}