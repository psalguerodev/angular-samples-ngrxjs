import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsService } from './rxjs.service';
import { HttpClientModule } from '@angular/common/http';

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
    RxjsService
  ]
})
export class ServicesModule { }
