import { Component, OnInit } from '@angular/core';
import { ToolbarServiceService } from '../toolbar-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor( private _ToolbarServiceService : ToolbarServiceService) { }

  ngOnInit() {
  }

  openWidget($event){

    this._ToolbarServiceService.open($event);
  }

  closeWidget(){
    
    this._ToolbarServiceService.close();
  }

}
