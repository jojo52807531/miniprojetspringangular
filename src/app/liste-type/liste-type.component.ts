import { AuthService } from './../services/auth.service';
import { SingerService } from './../services/singer.service';
import { Types } from './../model/type.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-type',
  templateUrl: './liste-type.component.html',
  styles: [
  ]
})
export class ListeTypesComponent implements OnInit {
  ajout:boolean=true;
  Types=new Types();

  type!:Types[];
  updatedtype:Types = {"idLeg":0,"nomType":""};


  constructor(private singerservices:SingerService,
    public AuthService : AuthService) { }
   

  ngOnInit(): void {
  this.chargerTypes();
    }

    
  
  typeupdated(type:Types){
   // this.updatedtype=type;
   this.singerservices.ajoutertype(type);
   
   console.log("updated type",type);
  }
  updateleg(l : Types){
    this.updatedtype=l;

    this.ajout=false;
  }
  typeUpdated(cat:Types){
    console.log("Cat updated event",cat);
    this.singerservices.ajouterTypes(cat).subscribe( ()=> this.chargerTypes());
     
    }
    chargerTypes(){
      this.singerservices.ListeTypes().subscribe(type => {
        this.type = type;
        console.log(type)
      });
      
      
      }
      AjouterTypes(){
        console.log(this.Types)
          
        this.singerservices.ajouterTypes(this.Types).subscribe(prod => {
          console.log(prod);
          window.location.reload();
      }
        

        );
        this.Types=new Types();
        this.chargerTypes();
        }
      }


    
 

