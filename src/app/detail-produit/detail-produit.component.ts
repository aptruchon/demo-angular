import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBieroService } from '../api-biero.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {

  constructor(private apiBiero: ApiBieroService, private route: ActivatedRoute){ }

  id: number;
  unProduit: Produit;
  
  ngOnInit(){
    // Récupérer l'id en surveillant les changements dans l'url
    this.route.params.subscribe((params)=>{
      this.id = params["id"];
      // this.unProduit = this.apiBiero.getUnProduit(this.id);
      console.log(params);
      this.apiBiero.getProduit(this.id).subscribe((produit:any) => {
        this.unProduit = produit.data;
      })
    });

    // Récupérer l'id SANS surveiller les changements dans l'url
    // let id = this.route.snapshot.params["id"];
    // this.unProduit = this.apiBiero.getUnProduit(id);
  }
}
