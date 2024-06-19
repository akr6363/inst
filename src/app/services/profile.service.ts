import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroments';
import { Observable } from 'rxjs';

export interface ProfileResponse {
  aboutMe?: string;
  contacts: Contacts;
  lookingForAJob: boolean;
  lookingForAJobDescription?: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
}

export interface Contacts {
  facebook: string;
  website?: string;
  vk?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  mainLink?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.httpClient.get<ProfileResponse>(`${enviroment.baseUrl}/profile/${userId}`);
  }
}
