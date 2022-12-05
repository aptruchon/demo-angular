import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent {
  salutation: String;

  produit: Object[];

  constructor(){}

  ngOnInit(): void {
    if(this.salutation == ""){
      this.salutation = "Bonjour";
    }

    this.produit = [...Array(15)].map((item, index)=>{
      return {
              id: index + 1, 
              nom: "Mon produit " + index,
              prix: Math.ceil(Math.random() * 100)
            };
    })
    console.log(this.produit);
    
  }
}
