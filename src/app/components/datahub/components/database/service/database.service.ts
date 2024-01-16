import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  // link: string = environment.link_pro;
  link: string = 'http://localhost:3000';
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

  One(playerId: number | null): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/one/${playerId}`);
  }
  getInjuries(id: number) {
    return this.http
      .get(`${this.link}/${this.API}/medical/injuries/${id}`);
  }
  getPlayerTiming(id: number) {
    return this.http.get(
      `${this.link}/${this.API}/stats/playerTiming/${id}`
    );
  }
  JoueurPhysiqueChart(id: number) {
    return this.http.get(
      `${this.link}/${this.API}/joueur/joueur-physique-chart/${id}`
    );
  }
  getTrainingsDatabase(id: number) {
    return this.http
      .get(`${this.link}/${this.API}/joueur/database-trainings/${id}`);
  }
  getGpsPlayer(id: number) {
    return this.http.get(
      `${this.link}/${this.API}/joueur/getGpsPlayer/${id}`
    );
  }
  allWithValueChartDatabase(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.link}/${this.API}/stats/database-chart-value-tags/${id}`);
  }
  getPlayerPhysiqueTestDatabase(id: number) {
    return this.http
      .get(
        `${this.link}/${this.API}/joueur/database-joueur-physique-test/${id}`
      );
  }
  getTestPhysiqueByPlayer(playerId: number) {
    return this.http.get(`${this.link}/${this.API}/joueur/physique_test/${playerId}`);
  }
  TabOne(type: string, playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/${this.endpoint}/tab/${type}/${playerId}`);
  }
  PlayerDureeTraining(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/joueur/player-duree-training/${playerId}`);
  }
  InsertPhysiqueTest(playerId: number, data: any[]): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/physique-players/insert-physique-test/${playerId}`, { data });
  }

  LOGOS = [
    {
      id: 'LNFP',
      sexe: 'M',
      logo: 'assets/images/logo-botola.png'
    },
    {
      id: 'LNFD',
      sexe: 'M',
      logo: 'assets/images/logo-lnfd.png'
    },
    {
      id: 'LNFF',
      sexe: 'F',
      logo: 'assets/images/logo-lnff.png'
    },
    {
      id: 'LNFA',
      sexe: 'M',
      logo: 'assets/images/logo-lnfa.png'
    },
  ];
  logos(_id: string = null): any {
    return _id ? this.LOGOS.find(({ id }) => id == _id)?.logo : 'assets/images/logo-botola.png';
  }
}
