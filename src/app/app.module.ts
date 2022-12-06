import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ProduitComponent } from './produit/produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ProduitComponent,
    ListeProduitComponent,
    AccueilComponent,
    NonTrouveComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
