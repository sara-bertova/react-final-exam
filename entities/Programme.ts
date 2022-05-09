export class Degree {

    constructor(
        public title: string,
        public categories: Category[],   
        public id?: string) {}
}

export class Category {

    constructor(
        public title: string,  
        public programmes: Programme[],
        public id?: string) {}
}

export class Programme {

    constructor(
        public title: string,  
        public id?: string) {}
}