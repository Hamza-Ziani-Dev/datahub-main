import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  link: string = "http://localhost:3000";
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

  One(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/one/${playerId}`);
  }

  TabOne(type: string, playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/tab/${type}/${playerId}`);
  }
}
