import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
}
