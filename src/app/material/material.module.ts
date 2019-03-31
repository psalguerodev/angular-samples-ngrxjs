import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatCardModule,
         MatGridListModule,
         MatButtonModule,
         MatTooltipModule,
         MatIconModule,
         MatMenuModule} from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
