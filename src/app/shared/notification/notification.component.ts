import { Component, OnInit } from '@angular/core';
import {faBell, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  faBell = faBell;
  faTimes = faTimes;
  visibility: boolean = true;
  notificationName: string = 'Example notification';
  notificationText: string = 'Pellentesque lacinia cursus magna et sollicitudin. Maecenas pellentesque ex metus, posuere molestie quam lobortis a.';

  constructor() {
  }

  ngOnInit(): void {
  }
}
