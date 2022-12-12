import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { ListeProduit } from './liste-produit';

@Injectable({
  providedIn: 'root'
})
export class ApiBieroService {
  produits: Produit[];
  url: string = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http: HttpClient) {
    // ---- | Version statique | ----
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
  modifProduit(produit:Produit):Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        "Authorization" : "Basic " + btoa('biero:biero')
      })
    }
    return this.http.post<Produit>(this.url + produit.id_biere, produit, httpOptions);
  }

  // getListe():Produit[] {
  //   return this.produits;
  // }

  // getUnProduit(id:number):Produit {
  //   return this.produits[id];
  // }
}