import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatCardModule,
         MatGridListModule,
         MatButtonModule,
         MatBadgeModule,
         MatTooltipModule,
         MatIconModule,
         MatInputModule,
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
    MatProgressBarModule,
    MatInputModule,
    MatBadgeModule
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
    MatProgressBarModule,
    MatInputModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
