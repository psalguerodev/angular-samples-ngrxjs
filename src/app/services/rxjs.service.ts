import { Injectable } from '@angular/core';

import { interval, fromEvent, of, forkJoin, Observable, throwError } from 'rxjs';
import { map, filter, catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RxjsService {


  constructor(private http: HttpClient) { }

  private getApiUrlGitHub(usernameDefault: string = `psalguerodev`): string {
    return `https://api.github.com/users/${usernameDefault}/repos`;
  }

  intervalMethod(): void {
    const secondsCounter = interval(1000);
    const subscription = secondsCounter.subscribe( seconds => {
      console.log(`It's been ${seconds} seconds since subscribing!`);
      if (seconds === 10) {
        subscription.unsubscribe();
        console.log(`Finish interval of ${seconds} seconds.`);
      }
    });
  }

  fromEventMethod(): void {
    const mouseMoves = fromEvent(document.body, 'mousemove');
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

      if (evt.clientX <= 4) {
        subscription.unsubscribe();
        console.log('Unsubscribe mouse event');
      }
    });
  }

  mapMethod(): void {
    const nums = of(10, 13, 15, 34, 40 , 31, 12, 60, 100);
    const expresion = map((value: number) => value * value);

    const squaredNumbers = expresion(nums);
    squaredNumbers.subscribe(value => {
      console.log(value);
    });
  }


  filterMapMethod(): void {
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
      filter((value: number) => (value % 2 !== 0) ),
       map((value: number) => value * value)
      );
    squareOdd.subscribe(value => {
      console.log(`Filter Map >> ${value} `);
    });
  }

  forkJoinMethod(): void {
    const reposUriPsalgueroDev: Observable<any>  = this.http.get(this.getApiUrlGitHub());
    const reposUriIn28Minutes: Observable<any>  = this.http.get(this.getApiUrlGitHub('in28minutes'));

    const subscription = forkJoin([reposUriPsalgueroDev, reposUriIn28Minutes])
      .pipe(
        retry(2),
        map((value: any) => (value != null && value !== undefined) ? value : false ),
        catchError((err: any) => throwError(`Error API ${err.message}`))
      )
      .subscribe((resultsRepos: any) => {
        console.log(resultsRepos);
        subscription.unsubscribe();
      });
  }



}
