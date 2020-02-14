import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  constructor(private http: HttpClient) {
    console.log('Service listo');
  }

  getArticulo(termino: string, offset: string){
    //const headers = new HttpHeaders({});
    return this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=${termino}&offset=${offset}&limit=50`);
  }
}

