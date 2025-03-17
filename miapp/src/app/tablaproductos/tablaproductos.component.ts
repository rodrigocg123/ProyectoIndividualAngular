import { Component } from '@angular/core';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Ordenador } from '../ordenador';
@Component({
  selector: 'app-tablaproductos',
  imports: [],
  templateUrl: './tablaproductos.component.html',
  styleUrl: './tablaproductos.component.scss'
})
export class TablaproductosComponent {
  ordenador : Ordenador= {} as Ordenador;
  tablaproductos: Ordenador[]=[];

  constructor(private ordenadorRestService: OrdenadorRestService) {

    ordenadorRestService.buscartodos().subscribe((datos) => {
      this.tablaproductos = datos;
    })
  }

  public borrar(nserie: number) {
    this.ordenadorRestService.borrar(nserie).subscribe(() => {
      this.ordenadorRestService.buscartodos().subscribe((datos) => {

        this.tablaproductos = datos;
      })
    });
  }
}
