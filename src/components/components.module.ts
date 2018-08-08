import { NgModule } from '@angular/core';
import { GoogleLoginComponent } from './google-login/google-login';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [GoogleLoginComponent,
    GoogleLoginComponent],
	imports: [CommonModule, IonicPageModule],
	exports: [GoogleLoginComponent,
    GoogleLoginComponent]
})
export class ComponentsModule {}
