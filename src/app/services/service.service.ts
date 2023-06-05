import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
//https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient
//https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G - Curso Angular Loyane

public empresas: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) {}

  public post(url: string, data:any){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(url, data, {headers: headers});   
  }

  public update(url: string, data:any){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.put(url, data, {headers: headers});   
  }

  public get(url: string){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get(url, {headers: headers});   
  }
  
  public getAll(url: string){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get(url, {headers: headers})
  }

  public delete(url: string){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return  this.httpClient.delete(url, {headers: headers})   
  }
}

interface Empresa {
  id: number,
  razaoSocail: string,
  email: string,
  cnpj: string,
  users: []
}