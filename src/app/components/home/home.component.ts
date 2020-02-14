import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) { 

    console.log("lalala");
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (paises:any) => {
    this.paises = paises;
    console.log(paises);
    })
  }

  ngOnInit() {
  }

}
