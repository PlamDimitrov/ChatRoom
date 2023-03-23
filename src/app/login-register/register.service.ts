import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class LoginRegisterService {


  constructor(private apiService: ApiService) { }

  public registerUser(body: any): Observable<any> {
    return this.apiService.post("user/register", body);

  }
  public loginUser(body: any): Observable<any> {
    return this.apiService.post("user/login", body);
  }
}
