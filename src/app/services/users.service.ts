import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroments';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserResponse {
  items: User[];
  totalCount: number;
}

export interface User {
  name: string;
  id: number;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.httpClient
      .get<UserResponse>(`${enviroment.baseUrl}/users/?page=${page}`)
      .pipe(map(data => data.items));
  }
}
