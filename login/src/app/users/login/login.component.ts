import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
