class Animal {
    public name: string;
    public weight: number;

    constructor(name:string, weight: number){
        this.name = name;
        this.weight = weight;
    }
}

const lulu = new Animal('Cat', 7);


class Narval extends Animal{
    
    constructor(length: number){
        super('Gerard', 400);
    }
}
const gerard = new Narval(70);
class Viewer{

    viewable:any;

    view(thing:any){
        this.viewable = thing;
    }
}

let viewer = new Viewer();
viewer.view(lulu);
console.log(viewer);

const lorem = `
    This
     is on multiline
    <html>
    <div>
${gerard.name}
</div>
    </html>
    `;

