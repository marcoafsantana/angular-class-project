import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer) {// Sempre que botamos um elemento com essa diretiva, ele será o ElementRef.
    // A documentação do angular pede pra não usarmos ElementRef por segurança:
    // console.log(elementRef);
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
    // Dessa forma a melhor forma de fazermos isso é com o Renderer:
    console.log(this.renderer);
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }
}
