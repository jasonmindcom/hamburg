import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users: User[] = [];

  public email: string | undefined;
  public password: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => (this.users = users),
      () => {},
      () => this.setNotification());
  }

  setNotification(){
    console.log('setNotification')
  }

  login(){
    console.log('login')
  }

}
