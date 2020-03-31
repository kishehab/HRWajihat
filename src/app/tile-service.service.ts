import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TileServiceService {

  public number = ['1','2','3'];


  constructor() { 

  }


  getNumber(){

    return this.number;
    
  }
}
