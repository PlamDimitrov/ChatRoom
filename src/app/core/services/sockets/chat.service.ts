import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { ChatRoomSocket } from './chatRoomSocket';

@Injectable()
export class ChatService {
  private socket: Socket;


  constructor(private io: ChatRoomSocket) {
    this.socket = io.connect();
  }

  connectToRoom(roomName: string | null) {
    this.socket.emit('create', roomName);
  }

  sendMessage(roomName: string | null, message: string) {
    // this.io.ioSocket.to(roomName).emit('message-form-client', message);
    this.socket.emit('message-form-client', { roomName, message })
  }


  getMessage(roomName: string | null) {
    // return this.socket.on('message-from-server', (message: string) => {
    //   console.log(message);
    // })
    this.socket.on('message-from-server', (data: any) => {
      console.log(data);
    })
    // this.socket.fromEvent('message-from-server').subscribe(data => console.log(data))
    // return this.io.fromEvent('message-from-server').pipe(map((data: any) => data));
  }

}