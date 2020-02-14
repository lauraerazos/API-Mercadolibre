import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from 'src/app/services/mercadolibre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  articulos: any[] = [];
  txtSearch: string;

  constructor(private mercadolibre: MercadolibreService) { }

  p: number = 1;
  totalResults: number =0;

  buscar(termino: string){
    this.txtSearch=termino;
    console.log(termino);
    this.mercadolibre.getArticulo(termino, '0')
      .subscribe( (data:any) => {console.log(data.results);
        this.articulos = data.results;
        this.totalResults = data.paging.total;
        console.log(data.paging.total);
      });
  }

  ngOnInit() {
  }

  adelante(numeroPagina: any){
    let index = numeroPagina*50;
    this.mercadolibre.getArticulo(this.txtSearch, index + '')
    .subscribe( (data:any) => {console.log(data.results);
      this.articulos = data.results;
    });
  }
}
