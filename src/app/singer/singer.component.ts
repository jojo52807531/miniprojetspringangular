import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Singer} from '../model/singer.model'

import { SingerService } from '../services/singer.service';
import { Types } from '../model/type.model';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  singer?:Singer[];
  type!:Types[];
  constructor(private singerservices: SingerService,
    public authService:AuthService) {

    //this.singer = singerservices.listeSinger();
   }

   ngOnInit(): void {
    this.singerservices.listeSinger().subscribe(singer => {
    console.log(singer);
     this.singer = singer;
    // this.singerservices
    //   .loadImage(singer[5].image.idImage)
    //   .subscribe((img: Image) => {
    //   singer[5].imageStr = 'data:' + img.type + ';base64,' + img.image;
    //   console.log(singer[5].imageStr);
    //   });
      
    this.singer.forEach((prod) => {
        console.log(prod.image)
      this.singerservices
      .loadImage(prod.image.idImage)
      .subscribe((img: Image) => {
      prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
      console.log(prod.imageStr);
      });
      });
      });
      console.log(this.singer);
    
      
    }
  supprimersinger(p: Singer)
{
  let conf=confirm("etes vous sur");
  if(conf)
this.singerservices.supprimerSinger(p.idSinger!).subscribe(() => {});
//this.router.navigate(['singer']).then(() => {
  window.location.reload();
}

}
