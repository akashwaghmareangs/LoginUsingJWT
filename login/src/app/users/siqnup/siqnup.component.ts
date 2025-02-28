import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-siqnup',
  imports: [ReactiveFormsModule, FormsModule,NgIf,HttpClientModule],
  templateUrl: './siqnup.component.html',
  styleUrl: './siqnup.component.css',
})
export class SiqnupComponent implements OnInit {
  errmsg: any;
  errmsgshow = false;

  constructor(private service :ApiService) {}
  siqnupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  siqnupSubmit() {
    if (this.siqnupForm.valid) {
      console.log(this.siqnupForm.value, 'siqnupform###');
      this.errmsgshow = false;
    } else {
      this.errmsgshow = true;
      this.errmsg = 'All Fields Required !!!';
    }
  }
}
