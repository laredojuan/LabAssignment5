import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,  
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatToolbarModule,
    MaterialDesignModule,
    MatCheckboxModule
  ],
  exports:[
  MatSliderModule,
   MatButtonModule,
   MatCardModule,
   MatButtonToggleModule,
   MatChipsModule,
   MatToolbarModule,
   MaterialDesignModule,
   MatCheckboxModule
  ]

})
export class MaterialDesignModule { }
