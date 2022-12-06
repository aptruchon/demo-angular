import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiBieroService } from '../api-biero.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {
  id: number;
  unProduit: Produit;
  formModif: FormGroup;
  
  constructor(private apiBiero: ApiBieroService, private route: ActivatedRoute){ 
    // this.unProduit = {id_biere: null, nom: "", description: ""};
  }

  ngOnInit(){
    this.formModif = new FormGroup(
      {
        nom: new FormControl(this.unProduit?.nom, [Validators.required, Validators.minLength(3)]),
        description: new FormControl(this.unProduit?.description, [Validators.required, Validators.minLength(3)]),
      }
    );
    // Récupérer l'id en surveillant les changements dans l'url
    this.route.params.subscribe((params)=>{
      this.id = params["id"];
      // this.unProduit = this.apiBiero.getUnProduit(this.id);
      console.log(params);
      this.apiBiero.getProduit(this.id).subscribe((produit:any) => {
        this.unProduit = produit.data;
        console.log(this.unProduit);
      })
    });

    // Récupérer l'id SANS surveiller les changements dans l'url
    // let id = this.route.snapshot.params["id"];
    // this.unProduit = this.apiBiero.getUnProduit(id);
  }
}
