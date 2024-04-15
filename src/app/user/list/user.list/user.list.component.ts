import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.list.component.html',
  styleUrl: './user.list.component.css',
})
export class UserListComponent {
  users = [];
  myData = "my data"

  constructor (
    private userService: UserService
  ) {
    this.userService.getAllUsers()
      .subscribe(response => {
        this.users = response['users'];
      })

    console.log(this.users)
  }

  ngOnInit(): void {}
}
