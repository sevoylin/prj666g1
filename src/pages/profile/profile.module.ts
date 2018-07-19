import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { EditProfilePageModule } from '../edit-profile/edit-profile.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    EditProfilePageModule
  ],
})
export class ProfilePageModule {}
