import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  outputs:['mudouValor']//essa conotacao ou @output

})
export class OutputPropertyComponent implements OnInit {

  @Input() valor :number = 0;

  @Output() mudouValor = new EventEmitter();//Mudou valor gerará um evento (eventemitter)

  @ViewChild('campoInput') campoValorInput: ElementRef;
  
  incrementa(){
    // this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor:this.valor});
  }

  decrementa(){
    // this.valor--;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor:this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
