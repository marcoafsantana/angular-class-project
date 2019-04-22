import { Injectable } from '@angular/core';
// Serviços servem para injetar dados(fazer requisiçoes etc) para o back e depois servir ao front.
@Injectable({// Dependency injection. Nesse decorator setamos que dependencias iremos injetar
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Curso 1', 'Curso 2', 'Curso 2'];
  }
}
