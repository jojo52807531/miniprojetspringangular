import { SingerGuard } from './singer.guard';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  SingerComponent } from './singer/singer.component';
import {AddSingerComponent} from './add-singer/add-singer.component'
import { UpdateSingerComponent } from './update-singer/update-singer.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';
import { ListeTypesComponent } from './liste-type/liste-type.component';

const routes: Routes = [
  {path:"singer",component:SingerComponent},
  {path:"add-singer",component:AddSingerComponent,canActivate:[SingerGuard]},
  {path:"" ,redirectTo:"singer",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:"update-singer/:id",component:UpdateSingerComponent,canActivate:[SingerGuard]},
  {path:"rechercheParTypes",component:RechercheParTypeComponent},
  {path:"nomrechercher",component:NomrechercherComponent},
  {path:"listeTypes",component:ListeTypesComponent,canActivate:[SingerGuard]}


  

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
