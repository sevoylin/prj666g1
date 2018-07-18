import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewEventParticipantsPage } from './view-event-participants';

@NgModule({
  declarations: [
    ViewEventParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewEventParticipantsPage),
  ],
})
export class ViewEventParticipantsPageModule {}
