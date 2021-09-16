import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker'
  mobileMenu: boolean = false;
  menu = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
