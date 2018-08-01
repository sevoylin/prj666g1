import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageEventPage } from './manage-event';
import { ViewEventPageModule } from '../view-event/view-event.module';
import { JoinEventPageModule } from '../join-event/join-event.module';
import { ChatPageModule } from '../chat/chat.module';

@NgModule({
  declarations: [
    ManageEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageEventPage),
    ViewEventPageModule,
    JoinEventPageModule,
    ChatPageModule
  ],
})
export class ManageEventPageModule {}
