import { Injectable } from '@angular/core';
import { ServiceBaseService } from './service-base.service';
import { HttpClient } from '@angular/common/http';
import { delay, tap, mergeMap, filter } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ServiceBaseService {

  constructor(protected http: HttpClient) { super(http); }

  mergeMapUsers(): Observable<any> {
    const usersIds = from(['1', '2', '3', '4'])
      .pipe(
        mergeMap((value: string , index: number) => {
          console.log(`Merge map value ${value} index ${index}`);
          return this.http.get(this.getApiUrlGitHub(value))
            .pipe(
              delay(1000),
              filter(response => {
                return (response !== undefined);
              })
            );
        })
      );

    return usersIds;
  }

}
