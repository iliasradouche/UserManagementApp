import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(page: number, perPage: number): Observable<any> {
    const url = `${this.apiBaseUrl}/users?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }
}
