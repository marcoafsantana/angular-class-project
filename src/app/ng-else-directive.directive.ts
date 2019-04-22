import { 
  Directive,
  Input, //Se iremos receber a condição [ngElse]="condition" ngElse será uma imput property
  TemplateRef, //Faz referencia ao conteudo que será renderizado.
  ViewContainerRef, //Referencia ao conteudo onde iremos renderizar.
} from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirectiveDirective {

  @Input() set ngElse(condition: boolean){//set pois ngElse é uma function
    // console.log(this._templateRef);
    // console.log(this._viewContainerRef);
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef); //Renderiza o templateref no view container
    } else{
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}