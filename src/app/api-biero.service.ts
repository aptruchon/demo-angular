import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';
import { HttpClient } from '@angular/common/http';
import { ListeProduit } from './liste-produit';

@Injectable({
  providedIn: 'root'
})
export class ApiBieroService {
  produits: Produit[];
  url: string = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http: HttpClient) {

    


    // this.produits = [...Array(15)].map((item, index)=>{
    //   return {
    //           id: index, 
    //           nom: "Mon produit " + index,
    //           prix: Math.ceil(Math.random() * 100),
    //           editable: false
    //         };
    // })
  }

  getProduits():Observable<ListeProduit>{
    return this.http.get<ListeProduit>(this.url);
  }

  getProduit(id: number):Observable<Produit>{
    return this.http.get<Produit>(this.url + id);
  }

  // getListe():Produit[] {
  //   return this.produits;
  // }

  // getUnProduit(id:number):Produit {
  //   return this.produits[id];
  // }
}