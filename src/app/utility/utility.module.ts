import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharCounterComponent } from './char-counter/char-counter.component';



@NgModule({
  declarations: [
    CharCounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharCounterComponent
  ]
})
export class UtilityModule { }
