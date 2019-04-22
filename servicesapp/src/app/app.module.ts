import { CursosModule } from './cursos/cursos.module';
import { CriarCursosModule } from './criar-curso/criar-curso.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosServices } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CriarCursosModule,
    CursosModule
  ],
  providers: [
    // CursosServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
