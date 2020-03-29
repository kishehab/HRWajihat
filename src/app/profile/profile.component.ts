import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isDisabled: boolean = true;
  btnHandleEdit: boolean = true;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  
  editModde(){
    this.isDisabled = false;
    this.btnHandleEdit = false;
  }

  saveEditedForm(){
    this._snackBar.open('saved','dismise');
    this.isDisabled = true;
    this.btnHandleEdit = true;
  }

  cancelEditForm(){
    this.isDisabled = true;
    this.btnHandleEdit = true;
  }

}
