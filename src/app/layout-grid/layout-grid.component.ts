import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-layout-grid',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class LayoutGridComponent implements OnInit {

  public fatherMsg = "messages binded";
  public opened = false;
  public sideNavTitle = "";
  public numberOfTiles ="";

  public isRequested : boolean = false;

  constructor() { }
  
  ngOnInit() {
    
  }

  requestBoardToAddTile (){
    console.log("rbtt");
    this.isRequested = true;
  }

  openSidenav(msg){
    this.opened = !this.opened;
    this.sideNavTitle = msg.toUpperCase();
    
  }




  



}
