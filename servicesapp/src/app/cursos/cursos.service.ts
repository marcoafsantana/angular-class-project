import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosServices {

    private cursos : string[] = [
        'Angular 2',
        'Vue',
        'Java'
      ];

    emitirCursoCriado = new EventEmitter<string>(); //Emite para uma instancia. Caso existam duas instancias desse service, uma não manda para a outra.
    static emitirCursoCriadoSemInstancia = new EventEmitter<string>(); //Com static, esse evento não precisa de instancia pra emitir, assim envia para todas as instancias.
    constructor(private logService : LogService){
        console.log('Service');
    }

    getCursos(){
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCursos(curso : string){
        this.logService.consoleLog(`Criando o curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosServices.emitirCursoCriadoSemInstancia.emit(curso);
    }
}