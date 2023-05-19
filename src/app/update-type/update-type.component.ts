import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Types } from '../model/type.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styles: [
  ]
})
export class UpdateTypesComponent implements OnInit {
  @Input()
ajout!:boolean;

  @Input()
  type!:Types;


  @Output()
  typeupdated=new EventEmitter<Types>();
 



  constructor() { }

  ngOnInit(): void {
    console.log(this.type);
  }
  saveType(){
    this.typeupdated.emit(this.type);
    
    
    }
    

}
