import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { error } from 'logrocket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user : User={
    id:-1 , 
    firstname : '', 
    lastname : '', 
    email :'',
    username :'',
    password : '', 
    address:''
  } // initilisation
  constructor(private userService : UserService , private router: Router){}
addUser(){
  this.userService.addUser(this.user).subscribe(newUser=>{
    console.log("hey", newUser)
    // this.resetForm()
    //  window.location.reload()
this.router.navigate(['/listUsers'])
  }, error=>{
    console.log("Error while adding user", error)
  })

}
resetForm(){
  this.user={
    id:-1 , 
    firstname : 'vide', 
    lastname : '', 
    email :'',
    username :'',
    password : '', 
    address:''
  }
}
}
