import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: number = 5;
  deletarCiclo :boolean = true;

  mudarValor(){
    this.valor = this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = false;
  }
}
