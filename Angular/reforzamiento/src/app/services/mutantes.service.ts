import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MutantesService {

  mutantes:any[]=[];

  constructor(private http:HttpClient) {
console.log("servicio de mutantes listo");
this.cargar_mutantes();
   }

   cargar_mutantes(){
     return this.http.get("assets/data/mutantes.json")
     .subscribe(responseData => {
       console.log(responseData);
       this.mutantes=responseData["mutantes"];
     });

   }
}
