import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './authentication.routing'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
})
export class AuthenticationModule { }
