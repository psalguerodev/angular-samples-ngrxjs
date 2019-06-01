import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenerComponent } from './shortener.component';
import { MaterialModule } from '../../material/material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShortenerComponent
  }
];

@NgModule({
  declarations: [
    ShortenerComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShortenerModule { }
