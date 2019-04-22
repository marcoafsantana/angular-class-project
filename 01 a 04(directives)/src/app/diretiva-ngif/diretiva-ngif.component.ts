import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[]= [
    'Angular',
  ];

  mostrar: boolean = true;

  onCursos(){
    this.mostrar = !this.mostrar;
  }

  constructor() { }

  ngOnInit() {
  }

}
