import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-msg-displist',
  templateUrl: './msg-displist.component.html',
  styleUrls: ['./msg-displist.component.css']
})
export class MsgDisplistComponent implements OnInit {

  @Input('messages')
  private messages : Message[];
  constructor() { }

  ngOnInit() {
  }

}
