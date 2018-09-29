import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-msg-form',
  templateUrl: './msg-form.component.html',
  styleUrls: ['./msg-form.component.css']
})
export class MsgFormComponent implements OnInit {
  timestamp1 : string
  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];
  constructor() { }

  ngOnInit() {
  }
    public sendMessage() : void {
      this.message.timestamp = new Date();
      this.timestamp1 = this.message.timestamp.toUTCString();
      this.messages.push(this.message );

      this.message = new Message('' , 'assets/images/user.png');
    }

}
