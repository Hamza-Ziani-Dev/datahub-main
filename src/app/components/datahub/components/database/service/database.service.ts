import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  link: string = 'http://localhost:3000';
  //link: string = environment.link;
  API: string = environment.API;
  endpoint = "database-hub";
  constructor(
    private http: HttpClient
  ) { }

  ListPlayersPost(limit: number, page: number, options: any = {}): Observable<any> {
    return this.http.post<any>(`${this.link}/${this.API}/${this.endpoint}/list-players-post?limit=${limit}&page=${page}`, { options: options });
  }

  FiltersListPlayersPost(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/filters-list-players-post`);
  }

  ListPlayers(limit: number, page: number, options: any = {}): Observable<any> {
    return this.http.post<any>(`${this.link}/${this.API}/${this.endpoint}/list-players?limit=${limit}&page=${page}`, { options: options });
  }

  One(id: number, playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/one/${id}/${playerId}`);
  }

  TabOne(type: string, id: number, playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/tab/${type}/${id}/${playerId}`);
  }
  PlayerDureeTraining(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/joueur/player-duree-training/${playerId}`);
  }
}
