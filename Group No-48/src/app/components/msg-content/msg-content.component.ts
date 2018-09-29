import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-msg-content',
  templateUrl: './msg-content.component.html',
  styleUrls: ['./msg-content.component.css']
})
export class MsgContentComponent implements OnInit {

  @Input('message')
  private message: Message;
  
  constructor() { }

  ngOnInit() {
  }

}
