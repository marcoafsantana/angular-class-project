import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs:['nomeCurso:nome']//essa conotacao ou @input
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso :string = '';

  constructor() { }

  ngOnInit() {
  }

}
