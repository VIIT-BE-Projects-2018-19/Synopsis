export class Message {
    content : string
    timestamp : Date
    avatar : string
    timestamp1 : string

    constructor(content :  string, avatar : string, timestamp? : Date, timestamp1? : string){
        this.content = content
        this.timestamp = timestamp
        this.avatar = avatar;
        this.timestamp1 = timestamp1
    }
}