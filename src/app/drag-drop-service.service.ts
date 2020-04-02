import { Injectable, ViewChild } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropServiceService {

  // global variables
  public drapDragList = [];
  private initial_id = 0;

  constructor() { 

  }

  generateID () {
    // increment by 1 
    this.initial_id = this.initial_id + 1;
    // concatinate
    var listID = "list_"+ this.initial_id;
    // push to array 
    this.addToList(listID);

    console.log(listID);
    
    return listID;
  }

  addToList(listID){
    //if it not already exsit
    if(this.drapDragList.indexOf(listID) === -1){
      this.drapDragList.push(listID);
    }

    // handle if it a docublicate
  }

  drop(event: CdkDragDrop<string[]>) {

    console.log("event.previousContainer: " , event.previousContainer);
    console.log("event.container: " , event.container);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
