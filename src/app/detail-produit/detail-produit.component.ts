import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private apiBiero: ApiBieroService, private route: ActivatedRoute, private router: Router){ 
    this.unProduit = {id_biere: 0, nom: "", description: "", brasserie: ""};
  }

  ngOnInit(){
    this.formModif = new FormGroup(
      {
        id_biere: new FormControl("", [Validators.required, Validators.minLength(3)]),
        nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
        brasserie: new FormControl("", [Validators.required, Validators.minLength(3)]),
        description: new FormControl("", [Validators.required, Validators.minLength(3)]),
        image: new FormControl(""),
        date_modif: new FormControl(""),
        date_ajout: new FormControl(""),
        actif: new FormControl(""),
      }
    );
    // Récupérer l'id en surveillant les changements dans l'url
    this.route.params.subscribe((params)=>{
      this.id = params["id"];
      // this.unProduit = this.apiBiero.getUnProduit(this.id);
      
      this.apiBiero.getProduit(this.id).subscribe((produit:any) => {
        this.unProduit = produit.data;
        this.formModif.setValue(this.unProduit);
        console.log(this.unProduit);
        console.log(this.unProduit.nom);
        // console.log(this.unProduit.image);
        
        
        
      })
    });

    // Récupérer l'id SANS surveiller les changements dans l'url
    // let id = this.route.snapshot.params["id"];
    // this.unProduit = this.apiBiero.getUnProduit(id);
  }

  modifier():void{
    if(this.formModif.status == "VALID"){
      this.unProduit = this.formModif.value;
      this.apiBiero.modifProduit(this.unProduit).subscribe((data:any)=>{
        console.log(data);
        // Valider l'opération
        if(data.data == this.unProduit.id_biere){
          this.router.navigate(["produit"]);
        }
      })
    }
  }

  annuler():void{
    this.formModif.setValue(this.unProduit);
  }
}
