import { Component, OnInit } from '@angular/core';
import { ChatService } from '../core/services/sockets/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  public massages: Array<String>;

  constructor(private chatService: ChatService) {
    this.massages = [];
    console.log();

  }

  ngOnInit(): void {
    this.chatService.getMessage().subscribe(
      data => this.massages = [...this.massages, data]
    )
  }

  submitMessage() {
    this.chatService.sendMessage("some text!!!!!!!!");
  }
}
