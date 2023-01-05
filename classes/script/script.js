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


