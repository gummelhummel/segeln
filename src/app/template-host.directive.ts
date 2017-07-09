import { Directive, Input, ComponentRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[templateHost]'
})
export class TemplateHostDirective {

  componentRef:ComponentRef<{}>

  constructor(public viewContainerRef: ViewContainerRef) { }

}
