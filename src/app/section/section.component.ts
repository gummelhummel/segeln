import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { TemplateHostDirective } from "./template-host.directive";
import { Sectionable } from "./sectionable";
import * as templatedComponents from '../index';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input("data") data;
  @Input("type") type;

  @ViewChild(TemplateHostDirective) templateHost;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.createComponents();
  }

  ngAfterViewChecked() {
    this.createComponents();
  }

  private createComponents() {
    let th = this.templateHost;
    if (th) {
      let type = templatedComponents[this.type];
      if ((th.componentRef ? th.componentRef.componentType : null) != type) {
        let viewContainerRef = th.viewContainerRef;
        if (viewContainerRef) {
          viewContainerRef.clear();
          if (type != null) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
            th.componentRef = viewContainerRef.createComponent(componentFactory);

            let template: Sectionable = <Sectionable>th.componentRef.instance;
            template.setData(this.data);
          }
          if (th.componentRef) th.componentRef.changeDetectorRef.detectChanges();
        }
      } else if (th.componentRef && th.componentRef.instance) {
        let template: Sectionable = <Sectionable>th.componentRef.instance;
        //if (template.data !== this.data) {
        template.setData(this.data);
        th.componentRef.changeDetectorRef.detectChanges();
        //}
      }
    }
  }
}
