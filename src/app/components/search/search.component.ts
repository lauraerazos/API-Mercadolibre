import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from 'src/app/services/mercadolibre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  articulos: any[] = [];

  constructor(private mercadolibre: MercadolibreService) { }

  buscar(termino: string){
    console.log(termino);
    this.mercadolibre.getArticulo(termino)
      .subscribe( (data:any) => {console.log(data.results);
        this.articulos = data.results;
      });
    
  }

  ngOnInit() {
  }
}
