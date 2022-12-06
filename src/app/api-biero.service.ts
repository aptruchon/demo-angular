import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ApiBieroService {
  produits: Produit[];

  constructor() {
    this.produits = [...Array(15)].map((item, index)=>{
      return {
              id: index, 
              nom: "Mon produit " + index,
              prix: Math.ceil(Math.random() * 100),
              editable: false
            };
    })
  }

  getListe():Produit[] {
    return this.produits;
  }

  getUnProduit(id:number):Produit {
    return this.produits[id];
  }
}