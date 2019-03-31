import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsService } from './rxjs.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HandleErrorService } from './http/handle-error.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    RxjsService,
    { provide: HTTP_INTERCEPTORS, useClass: HandleErrorService, multi: true }
  ]
})
export class ServicesModule { }
