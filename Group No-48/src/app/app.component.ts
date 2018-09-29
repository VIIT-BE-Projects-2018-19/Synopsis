import { Component } from '@angular/core';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];
  public messages1 : Message[];

  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to the messanger', 'assets/images/server.png', new Date())
    ];
    // this.messages1 = [
    //   new Message('', 'assets/images/user.png')
    // ];
  }
}
