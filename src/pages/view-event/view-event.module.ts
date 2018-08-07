import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewEventPage } from './view-event';
import { EditEventPageModule } from '../edit-event/edit-event.module';
import { ChatPageModule } from '../chat/chat.module';
import { ViewEventParticipantsPageModule } from '../view-event-participants/view-event-participants.module';
import { QrCodePageModule } from '../qr-code/qr-code.module';

@NgModule({
  declarations: [
    ViewEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewEventPage),
    EditEventPageModule,
    ViewEventParticipantsPageModule,
    ChatPageModule,
    QrCodePageModule
  ],
})
export class ViewEventPageModule {}
