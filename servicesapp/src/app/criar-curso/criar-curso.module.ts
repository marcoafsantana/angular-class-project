import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosServices } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  providers: [
    // CursosServices,
  ]
})
export class CriarCursosModule { }
