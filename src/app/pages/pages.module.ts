import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories/repositories.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShortenerComponent } from './shortener/shortener.component';

@NgModule({
  declarations: [
    RepositoriesComponent,
    HomeComponent,
    ShortenerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  exports: [
    RepositoriesComponent,
    MaterialModule,
    HomeComponent,
    FlexLayoutModule
  ]
})
export class PagesModule { }
