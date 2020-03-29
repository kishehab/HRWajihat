import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  profileForm = this.formBuilder.group({
    login: this.formBuilder.group({
      username: [''],
      password: [''],
      rtpassword: ['']
    }),
    firstName: ['',[Validators.required, Validators.minLength(4)]],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });


  ngOnInit() {
    console.log(this.profileForm);
    
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

}
