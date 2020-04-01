import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClearAllDialogComponent } from '../clear-all-dialog/clear-all-dialog.component';
import { TileServiceService } from '../tile-service.service';

export interface Tile {
  id: number;
  cols: number;
  rows: number;
  text: string;
  color: string;
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tiles: Tile[] = [];
  public id_generator =  0;
  public grid_cols = 12;
  public defualt_cols_size = 6;
  public defualt_rows_size = 2;
  public defualt_color = "white";
  public tilesCount = 0;

  // message sent form parent component
  @Input('prntMsg') public message;

   // message sent form parent component
  @Input('isRequested') public addTileRequest;

  // event sent to parent component
  @Output() public addTileEvent = new EventEmitter();
  

 

  constructor( public dialog : MatDialog, private _TileServiceService : TileServiceService) { 

  }

  ngOnInit() {

    // inistanite tile manager 
    //this.INITIATE_TILES_MANAGER();
    var nums = this._TileServiceService.getNumber();
    console.log(nums);
    
  }

  INITIATE_TILES_MANAGER(){
    
    // check if if the tiles array has not element
  }

  incrementCols(element : Tile){
    // identify the ID
    var index = this.findTileIndexByID(element.id);

    var currentCols : number;

    // check if the index is found
    if(index >=0 ){
      // get the current value of cols
      currentCols = this.tiles[index].cols;
      // check if the current value is not larger than grid columns
      if(currentCols < this.grid_cols){
        // incrment by 1
        this.tiles[index].cols = currentCols + 1;
        // if no indext is found 
      } else {
        console.log("incrementCols() function: ", + currentCols + " is the maximum of cols");
      }
    } else {
      console.log("incrementCols() function: ", " index for selected tile does not exsit" + index);
    }
  }

  decrementCols(element : Tile){
    // identify the ID
    var index = this.findTileIndexByID(element.id);

    var currentCols :  number;

    // check if the index is found
    if(index >= 0 ){
      // get the current value of cols
      currentCols = this.tiles[index].cols;
      // check if the current value does not equal to zero
      if(currentCols > 1){
        // incrment by 1
        this.tiles[index].cols = currentCols - 1;
        // if no indext is found 
      } else {
        console.log("decrementCols function: ", " index for selected tile does not exsit");
      }
      
    }
  }

  incrementRows(element : Tile){
    // identify the ID
    var index = this.findTileIndexByID(element.id);

    var currentRows : number;

    // check if the index is found
    if(index >= 0 ){
      // get the current value of cols
      currentRows = this.tiles[index].rows;
      // check if the current value is not larger than grid columns
      if(true){
        // incrment by 1
        this.tiles[index].rows = currentRows + 1;
        // if no indext is found 
      } else {
        console.log("incrementRows() function: ", " index for selected tile does not exsit");
      }
      
    }
  }

  decrementRows(element : Tile){
    // identify the ID
    var index = this.findTileIndexByID(element.id);

    var currentRows : number;

    // check if the index is found
    if(index >=0 ){
      // get the current value of cols
      currentRows = this.tiles[index].rows;
      // check if the current value does not equal to zero
      if(currentRows > 1){
        // incrment by 1
        this.tiles[index].rows = currentRows - 1;
        // if no indext is found 
      } else {
        console.log("decrementRows() function: ", + currentRows + " is the minimum of rows");
      }
    } else {
      console.log("decrementRows function: ", " index for selected tile does not exsit");
    }
  }
  addDefaultTile(){
    this.tiles.push({
      id: this.id_generator++, 
      cols: this.defualt_cols_size, 
      rows:this.defualt_rows_size, 
      text:'Drag you component here!', 
      color: this.defualt_color
    });
    
    // increment the tileCount
    this.tilesCount += 1;
    
    // emit count to parent
    this.addTileEvent.emit(this.tiles.length)
  }

  addTile(cols : number, rows : number, text : string, color : string){
    this.tiles.push({
      id: this.id_generator++, 
      cols: cols, 
      rows:rows, 
      text: text, 
      color: color
    });

    // increment the tileCount
    this.tilesCount =+ 1;
  }
  
  deleteTile(element: Tile){
    // identify the ID
    var index = this.findTileIndexByID(element.id);
    
    if(index >= 0 ){
        this.tiles.splice(index, 1);
        
        // decrement the tileCount
        this.tilesCount -= 1;
    } else {
      console.log("deleteTile function: ", " index for selected tile does not exsit");
    }
  }

  findTileIndexByID(id: number){
    var index = -1;
    this.tiles.forEach(function(item, i){
      if(item.id === id){
        index = i;
        console.log("found it. It has an index of " + index)
      }
    }, this);

    return index;
  }

  clearAllTiles(){
    
    // open dialog to make sure user want to clear all tile
    let userInput = this.dialog.open(ClearAllDialogComponent);
    
    userInput.afterClosed().subscribe( result => {
         // check if the array is not empty.
         console.log(this.tiles.length > 0 && result);

      if(this.tiles.length > 0 && result === "true"){
        console.log("get in!");
        
        this.tiles = [];
        // reset the tileCount
        this.tilesCount = 0;
      } else {
        console.log("No tiles exsit to be cleared!");
        
      }
    });
  }

}
