export class Location {
    constructor(
        public id: number,
        public name: string,
        public type: string,
        public dimension: string,
        public residents: Array<string>,
        public url: string,
        public created: string
    ){}
}