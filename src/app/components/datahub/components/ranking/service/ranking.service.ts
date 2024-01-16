import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RankingService {
  // link: string = environment.link_pro;
  link: string = 'http://localhost:3000';
  API: string = environment.API;
  endpoint = "ranking-hub";
  constructor(
    private http: HttpClient
  ) { }

  ListPlayersPost(post: string | null, category: string, limit: number, page: number, options: any = {}): Observable<any> {
    return this.http.post<any>(`${this.link}/${this.API}/${this.endpoint}/list-players-post/${post}/${category}?limit=${limit}&page=${page}`, { options: options });
  }

  ListPlayers(limit: number, page: number, options: any = {}): Observable<any> {
    return this.http.post<any>(`${this.link}/${this.API}/${this.endpoint}/list-players?limit=${limit}&page=${page}`, { options: options });
  }

  One(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/one/${playerId}`);
  }

  FiltersListPlayers(): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/filters-list-players`);
  }
  FiltersListPlayersPost(post: string | null, category: string | null): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/filters-list-players-post/${post}/${category}`);
  }
  InsertPhysiqueTest(playerId: number, data: any[]): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/physique-players/insert-physique-test/${playerId}`, { data });
  }


}
