import {
  Directive,
  HostListener,
  ElementRef,
  Renderer,
  HostBinding, //Vai ouvir eventos do host(elemento que terá essa diretiva)
  } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){// onMouseOver é o nome da minha função. poderia ser qualquer outro
/*  this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )*/
    this.backgroundColor = 'yellow';//Usando HostBinding
  }

  @HostListener('mouseleave') onMouseLeave(){// onMouseLeave é o nome da minha função. poderia ser qualquer outro
/*  this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      'background-color',
      'white'
    )*/
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    //O construtor não precisa mais de element ref e renderer agora que temos o hostbinding
    //private elementRef: ElementRef,
    //private renderer: Renderer,
  ) { }

}
