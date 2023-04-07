import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { ChatRoomSocket } from './chatRoomSocket';

@Injectable()
export class ChatService {

  constructor(private socket: ChatRoomSocket, private chatRoomName: String) {
    this.socket.on('connect', () => {
      console.log(`You have connected to chatroom: ${this.socket.ioSocket.id}`);
      this.socket.ioSocket.join(this.chatRoomName);
      return this.socket.ioSocket.id;
    })
  }

  sendMessage(message: string) {
    this.socket.ioSocket.to(this.chatRoomName).emit('message-form-client', message);
    // this.socket.emit('message-form-client', message);
  }

  getMessage() {
    return this.socket.fromEvent('message-from-server').pipe(map((data: any) => data));
  }

}