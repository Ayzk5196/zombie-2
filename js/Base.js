class Base{
    constructor(x,y,width,height,color,isStatic){
        let options={
            isStatic:isStatic,
        } 
        this.body=  Bodies.rectangle(x,y,width,height,options)
        this.w=width
        this.h=height
        this.color=color
        World.add(world,this.body)
    }
    show(){
        let pos = this.body.position
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill(this.color)
        rect(0,0,this.w,this.h)
        pop()

    }

}