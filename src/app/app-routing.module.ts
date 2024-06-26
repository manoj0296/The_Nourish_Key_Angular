import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/login/user.login/user.login.component';
import { UserRegisterComponent } from './user/register/user.register/user.register.component';
import { HomeComponent } from './home/home/home.component';
import { UserListComponent } from './user/list/user.list/user.list.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
