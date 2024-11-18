import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  form!:FormGroup;
  constructor (private router :Router , private formBuilder:FormBuilder){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required], // Autorise seulement les lettres et les espaces
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  
  name: string = '';
  email: string = '';
  password: string = '';

signin(){
  console.log("hello")
  console.log("Name", this.name )

}
onSubmit() {
  if (this.form.valid) {
    const data =this.form.value
    console.log('Form Submitted', data );
  } else {
    console.log('Form is invalid');
  }
}
goToHome(){
  console.log("navigating to home")
this.router.navigate(['/home'])
}
////////*********** */

}
