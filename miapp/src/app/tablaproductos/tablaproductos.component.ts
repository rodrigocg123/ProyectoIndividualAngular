import { Component } from '@angular/core';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Ordenador } from '../ordenador';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tablaproductos',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './tablaproductos.component.html',
  styleUrl: './tablaproductos.component.scss'
})
export class TablaproductosComponent {
  ordenador: Ordenador = {} as Ordenador;
  tablaproductos: Ordenador[] = [];
  ordenadores: any[] = []; // Lista de ordenadores
  seleccionados: number[] = []; // Lista de números de serie seleccionados


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
    this.ordenadorRestService.borrartodos().subscribe(() => {
      this.loadOrdenadores();
    });
  }
  public seleccionar(ordenador: Ordenador) {
    this.ordenadorRestService.seleccionar(ordenador.nserie).subscribe((datos) => {
      this.tablaproductos = datos;
    });
  }
  public borrarseleccionados() {
    this.ordenadorRestService.borrarseleccionados(this.seleccionados).subscribe(() => {
      // Actualiza la lista de ordenadores después de borrar
      this.ordenadores = this.ordenadores.filter(
        (ordenador) => !this.seleccionados.includes(ordenador.nserie)
      );
      this.seleccionados = []; // Limpia la selección
    });
  }

}