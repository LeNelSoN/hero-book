import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginPresenterComponent } from './components/login-presenter/login-presenter.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginPresenterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [

  ]
})
export class AuthModule { }
