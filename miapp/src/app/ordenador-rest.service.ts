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

  public insertar (ordenador : Ordenador):Observable<Ordenador>{
    return this.httpClient.post<Ordenador>("http://localhost:8080/webapi/ordenador",ordenador);
  }
  public seleccionar (nserie: number){
    return this.httpClient.get<Ordenador[]>(`http://localhost:8080/webapi/ordenador/${nserie}`);
  }
  
  public borrar(nserie: number):Observable<Ordenador>{
    return this.httpClient.delete<Ordenador>(`http://localhost:8080/webapi/ordenador/numeroserie/${nserie}`);
  }
  public borrartodos ():Observable<any>{
    return this.httpClient.delete<any>(`http://localhost:8080/webapi/ordenador/borrartodos`)
  }
  public buscarUno(nserie:number):Observable<Ordenador>{
    return this.httpClient.get<Ordenador>(`http://localhost:8080/webapi/ordenador/${nserie}`);
  }
}