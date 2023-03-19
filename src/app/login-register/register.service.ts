import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class LoginRegisterService {


  constructor(private apiService: ApiService) { }

  public registerUser(body: any) {
    return this.apiService.post("user/register", body);

  }
  public loginUser(body: any) {
    return this.apiService.post("user/login", body);
  }
}
