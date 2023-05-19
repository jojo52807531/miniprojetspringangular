import { Types } from './../model/type.model';

import { Component, OnInit } from '@angular/core';
import { Singer } from '../model/singer.model';
import { SingerService } from '../services/singer.service';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';


@Component({
  selector: 'app-add-singer',
  templateUrl: './add-singer.component.html',
  styleUrls: ['./add-singer.component.css']
})
export class AddSingerComponent implements OnInit {
  newSinger = new Singer();
  uploadedImage!: File;
imagePath: any;

  type!: Types[] 
  newid!:number;
  newtype!:Types;
  constructor(private singerservices: SingerService,
    private router :Router) { }
  ngOnInit(): void {
    this.singerservices.ListeTypes().
    subscribe(cats => {this.type = cats;
    console.log("aaaa"+cats);
    console.log(this.type);
    });
    }
    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }
 
  addSinger(){
    this.singerservices.uploadImage(this.uploadedImage, this.uploadedImage.name).subscribe((img:Image) => {
this.newSinger.image=img;
    this.newSinger.type = this.type.find(cat => cat.idLeg == this.newid)!;
    console.log(this.newSinger)
    this.singerservices.ajouterSinger(this.newSinger)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['singer']).then(()=>{window.location.reload();});
    });
    }
    );
  }
    
      
    
  
  

    
    

}
