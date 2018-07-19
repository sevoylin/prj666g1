import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { EditProfilePageModule } from '../edit-profile/edit-profile.module';
import { QrCodePageModule } from '../qr-code/qr-code.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    EditProfilePageModule,
    QrCodePageModule
  ],
})
export class ProfilePageModule {}
