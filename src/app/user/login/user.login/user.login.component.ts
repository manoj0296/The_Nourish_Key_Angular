import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { LoginRequest } from '../../payload/login.request';

@Component({
  selector: 'app-user-login',
  templateUrl: './user.login.component.html',
  styleUrl: './user.login.component.css'
})
export class UserLoginComponent {

  loginRequest: LoginRequest;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {
    this.loginRequest = new LoginRequest();
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginRequest.username.length == 0) {
      alert('enter valid username')
    } else if (this.loginRequest.password.length == 0) {
      alert('enter valid password')
    } else {
      this.userService
        .loginUser(this.loginRequest)
        .subscribe(response => {
          console.log(response)
          if (response['message'] == 'Success') {
            alert('User logged in successfully !')
            this.router.navigate(['/user-login'])
          } else {
            alert(response['error'])
          }
        })
    }
  }
}
