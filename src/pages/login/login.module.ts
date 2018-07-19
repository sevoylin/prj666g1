import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPageModule } from '../register/register.module';
import { ResetPageModule } from '../reset/reset.module';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    RegisterPageModule,
    ResetPageModule
  ],
})
export class LoginPageModule {}
