import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
