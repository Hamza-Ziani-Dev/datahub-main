import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  link: string = 'http://localhost:3000';
  //link: string = environment.link;
  API: string = environment.API;
  endpoint = "competitions";

  constructor( private http: HttpClient,) { }
  //Upload File Resultas
  uploadCsv(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(`http://localhost:5000/import-csv`, formData);
  }
  //Get Table Resultats:
  getResultats(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/resultats`);
  }


  //Get Table Classment:
  getClassment(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/classment`);
  }


  
  //Get Table Champions:
  getChampions(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/classment`);
  }



    //Get Categories:
    getCategoriesChampions(){
      return this.http.get('https://fakestoreapi.com/products/categories');
    }
  
    //Filter Categories:
    getFilterCategorieChampions(key:any,journee:any){
      return this.http.get<any>(`https://fakestoreapi.com/products/category/${key}/${journee}`);
    }
  

 

}
