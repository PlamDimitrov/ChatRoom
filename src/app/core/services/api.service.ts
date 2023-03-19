import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${url}`);
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${url}`, body);
  }

  public put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${url}`, body);
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${url}`);
  }

}
