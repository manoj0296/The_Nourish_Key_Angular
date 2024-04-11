import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { RegisterRequest } from '../../payload/register.request';

@Component({
  selector: 'app-user-register',
  templateUrl: './user.register.component.html',
  styleUrl: './user.register.component.css'
})
export class UserRegisterComponent {

  roles = [];
  role_name = "";

  registerRequest: RegisterRequest;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.registerRequest = new RegisterRequest();

    this.userService.getUserRoles().subscribe(response => {
      if(response['message'] == 'Success') {
          this.roles = response['roles']
          this.role_name = this.roles[0].id
      } else {
          console.log(response['error'])
      }
  })
  }

  ngOnInit(): void {}

  onRegistration() {
    if (this.registerRequest.username.length == 0) {
      alert('enter valid username')
    } else if (this.registerRequest.email.length == 0) {
      alert('enter valid email')
    } else if (this.registerRequest.password.length == 0) {
      alert('enter valid password')
    } else {
      this.userService
        .registerUser(this.registerRequest)
        .subscribe(response => {
          console.log(response)
          if (response['message'] == 'User registered successfully!') {
            alert('User registered successfully !')
            this.router.navigate(['/user-login'])
          } else {
            alert(response['error'])
          }
        })
    }
  }
}
