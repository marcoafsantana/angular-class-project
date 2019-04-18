import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetailComponent
  ],
  exports:[//Quais diretivas, componentes etc iremos exportar para outros modules
    CursosComponent,
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
