import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { TemplateHostDirective } from "../template-host.directive";
import { Template } from "../template";

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

  ngOnInit() {console.log(this.data)
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
        if ((th.componentRef ? th.componentRef.componentType : null) != this.type) {
          let viewContainerRef = th.viewContainerRef;
          if (viewContainerRef) {
            viewContainerRef.clear();
            if (this.type != null) {
              let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.type);
              th.componentRef = viewContainerRef.createComponent(componentFactory);
              
              let template: Template = <Template>th.componentRef.instance;
              template.data = this.data;
            }
            if (th.componentRef) th.componentRef.changeDetectorRef.detectChanges();
          }
        } else if (th.componentRef && th.componentRef.instance) {
          let template: Template = <Template>th.componentRef.instance;
          if (template.data !== this.data) {
            template.data = template.data
            th.componentRef.changeDetectorRef.detectChanges();
          }
        }
    }
  }
}
