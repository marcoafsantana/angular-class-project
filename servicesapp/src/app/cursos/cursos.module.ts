import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [CursosComponent],
  providers: [
    // CursosServices,
  ]
})
export class CursosModule { }
