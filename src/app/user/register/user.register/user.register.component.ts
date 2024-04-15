import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { RegisterRequest } from '../../payload/register.request';
import { ToastrService } from 'ngx-toastr';

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
    private userService: UserService,
    private toast: ToastrService
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
      this.toast.warning('enter valid username', 'Registration')
    } else if (this.registerRequest.email.length == 0) {
      this.toast.warning('enter valid email', 'Registration')
    } else if (this.registerRequest.password.length == 0) {
      this.toast.warning('enter valid password', 'Registration')
    } else {
      this.userService
        .registerUser(this.registerRequest)
        .subscribe(response => {
          console.log(response)
          if (response['message'] == 'User registered successfully!') {
            this.toast.success('User registered successfully !', 'Registration')
            this.router.navigate(['/user-login'])
          } else {
            alert(response['error'])
          }
        })
    }
  }
}
