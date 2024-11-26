import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
declare var $:any ; //declaration variable jQuery

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  user!:User;
  userId!: number;
  constructor(private route :ActivatedRoute , private userService : UserService){}

ngOnInit(): void {
  this.userId=+this.route.snapshot.paramMap.get('id')! //+ pour convertir en entier sans le + yekhoha chaine
  this.getUser()
}
getUser(){
  this.userService.getUserById(this.userId).subscribe(us=>{
    this.user=us;
  })
}
closeUpdate(){
  $('#updateModal').modal('hide');

}
confirmUpdate(){
  $('#updateModal').modal('show');
    }
    updateUser(){
this.userService.updateUser(this.userId , this.user).subscribe(updatedUser=>{
console.log("User Updated" , updatedUser); 
this.closeUpdate(); 
window.location.reload()
},error=>{
console.log(error)
})
    }
}
