import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ToolbarServiceService } from '../toolbar-service.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  // local variables to refer to sidenav and its content
  @ViewChild('panel', { static: true }) private sidePanel: MatSidenav;
  @ViewChild('content', { static: true, read: ViewContainerRef }) private vcf: ViewContainerRef;


  constructor(private _ToolbarServiceService : ToolbarServiceService) { }

  ngOnInit() {
    
    // register sidenav to the service.
    this._ToolbarServiceService.setPanel(this.sidePanel);
    this._ToolbarServiceService.setContentVcf(this.vcf);

  }
  
}
