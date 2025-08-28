import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  userInfo = {
    name: '',
    email: ''
  }

  submit(statusForm:NgForm)
  {
    if(statusForm.valid)
    {
      console.log(statusForm);
      console.log(this.userInfo);
    } else {
      statusForm.control.markAllAsTouched();
    }

  }

}
