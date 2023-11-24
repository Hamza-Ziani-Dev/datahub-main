import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RankingService {
  // link: string = 'http://localhost:3000';
  link: string = environment.link;
  API: string = environment.API;
  endpoint = "ranking-hub";
  constructor(
    private http: HttpClient
  ) { }

  ListPlayersPost(id: number, limit: number, page: number, options: any = {}): Observable<any> {
    return this.http.post<any>(`${this.link}/${this.API}/${this.endpoint}/list-players-post/${id}?limit=${limit}&page=${page}`, { options: options });
  }

  ListPlayers(limit: number, page: number, options: any = {}): Observable<any> {
    return this.http.post<any>(`${this.link}/${this.API}/${this.endpoint}/list-players?limit=${limit}&page=${page}`, { options: options });
  }

  One(id: number, playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/one/${id}/${playerId}`);
  }
}
