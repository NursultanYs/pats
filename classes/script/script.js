'use strict';

class Comment {
    constructor(text){
        this.text=text
        this.votesQty=0
    }
    upvote(){
        this.votesQty+=1
    }
    static mergeComments(first,second){
        return `${first} ${second}` 
    }
}

console.log(Comment.mergeComments('first', 'second'))

const firstComment=new Comment ('First comment')
const secondComment=new Comment ('Second comment')

firstComment instanceof Comment 
firstComment instanceof Object 

firstComment.upvote();
firstComment.upvote();

console.log(firstComment.text);
console.log(firstComment.votesQty)
console.log(secondComment.text)



class NumbersArray extends Array {
    sum(){return this.reduce((el,acc)=>acc+el,0)}
}

const array=new NumbersArray(2,5,7);
console.log(array.sum());

console.dir(array.__proto__)



class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }

    calcArea(){
        return this.height*this.width;
    }
}

class coloredRectangleWithText extends Rectangle{
    constructor(height,width,text,bgColor){
        super(height,width);
        this.text=text;
        this.bgColor=bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div=new coloredRectangleWithText(25,10,'Hello World','red');
console.log(div.calcArea());


const square = new Rectangle(10,20);
const long = new Rectangle(20,100);

console.log(long.calcArea());
console.log(square.calcArea());

