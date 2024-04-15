import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../user/user.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private userService: UserService) {}

  ngOnInit(): void {}

  onLogOut() {
    this.userService.
      logoutUser().
      subscribe(response => {
        console.log(response)
        if(response['message'] = "You've been signed out!") {
          this.toast.success('Log out successfully !', 'Login')
          this.router.navigate(['/user-login'])
        } else {
          this.toast.error('Error occurred')
        }
      })
  }
}
