import { Component, OnInit } from '@angular/core';

import { CursosServices } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosServices],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosServices: CursosServices;

  constructor(private _cursosServices: CursosServices) {
    // this.cursosServices = _cursosServices;
  }

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();
    CursosServices.emitirCursoCriadoSemInstancia.subscribe(
      cursoCriado => this.cursos.push(cursoCriado)
    );
  }

}
