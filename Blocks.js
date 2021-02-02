class Blocks  {
    constructor(x,y)  {
        this.w=30;
        this.h=40;
        this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{isStatic:false});
        Matter.World.add(myWorld,this.body);
    }
    display()  {
        rectMode(CENTER);
        fill("rgb(110,200,250)")
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}