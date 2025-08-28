import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder-form-controller',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-builder-form-controller.component.html',
  styleUrl: './reactive-form-builder-form-controller.component.scss'
})
export class ReactiveFormBuilderFormControllerComponent {

  username : FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ])

  userage : FormControl = new FormControl('', [
    Validators.min(16), 
    Validators.max(30)
  ])

  userphone : FormControl = new FormControl('', [
    Validators.pattern(/^\d{11}$/)
    //what is this pattern for? 
    // This pattern is for validating a 10-digit phone number.
  ])

  useremail : FormControl = new FormControl('',  
    Validators.email
  )

}
