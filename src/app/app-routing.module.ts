import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path: "", component:AccueilComponent},
  {path: "produit", component:ListeProduitComponent},
  {path: "**", component:NonTrouveComponent}
  // {path: "**", redirectTo: ""} /* Moins facile à debugger */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
