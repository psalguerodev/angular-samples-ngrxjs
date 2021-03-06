import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {

  constructor(protected http: HttpClient) { }

  public getApiUrlGitHub(usernameDefault: string = `1`): string {
    // return `https://api.github.com/users/${usernameDefault}/repos`;
    // return `https://jsonplaceholder.typicode.com/users/${usernameDefault}`;
    return `https://servermock08.herokuapp.com/users/${usernameDefault}`;
  }

  public getUsersUrl() {
    return `http://localhost:3000/users`;
  }


  public handleErrorRxjs(error: any): Observable<any> {
    // return throwError(`Error API ${error.message}`);
    return of([error.message]);
  }
}
