import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.list.component.html',
  styleUrl: './user.list.component.css',
})
export class UserListComponent {
  users: any[]

  constructor (
    private userService: UserService
  ) {
    this.userService.getAllUsers()
      .subscribe(response => {
        this.users = [response];
      })

    console.log(this.users)
  }

  ngOnInit(): void {}
}
