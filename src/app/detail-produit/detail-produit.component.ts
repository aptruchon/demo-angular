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

  unProduit: Produit;
  
  ngOnInit(){
    let id = this.route.snapshot.params["id"];
    this.unProduit = this.apiBiero.getUnProduit(id);
  }
}
