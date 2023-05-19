import { SingerService } from './../services/singer.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Singer } from '../model/singer.model';
import { Types } from '../model/type.model';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RechercheParTypeComponent implements OnInit {
  singer!:Singer[];
  id! : number;
types! : Types[];

  constructor(public  authService:AuthService,
   private singerService:SingerService) { }

  ngOnInit(): void {
    //this.types=this.singerService.listerTypes();
    //this.singer=this.singerService.listeSinger();
    this.singerService.listeSinger().subscribe(singer => {
      this.singer = singer;

    }
    );
    this.singerService.ListeTypes().subscribe(types => {
      this.types = types;
      console.log(types)

    }
    );
  }
  onChange()
  {
    this.singerService.rechercherParTypes(this.id).subscribe(singer => {
      this.singer = singer;

    }
    )

  }
 
  

}
