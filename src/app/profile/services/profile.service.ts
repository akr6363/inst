import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroments/enviroments';
import { Observable } from 'rxjs';
import { ProfileResponse } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.httpClient.get<ProfileResponse>(`${enviroment.baseUrl}/profile/${userId}`);
  }
}
