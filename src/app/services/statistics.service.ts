import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class statisticsService {
  link: string = environment.link;
  API: string = environment.API;
  endpoint = "joueur"

  constructor(private http: HttpClient) {
  }

  create(request: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/${this.endpoint}/create`, request).pipe(
      catchError((error) => {
        console.error('Error creating ', error);
        return throwError('Error creating , please try again.');
      })
    );
  }

  createChild(request: any, id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/${this.endpoint}/create-child/${id}`, request).pipe(
      catchError((error) => {
        console.error('Error creating child ', error);
        return throwError('Error creating child , please try again.');
      })
    );
  }
  update(request: any, id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/${this.endpoint}/update/${id}`, request).pipe(
      catchError((error) => {
        console.error('Error updating ', error);
        return throwError('Error updating , please try again.');
      })
    );
  }

  updateChild(request: any, id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/${this.endpoint}/update-child/${id}`, request).pipe(
      catchError((error) => {
        console.error('Error updating child ', error);
        return throwError('Error updating child , please try again.');
      })
    );
  }

  deleteChild(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.link}/${this.API}/${this.endpoint}/delete-child/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting child ', error);
        return throwError('Error deleting child , please try again.');
      })
    );
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.link}/${this.API}/${this.endpoint}/delete/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting ', error);
        return throwError('Error deleting , please try again.');
      })
    );
  }

  all(): Observable<boolean> {
    return this.http.get<boolean>(`${this.link}/${this.API}/${this.endpoint}/all`).pipe(
      catchError((error) => {
        console.error('Error all ', error);
        return throwError('Error all , please try again.');
      })
    );
  }

  deleteOneValue(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.link}/${this.API}/${this.endpoint}/delete-one-value/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting ', error);
        return throwError('Error deleting , please try again.');
      })
    );
  }
  updateOneValue(value: number, id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/${this.endpoint}/update-one-value/${id}`, { value }).pipe(
      catchError((error) => {
        console.error('Error deleting ', error);
        return throwError('Error deleting , please try again.');
      })
    );
  }

  allWithDatatable(id: number, chartType: string = "all"): Observable<boolean> {
    return this.http.get<boolean>(`${this.link}/${this.API}/${this.endpoint}/datatable/${id}/${chartType}`).pipe(
      catchError((error) => {
        console.error('Error all ', error);
        return throwError('Error all , please try again.');
      })
    );
  }
  allWithValueChart(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.link}/${this.API}/${this.endpoint}/chart-value-tags/${id}`).pipe(
      catchError((error) => {
        console.error('Error all ', error);
        return throwError('Error all , please try again.');
      })
    );
  }
  allWithValueChartDatabase(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.link}/${this.API}/${this.endpoint}/database-chart-value-tags/${id}`).pipe(
      catchError((error) => {
        console.error('Error all ', error);
        return throwError('Error all , please try again.');
      })
    );
  }

  createValue(request: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/${this.endpoint}/create-value`, request).pipe(
      catchError((error) => {
        console.error('Error creating ', error);
        return throwError('Error creating , please try again.');
      })
    );
  }

  updateValue(request: any, id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.link}/${this.API}/${this.endpoint}/update-value/${id}`, request).pipe(
      catchError((error) => {
        console.error('Error creating ', error);
        return throwError('Error creating , please try again.');
      })
    );
  }

}
