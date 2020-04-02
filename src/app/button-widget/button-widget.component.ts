import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ToolbarServiceService } from '../toolbar-service.service';
import { ThemePalette } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropServiceService } from '../drag-drop-service.service';

@Component({
  selector: 'app-button-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.css']
})
export class ButtonWidgetComponent implements OnInit {

  @Output() public widgetClick = new EventEmitter();
  
  public widgetTitle: string = "Button Widget";

  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  public buttonText= "Text";

  public buttonType = "basic";

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor(private _ToolbarServiceService : ToolbarServiceService, private _DragDropServiceService: DragDropServiceService) { 

  }

  ngOnInit() {
  }

  EmitClickEvent(widgetTemplateRef){
    
    this.widgetClick.emit(widgetTemplateRef);
    
  }

  close(){
    
    this._ToolbarServiceService.close();
  }

  drop(event: CdkDragDrop<string[]>) {
    this._DragDropServiceService.drop(event);

  }

}
