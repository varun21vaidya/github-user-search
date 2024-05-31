import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
