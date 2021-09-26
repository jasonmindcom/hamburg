import {Component, OnInit} from '@angular/core';
import {UiService} from "../../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from '@angular/router'

@Component({
  selector: 'app-tasks-header',
  templateUrl: './tasks-header.component.html',
  styleUrls: ['./tasks-header.component.css']
})
export class TasksHeaderComponent implements OnInit {
  public title: string = 'Hamburg - Task Tracker';
  public showAddTask!: boolean;
  private subscription!: Subscription

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => {
        this.showAddTask = value
      })
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {
  }
}
