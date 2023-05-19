import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { Singer } from '../model/singer.model';
import { Types } from '../model/type.model';
import { Image } from '../model/image.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
providedIn: 'root'
})
export class SingerService {
  apiURL: string = ' http://localhost:8070/singers/api';
  apiURLCat: string = 'http://localhost:8070/singers/api/leg';
singer!: Singer[]; //un tableau de singer
types!: Types[] ;

singerRecherche!: Singer[];
singerRecherche2!: Singer[];
constructor(private http: HttpClient,private authService:AuthService) { }
  /*this.types=[{id:1,legue:"ligue1"},{id:2,legue:"Bundesliga"},{id:3,legue:"Premier Types"},{id:4,legue:"Serie A"}];
this.singer = [
  { id : 1, nom: "juvents", classement:1, datematch
: new Date("01/14/2011"),type:this.types[3]},
{ id : 2, nom: "paris saint german", classement:6, datematch
: new Date("01/14/2011"),type:this.types[0]},
{ id: 3, nom: "bayern munich", classement: 2, datematch
 : new Date("12/17/2010"),type:this.types[1]},
{ id: 4, nom:"Manchester-city", classement: 3, datematch
 : new Date("02/20/2020"),type:this.types[2]},
 { id : 5, nom: "Milan", classement:7, datematch
: new Date("01/14/2011"),type:this.types[3]},
{ id : 5, nom: "Monaco", classement:5, datematch
: new Date("01/14/2011"),type:this.types[0]},

  
];
}*/
listeSingere():Singer[] {
  return this.singer;
}
ajoutersinger( e: Singer){
  this.singer.push(e);
  }
  supprimersinger( prod: Singer){
    //supprimer le produit prod du tableau singer
    const index = this.singer.indexOf(prod, 0);
    if (index > -1) {
    this.singer.splice(index, 1);
    }
    //ou Bien
    /* this.singer.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.singer.splice(index, 1);
    }
    }); */
    }
    singere!:Singer;
    

updateSingere(p:Singer)
{

this.supprimersinger(p);
this.ajoutersinger(p);
}
listerTypes():Types[]{
  return this.types;


}



 ajoutertype(l:Types){
  this.types.push(l);
 }
 // api
 
  ajouterSingere( singer: Singer):Observable<Singer>{
    return this.http.post<Singer>(this.apiURL, singer, httpOptions);
    }
    supprimerSingere(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterSingere(id : number): Observable<Singer>{
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Singer>(url);
      }
      updateSingeree(singer :Singer) : Observable<Singer>
{
return this.http.put<Singer>(this.apiURL, singer, httpOptions);
}

listeTypes():Observable<Types[]>{
  return this.http.get<Types[]>(this.apiURL+"/types");
  }
  
      consulterTypese(id : number): Observable<Types>{
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Types>(url);
      }
      rechercherParTypese(id: number):Observable< Singer[]> {
        const url = `${this.apiURL}/prodscat/${id}`;
        return this.http.get<Singer[]>(url);
        }
        rechercherParNome(nom: string):Observable< Singer[]> {
          const url = `${this.apiURL}/singerByName/${nom}`;
          return this.http.get<Singer[]>(url);
          }
          ajouterTypese( type: Types):Observable<Types>{
            return this.http.post<Types>(this.apiURL+"/types", type, httpOptions);
           }
          
           listeSinger(): Observable<Singer[]>{
            let jwt=this.authService.getToken();
            jwt="Bearer "+jwt;
            let headers: HttpHeaders = new HttpHeaders({"Authorization": jwt});
            
            return this.http.get<Singer[]>(this.apiURL+"/all", {headers: headers});

          }
          ListeTypes(): Observable<Types[]>{
            let jwt=this.authService.getToken();
            jwt="Bearer "+jwt;
            let headers: HttpHeaders = new HttpHeaders({"Authorization": jwt});
            return this.http.get<Types[]>(this.apiURLCat, {headers: headers});
            }

          ajouterSinger( e: Singer):Observable<Singer>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Singer>(this.apiURL+"/addsinger", e, {headers:httpHeaders});
            
           
            
        }
        supprimerSinger(id : number) {
          const url = `${this.apiURL}/deletesinger/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.delete(url, {headers:httpHeaders});
          }
          consulterSinger(id: number): Observable<Singer> {
            const url = `${this.apiURL}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Singer>(url,{headers:httpHeaders});
            }
            updateSinger(e :Singer) : Observable<Singer> {
              let jwt = this.authService.getToken();
              jwt = "Bearer "+jwt;
              let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.put<Singer>(this.apiURL+"/updatesinger", e, {headers:httpHeaders});
              }
              ajouterTypes( e: Types):Observable<Types>{
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.post<Types>(this.apiURL+"/addleg", e, {headers:httpHeaders});
                
                }
                rechercherParTypes(idCat: number): Observable<Singer[]> {
                  let jwt = this.authService.getToken();
                  jwt = "Bearer "+jwt;
                  let httpHeaders = new HttpHeaders({"Authorization":jwt})
                  return this.http.get<Singer[]>(this.apiURL+"/eqlg/"+idCat, {headers:httpHeaders});
                  
                  } 
                  rechercherParNom(nom: string): Observable<Singer[]> {
                    let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})
                    return this.http.get<Singer[]>(this.apiURL+"/singer/"+nom, {headers:httpHeaders});
                  }
                  uploadImage(file: File, filename: string): Observable<Image>{
                    let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})
                    const imageFormData = new FormData();
                    imageFormData.append('image', file, filename);
                    const url = `${this.apiURL + '/image/upload'}`;
                    return this.http.post<Image>(url, imageFormData,{headers:httpHeaders});
                    }
                    loadImage(id: number): Observable<Image> {
                      let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})

                    const url = `${this.apiURL + '/image/get/info'}/${id}`;
                    return this.http.get<Image>(url,{headers:httpHeaders});
                    }
                    
          
      }
          //with jwt
         
 





  
  
