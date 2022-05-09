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
        public id?: string) {}
}