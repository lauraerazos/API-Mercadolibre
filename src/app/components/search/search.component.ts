import { Component, OnInit, Input } from '@angular/core';
import { MercadolibreService } from 'src/app/services/mercadolibre.service';
import { Product } from 'src/app/model/product.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  @Input() product: Product;
  sellerName: string;
  articulos: any[] = [];
  txtSearch: string;
  flag:boolean;

  constructor(private mercadolibre: MercadolibreService) { }

  p: number = 1;
  totalResults: number =0;

  buscar(termino: string){
    this.articulos=[];
    this.txtSearch=termino;
    this.flag = true;
    this.mercadolibre.getArticulo(termino, '0')
      .subscribe( (data:any) => {
        data.results.map(i => {
          this.mercadolibre.getSeller(i.seller.id).subscribe((data:any) => {
            i.sellerName=data;
          });
          this.articulos.push(i);
          
        })
        console.log(this.articulos);
        this.p = 1;
        
        console.log(data.paging.total);
        if(data.paging.total >= 1000){
          this.totalResults = 1000;
          console.log(this.totalResults);
        }
        else{
          this.totalResults = data.paging.total;
          console.log(this.totalResults);
        }
      });
  }

  ngOnInit() {
    this.flag = false;
  }

  capturar(event, termino: string){
    if(event.keyCode == 13){
      this.buscar(termino);
    }
  }

  adelante(numeroPagina: any){
    let index = numeroPagina*50;
    this.mercadolibre.getArticulo(this.txtSearch, index + '')
    .subscribe( (data:any) => {console.log(data.results);
      this.articulos = data.results;
    });
  }
}
