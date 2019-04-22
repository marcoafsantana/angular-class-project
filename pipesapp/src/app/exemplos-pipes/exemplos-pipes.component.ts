import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro : any = {
    titulo: 'Learning JS',
    rate: 4.568,
    preco: 44.99,
    numeroDePaginas: 258,
  }

  livros: string[] = [
    'Angular',
    'JavaScript'
  ]

  filtro: string ='';

  addLivro(novoLivro: string){
    this.livros.push(novoLivro);
  }

  obterLivros(){
    if(this.livros.length === 0 || this.filtro == undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(
      v=> {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase())>=0){
          return true;
        }
        return false;
      }
    );
  }

  valorAsync = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('Valor Assincrono'), 2000);
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));﻿

  constructor() { }

  ngOnInit() {
  }

}
