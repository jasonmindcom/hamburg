import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { routing } from './app.routing'


import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';

import {
  TasksModule
} from './components/tasks';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    TasksModule,
    routing,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
