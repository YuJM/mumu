import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaButtonComponent } from './pa-button.component';



@NgModule({
  declarations: [PaButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [PaButtonComponent]
})
export class PaButtonModule { }
