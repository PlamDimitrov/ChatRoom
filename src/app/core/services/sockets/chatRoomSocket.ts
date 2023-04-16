import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

@Injectable()
export class ChatRoomSocket extends Socket {
  constructor() {
    super({ url: `${environment.SOCKET_URL}`, options: {} });
  }
}