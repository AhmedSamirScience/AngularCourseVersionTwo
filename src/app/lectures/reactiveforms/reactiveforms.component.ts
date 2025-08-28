import { Component } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.scss'
})
export class ReactiveformsComponent {

  //Template Driven Form
  usernamebta3elts = '';

  getData(e:NgModel) {
    console.log(e);
  }


  //Reactive Form
  userAgeBta3Elts : FormControl = new FormControl('');


}
