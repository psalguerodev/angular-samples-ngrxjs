import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: RepositoriesComponent
  }
];

@NgModule({
  declarations: [
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class RepositoriesModule { }
