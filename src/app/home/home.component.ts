import { Component, Input } from '@angular/core';
import { User } from '../model/user.model';

declare var $:any ; //declaration variable jQuery
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
      id:1,nom:"Foulen 1",prenom:"Ben Foulen 1",statut:true},
      {id:2,nom:"Foulen 2",prenom:"Ben Foulen 2",statut:false},
      {id:3,nom:"Foulen 3",prenom:"Ben Foulen 3",statut:true},
      {id:4,nom:"Foulen 4",prenom:"Ben Foulen 4",statut:false},

  ]
  userClick(user:User){
    console.log("Clicked",user)
  }
 
}
