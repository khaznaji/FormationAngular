import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user.model';

declare var $:any ; //declaration variable jQuery
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser!:User
  ngOnInit(): void {
    this.currentUser=JSON.parse(localStorage.getItem('user')!)
    
  }
  title = 'Bienvenue sur mon application Angular!';
  changeTitle() {
    this.title = 'Le titre a changé!';
  }
  count = 0;
  increment() {
    this.count++;
  }
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  today = new Date();
  confirmDelete(){
$('#deleteModal').modal('show');
  }
  closeDelete(){
    $('#deleteModal').modal('hide');

  }
  DeleteItem(){
  //  const email:string="9antra@gmail.com"
    console.log("Item Deleted",this.title)
    // console.log("Show Email",email)

    this.closeDelete()
  }
  users:User[]=[
    {
      id:1,firstname:"Foulen 1",lastname:"Ben Foulen 1",username:"Hey 1" ,address:"address 1", email:"user1@gmail.com", password:"password1"}, 
      {
        id:2,firstname:"Foulen 2",lastname:"Ben Foulen 2",username:"Hey 2" ,address:"address 2", email:"user2@gmail.com", password:"password2"},   {
          id:3,firstname:"Foulen 3",lastname:"Ben Foulen 3",username:"Hey 3" ,address:"address 3", email:"user3@gmail.com", password:"password3"}, 

  ]
  userClick(user:User){
    console.log("Clicked",user)
  }
 
}
