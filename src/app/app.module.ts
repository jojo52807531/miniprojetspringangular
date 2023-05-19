import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingerComponent } from './singer/singer.component';
import { AddSingerComponent } from './add-singer/add-singer.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateSingerComponent } from './update-singer/update-singer.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';
import { ListeTypesComponent } from './liste-type/liste-type.component';
import { UpdateTypesComponent } from './update-type/update-type.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SingerComponent,
    AddSingerComponent,
    UpdateProduitComponent,
    UpdateSingerComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParTypeComponent,
    NomrechercherComponent,
    ListeTypesComponent,
    UpdateTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
