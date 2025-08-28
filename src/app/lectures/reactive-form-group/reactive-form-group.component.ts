import { NgClass } from '@angular/common';
import { Component} from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators    } from '@angular/forms';
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-reactive-form-group',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './reactive-form-group.component.html',
  styleUrl: './reactive-form-group.component.scss'
})
export class ReactiveFormGroupComponent {

  userData: FormGroup = new FormGroup ({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      //address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required ]),
        street: new FormControl('', [Validators.required ]),
      })
    });

  constructor() {
     console.log(this.userData);

     this.userData.valueChanges.subscribe( (value) => {
       console.log(value);
     });

     this.name?.valueChanges.subscribe( (value) => {

       console.log('hhhhhhhhhhhhhhh' + value);
     });
  }

  get name() {
    return this.userData.get('name');
  }

  get email() {
    return this.userData.get('email');
  }

  get phone() {
    return this.userData.get('phone');
  }

  get address() {
    return this.userData.get('address');
  }
  get city() {
    return this.userData.get('address.city');
  }

  get street() {
    return this.userData.get('address.street');
  }

  onSubmit() {
    if(this.userData.valid)
    {
      console.log(this.userData.value);
      /*this.userData.setValue({
        name: '',
        email: '',
        phone: '',
        address: ''
      });*/
      /*this.userData.patchValue({
        name: '',
        email: '',
      });*/
      this.userData.reset();
    } else {
      this.userData.markAllAsTouched();
      Object.keys(this.userData.controls).forEach(key => {
         this.userData.controls[key].markAsDirty();  
      });
    }
  }

}
