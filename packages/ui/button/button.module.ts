import {NgModule} from '@angular/core';
import {PaButtonComponent} from './pa-button.component';
import {CommonModule } from '@angular/common';


@NgModule({
  declarations: [PaButtonComponent],
  imports: [CommonModule],
  exports: [PaButtonComponent]
})
export class PaButtonModule { }
