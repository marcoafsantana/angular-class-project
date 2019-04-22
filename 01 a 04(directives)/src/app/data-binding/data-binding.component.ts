import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  /*
  //Class e style binding:

  url :string = 'google.com';
  imgUrl: string = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  */

  /*
  //Event binding:

  valorAtual :string = '';
  isMouseOver :boolean = false;

  botaoClicado(){
    alert('Clicou');
  }

  onKeyUp(event: KeyboardEvent){
    console.log(event.key, (<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(value: String){
    console.log('Salva:', value);
  }

  onMouseOver(){
    this.isMouseOver = true;
  }
  
  onMouseOut(){
    this.isMouseOver = false;
  }
*/

  //Two-Way Binding:

  /*nome :string ='Marco';

  pessoa :object = {
    idade : 19,
    nome :'Laura'
  }*/

  //Input property:

  // nomeDoCurso:string = "Angular";

  //Output property;

  onMudouValor(event){
    console.log(event.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
