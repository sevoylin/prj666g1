import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
//import { GoogleLoginComponent} from '../../components/google-login/google-login'; 
@NgModule({
  declarations: [
    RegisterPage,
   // GoogleLoginComponent
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    //GoogleLoginComponent,
  ],
})
export class RegisterPageModule {}
