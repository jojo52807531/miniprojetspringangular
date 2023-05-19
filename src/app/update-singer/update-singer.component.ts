import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SingerService } from '../services/singer.service';
import { Singer} from '../model/singer.model';
import { Types } from '../model/type.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-singer',
  templateUrl: './update-singer.component.html',
  styles: [
  ]
})
export class UpdateSingerComponent implements OnInit {
  currentSinger = new Singer();
  type!:Types[];
  updatedid!:number;
  myImage! : string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;

 
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private singerService: SingerService) { }

  ngOnInit(): void {
    //this.type=this.singerService.listerTypes();
    this.singerService.ListeTypes().subscribe(types => {
      this.type = types;
    });
    this.singerService.consulterSinger(this.activatedRoute.snapshot.params['id']).subscribe((singer) => {
      console.log(singer);
      this.currentSinger = singer;
      this.updatedid=this.currentSinger.type.idLeg;
    
    this.singerService.loadImage(this.currentSinger.image.idImage).subscribe((img:Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image;
console.log("aaaa"+this.myImage);
}); 
    });
    
  
  
  }
  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    }
  updateSinger() {
    this.currentSinger.type = this.type.
    find(cat => cat.idLeg == this.updatedid)!;
    if (this.isImageUpdated)
{
this.singerService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.currentSinger.image = img;
this.singerService
.updateSinger(this.currentSinger)
.subscribe((prod) => {
this.router.navigate(['singer']);
});
});
}
else{
   this.singerService.updateSinger(this.currentSinger).subscribe(prod => {
   this.router.navigate(['singer']); }
   );
   

}
}
}

