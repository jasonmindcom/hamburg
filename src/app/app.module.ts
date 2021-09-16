import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';

import {
  TasksModule
} from './components/tasks';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]

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
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
