import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewEventParticipantsPage } from './view-event-participants';
import { ViewProfilePageModule } from '../view-profile/view-profile.module';


@NgModule({
  declarations: [
    ViewEventParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewEventParticipantsPage),
    ViewProfilePageModule
  ],
})
export class ViewEventParticipantsPageModule {}
