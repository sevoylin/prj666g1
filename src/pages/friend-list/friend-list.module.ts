import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFriendPageModule } from '../add-friend/add-friend.module';
import { FriendListPage } from './friend-list';

@NgModule({
  declarations: [
    FriendListPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendListPage),
    AddFriendPageModule
  ],
})
export class FriendListPageModule {}
