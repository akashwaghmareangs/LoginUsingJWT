import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-tutorial',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent {

}
