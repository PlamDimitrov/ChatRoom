import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../core/services/sockets/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  // private roomName: String;
  public massages: Array<String>;

  constructor(private chatService: ChatService, private router: ActivatedRoute) {
    // this.roomName = router.snapshot.paramMap.get('chatRoomName') || '';
    console.log(router.snapshot.paramMap.get('chatRoomName'));

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
