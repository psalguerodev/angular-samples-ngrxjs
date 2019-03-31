import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, timer, of } from 'rxjs';
import { map, catchError, retry, retryWhen, delay, tap, delayWhen, filter, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json')});
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      retryWhen( errors => errors.pipe(
        delay(1500),
        tap((errorStatus: HttpErrorResponse) => {
          console.log(`Status `, errorStatus.status );
          console.log('Retrying...');
        }),
        concatMap((error: HttpErrorResponse, count: number) => {
          if (count < 3 && (error.status === 404 || error.status === 500)) {
            console.log(`Counts ${count} of retry request delay ${3000}`);
            return of(error.status);
          }

          return throwError(error);
        })
      )),
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
              // this.errorDialogService.openDialog(event);
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
          let data = {};
          data = {
              reason: error && error.message ? error.message : '',
              status: error.status
          };

          console.log('Error Intercept: ', data);
          return throwError(error);
      }));

  }

}
