import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToolbarServiceService {

  // local variables for panel and refrence
  private panel: MatSidenav;
  private vcf: ViewContainerRef;

  constructor() {

  }

  // assign passing navside to this panel
  setPanel(sidenav: MatSidenav) {
    this.panel = sidenav;
  }

  // assign the refrence to ng-template
  setContentVcf(viewContainerRef: ViewContainerRef) {
    this.vcf = viewContainerRef;
  }

  // create view from the refrence of ng-template
  private createView(template: TemplateRef<any>) {
    this.vcf.clear();
    this.vcf.createEmbeddedView(template);
  }

  // create a view and then assign it to naveside and then open 
  open(template: TemplateRef<any>) {
    this.createView(template);
    return this.panel.open();
  }


  // close the panel 
  close() {
    this.panel.close();
  }

  // toggle the panel
  toggle() {
    return this.panel.toggle();
  }
}
