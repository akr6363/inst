import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroments/enviroments';
import { MeResponce } from '../models/me.model';
import { ResultCodes } from '../enums/core.enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;

  constructor(private httpClient: HttpClient) {}

  authMe() {
    return this.httpClient.get<MeResponce>(`${enviroment.baseUrl}/auth/me`).subscribe(data => {
      if (data.resultCode === ResultCodes.success) {
        this.isAuth = true;
      }
    });
  }
}
