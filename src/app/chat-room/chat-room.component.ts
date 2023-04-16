import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../core/services/sockets/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  private roomName!: string;
  public massages: Array<String>;

  constructor(private chatService: ChatService, private route: ActivatedRoute) {
    console.log('chatroom name from chatroom component', route.snapshot.paramMap.get('chatRoomName'));
    this.massages = [];
  }

  ngOnInit(): void {
    this.roomName = this.route.snapshot.paramMap.get('chatRoomName') || 'sdfsfd';
    this.chatService.connectToRoom(this.roomName);
    // this.chatService.getMessage(this.roomName).subscribe(
    //   data => {
    //     this.massages = [...this.massages, data]
    //     console.log(data);

    //   }
    // )
    this.chatService.getMessage(this.roomName);
  }

  submitMessage() {
    this.chatService.sendMessage(this.roomName, "some text!!!!!!!!");
  }
}
