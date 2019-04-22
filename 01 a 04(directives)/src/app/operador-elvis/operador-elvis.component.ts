import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefas: any[]= [
    {
      desc:'descrição da tarefa',
      responsavel:{
        usuario: {
          nome: 'nome do user',
        }
      }
    },
    {
      desc:'descrição da tarefa 2',
      responsavel:{
        usuario: null
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
