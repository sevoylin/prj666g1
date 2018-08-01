import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFriendPageModule } from '../add-friend/add-friend.module';
import { ViewProfilePageModule } from '../view-profile/view-profile.module';
import { ChatPageModule } from '../chat/chat.module';
import { FriendListPage } from './friend-list';

@NgModule({
  declarations: [
    FriendListPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendListPage),
    AddFriendPageModule,
    ViewProfilePageModule,
    ChatPageModule
  ],
})
export class FriendListPageModule {}
