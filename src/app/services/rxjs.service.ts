import { Injectable } from '@angular/core';

import { interval, fromEvent, of, forkJoin, Observable, throwError, from } from 'rxjs';
import { map, filter, catchError, retry, mergeMap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ServiceBaseService } from './service-base.service';


@Injectable({
  providedIn: 'root'
})
export class RxjsService extends ServiceBaseService {

  constructor(protected http: HttpClient) { super(http); }

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
      console.log(`Map value ${value}`);
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
    const reposUriIn28Minutes: Observable<any>  = this.http.get(this.getApiUrlGitHub('2'));

    const subscription = forkJoin([reposUriPsalgueroDev, reposUriIn28Minutes])
      .pipe(
        // retry(2),
        map((value: any) => (value != null && value !== undefined) ? value : false ),
        catchError((err: any) => throwError(`Error API ${err.message}`))
      )
      .subscribe((resultsRepos: any) => {
        console.log(resultsRepos);
        subscription.unsubscribe();
      });
  }

  mergeMapMethod(): void {
    // const userNames = from(['psalguerodev', 'in28minutes'])
    const userNames = from(['1', '2'])
      .pipe(
      mergeMap((username: string, index: number) => {
        const resultMsg: string = `Username value ${username} Index value ${index}`;
        console.log(resultMsg);

        if (index === 0) {
          return this.http.get(this.getApiUrlGitHub(username))
                          .pipe(
                            // retry(2),
                            delay(2500),
                            catchError(this.handleErrorRxjs));
        }

        return this.http.get(this.getApiUrlGitHub(username))
                        .pipe(
                          // retry(2),
                          catchError(this.handleErrorRxjs));

      })
    );

    const subscriptionHttp = userNames.subscribe((value) => {
      console.log('Value Mergemap' , value);
    });
  }

}
