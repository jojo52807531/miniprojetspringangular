import { Types } from './../model/type.model';
import { Component, OnInit } from '@angular/core';
import { Singer } from '../model/singer.model';
import { AuthService } from '../services/auth.service';
import { SingerService } from '../services/singer.service';

@Component({
  selector: 'app-nomrechercher',
  templateUrl: './nomrechercher.component.html',
  styles: [
  ]
})
export class NomrechercherComponent implements OnInit {

  singer!:Singer[];
  id! : number;
  nomsinger!:string;
  
  types! : Types[];
  allsinger!:Singer[];

  constructor(public  authService:AuthService,
   private singerService:SingerService) { }

  ngOnInit(): void {
    
    this.singerService.listeSinger().subscribe(singer => {
      console.log(singer);
      this.singer = singer;
      });

    
    //this.allsinger=this.singerService.listeSinger();
  }
  
 
  onkeyUpp(text:String)
  {
    console.log(text);
    this.singer=this.allsinger.filter(item=>item.nomSinger?.toLowerCase().includes(text.toLowerCase()));

  }
  onKeyUp(text:string){
    this.singerService.rechercherParNom(this.nomsinger).
    subscribe(singer => {
    this.singer = singer;
    console.log(singer)});
    }

}
