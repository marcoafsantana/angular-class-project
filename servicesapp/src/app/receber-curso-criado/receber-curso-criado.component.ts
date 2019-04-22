import { CursosServices } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  constructor(private _cursosServices:CursosServices) { }

  novoCurso : string ='';

  ngOnInit() {
    this._cursosServices.emitirCursoCriado.subscribe(
      (cursoCriado)=>{
        this.novoCurso = cursoCriado;
      }
    );
  }

}
