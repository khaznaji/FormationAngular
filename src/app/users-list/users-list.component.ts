import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { error } from 'logrocket';
import { Router } from '@angular/router';
declare var $:any ; //declaration variable jQuery

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor( private userService : UserService , private router :  Router)
{}
  users:User[]=[];
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(listUsers=>{
      this.users=listUsers;
    }

    )
  }
  delete(id:number){
this.userService.deleteUser(id).subscribe(()=>{
  console.log("user deleted")
  window.location.reload()
}, error=>{
  console.error(error)
})
  }
  /********************* */
  closeDelete(){
    $('#deleteModal').modal('hide');

  }
  userTodelete!:User
  Confirmdelete(user : User){
    $('#deleteModal').modal('show');
    this.userTodelete=user
      }
      deleteUser(){
this.userService.deleteUser(this.userTodelete.id).subscribe(()=>{
  console.log("User Deleted"); 
this.closeDelete()

},error=>{
  console.log(error)
})
      }

      updateUser(id:number){
this.router.navigate(['/update', id])
      }
}
