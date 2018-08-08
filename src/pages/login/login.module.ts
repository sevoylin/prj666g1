import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPageModule } from '../register/register.module';
import { ResetPageModule } from '../reset/reset.module';
import { LoginPage } from './login';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    RegisterPageModule,
    ResetPageModule,
    CommonModule
  ],
})
export class LoginPageModule {}
