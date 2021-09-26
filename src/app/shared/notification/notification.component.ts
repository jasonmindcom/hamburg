import { Component, OnInit } from '@angular/core';
import {faBell, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public faBell = faBell;
  public faTimes = faTimes;
  public visibility: boolean = true;
  public notificationName: string = 'Example notification';
  public notificationText: string = 'Pellentesque lacinia cursus magna et sollicitudin. Maecenas pellentesque ex metus, posuere molestie quam lobortis a.';

  constructor() {
  }

  ngOnInit(): void {
  }
}
