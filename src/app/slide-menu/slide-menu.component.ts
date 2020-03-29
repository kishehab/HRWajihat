import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css']
})
export class SlideMenuComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
