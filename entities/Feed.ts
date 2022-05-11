export class Event {

    constructor(
        public title: string, 
        public description: string, 
        public img: string, 
        public organizer: string, 
        public place: string, 
        public time: string, 
        public email: string, 
        public schedule: [], 
        public id?: string) {}
}

export class Post {

    constructor(
        public title: string, 
        public description: string, 
        public img: string, 
        public organizer: string, 
        public time: string, 
        public comments: [], 
        public likes: number,
        public id?: string) {}
}

export class Comment {
    constructor(public text: string, public timestamp: Date, public userid: string) {}
}