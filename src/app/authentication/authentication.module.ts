import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './authentication.routing'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
})
export class AuthenticationModule { }
