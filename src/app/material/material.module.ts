import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatCardModule,
         MatGridListModule,
         MatButtonModule,
         MatTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
