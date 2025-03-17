import { Injectable } from '@angular/core';
import { Ordenador } from './ordenador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorRestService {

  constructor(private httpClient:HttpClient) { 
    
  }

  public buscartodos(): Observable<Ordenador[]>{
    return this.httpClient.get<Ordenador[]>("http://localhost:8080/webapi/ordenador");
  }

  public insertar (ordenador : Ordenador){
    return this.httpClient.post<Ordenador>("http://localhost:8080/webapi/ordenador",ordenador);
  }
  public seleccionar (nserie: number){
    return this.httpClient.get<Ordenador[]>(`http://localhost:8080/webapi/ordenador/${nserie}`);
  }
  
  public borrar(nserie: number){
    return this.httpClient.delete<Ordenador>(`http://localhost:8080/webapi/ordenador/${nserie}`);
  }
  public buscarUno(){
    
  }
}