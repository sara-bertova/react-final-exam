export class Chatroom {
    constructor(public title: string, public chatmessages: Chatmessage[], public imageUrl: string, public id?: string) {}
}

export class Chatmessage {
    constructor(public text: string, public timestamp: Date) {}
}