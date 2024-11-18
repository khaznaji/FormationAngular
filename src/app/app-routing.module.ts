import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoadingComponent } from './loading/loading.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent} ,
  {path:'sign-up' , component:SignUpComponent}, 
  {path:'loading' , component:LoadingComponent},
  {path:'**' , component:NotfoundComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
