import { Component, OnInit, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { TileServiceService } from '../tile-service.service';


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


  constructor( private _TileServiceService : TileServiceService) {

   }
  
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
