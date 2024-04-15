import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { LoginRequest } from '../../payload/login.request';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService
  ) {
    this.loginRequest = new LoginRequest();
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginRequest.username.length == 0) {
      this.toast.warning('enter valid username', 'Login')
    } else if (this.loginRequest.password.length == 0) {
      this.toast.warning('enter valid password', 'Login')
    } else {
      this.userService
        .loginUser(this.loginRequest)
        .subscribe(response => {
          console.log(response)
          if (response['message'] == 'Success') {
            this.toast.success('User logged in successfully !', 'Login')
            this.router.navigate(['/home'])
          } else {
            this.toast.error(response['error'])
          }
        })
    }
  }

  onKeydown(event) {
    if (event.key === "return") {
      if (this.loginRequest.username.length == 0) {
        this.toast.warning('enter valid username', 'Login')
      } else if (this.loginRequest.password.length == 0) {
        this.toast.warning('enter valid password', 'Login')
      } else {
        this.userService
          .loginUser(this.loginRequest)
          .subscribe(response => {
            console.log(response)
            if (response['message'] == 'Success') {
              this.toast.success('User logged in successfully !', 'Login')
              this.router.navigate(['/home'])
            } else {
              this.toast.error(response['error'])
            }
          })
      }
    }
  }
}
