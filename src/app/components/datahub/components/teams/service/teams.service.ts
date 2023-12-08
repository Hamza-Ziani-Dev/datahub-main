import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  link: string = 'http://localhost:3000';
 //link: string = environment.link;
  API: string = environment.API;
  endpoint = "teams-hub";
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }
 
  getListAttaques(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/list-attaques`);
  }

  getGeneralInfo(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/general-info`);
  }

  getFixtureInfo(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/botola-info`);
  }

  getTreeMapData(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/tree-map-data`);
  }

  getRadarData(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/radar-data`);
  }
}
