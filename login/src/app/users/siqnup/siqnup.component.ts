import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-siqnup',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './siqnup.component.html',
  styleUrl: './siqnup.component.css'
})
export class SiqnupComponent implements OnInit {
siqnupSubmit() {
throw new Error('Method not implemented.');
}


  constructor(){

  }
  siqnupForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  
  }

}
