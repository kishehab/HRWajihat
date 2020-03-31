import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ToolbarServiceService } from '../toolbar-service.service';

@Component({
  selector: 'app-button-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.css']
})
export class ButtonWidgetComponent implements OnInit {

  @Output() public widgetClick = new EventEmitter();
  
  public widgetTitle: string = "Button Widget";

  constructor(private _ToolbarServiceService : ToolbarServiceService) { 

  }

  ngOnInit() {
  }

  EmitClickEvent(widgetTemplateRef){
    
    this.widgetClick.emit(widgetTemplateRef);
    
  }

  close(){
    
    this._ToolbarServiceService.close();
  }

}
