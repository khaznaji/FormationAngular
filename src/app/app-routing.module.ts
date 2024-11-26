import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoadingComponent } from './loading/loading.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},

  {path:'home' , component:HomeComponent} ,
  {path:'listUsers' , component:UsersListComponent} ,
  {path:'addUser' , component:AddUserComponent} ,
  {path:'login' , component:LoginComponent} ,

  {path:'sign-up' , component:SignUpComponent}, 
  {path:'loading' , component:LoadingComponent},

  {path:'listUsers' , component:UsersListComponent} ,
  {path:'addUser' , component:AddUserComponent} ,
  {path:'update/:id' , component:UpdateUserComponent  } ,

  {path:'login' , component:LoginComponent} ,


  {path:'**' , component:NotfoundComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
