import { Component} from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators    } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group',
  standalone: true,
  imports: [ReactiveFormsModule   ],
  templateUrl: './reactive-form-group.component.html',
  styleUrl: './reactive-form-group.component.scss'
})
export class ReactiveFormGroupComponent {

  userData: FormGroup = new FormGroup ({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),

  })

  constructor() {
     console.log(this.userData);
  }
}
