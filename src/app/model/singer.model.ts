import { Types } from "./type.model";
import { Image } from "./image.model";

export class Singer {
    idSinger? : number;
    nomSinger? : string;
    paysSinger?: string;
    
    dateFound? : Date ;
    type!: Types;
    image! : Image
    imageStr!:string;
    }