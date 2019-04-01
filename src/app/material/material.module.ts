import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatCardModule,
         MatGridListModule,
         MatButtonModule,
         MatTooltipModule,
         MatIconModule,
         MatMenuModule,
         MatDialogModule,
         MatProgressBarModule} from '@angular/material';
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
    MatMenuModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
