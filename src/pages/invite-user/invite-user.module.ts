import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteUserPage } from './invite-user';

@NgModule({
  declarations: [
    InviteUserPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteUserPage),
  ],
})
export class InviteUserPageModule {}
