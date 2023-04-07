import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInUserGuard } from './core/guards/logged-in-user.guard';
import { JoinOrCreateComponent } from './join-or-create/join-or-create/join-or-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./login-register/login-register.module').then(m => m.LoginRegisterModule)
  },
  {
    path: 'join-or-create',
    canActivate: [LoggedInUserGuard],
    component: JoinOrCreateComponent
  },
  {
    path: 'chatroom/:chatRoomName',
    loadChildren: () => import('./chat-room/chat-room.module').then(m => m.ChatRoomModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
