function pow(n, d){
    let sum=1
    let b=n
    for(let i=1;i<d;i++){
        n=n*b
        sum=n
    }
    return sum
}

console.log(pow(2,0))   

function pow2(x,n){
    let result = 1;

    for(let i=0;i<n;i++){
        result*=x;
    }
    return result
}


function pow2(x,n){
    if(n===1){
        return x;
    }else{
        return x*pow2(x,n-1)
    }
}

console.log(pow2(2,10))


let students={
    js:[{
        name:'John',
        progress:100
    },{
        name:'Ivan',
        progress:60
    }],

    html:{
        basic:[{
            name:'Peter',
            progress:20
        },{
            name:'Ann',
            progress:18
        }],
        pro:[{
            name:'Sam',
            progress:10
        }]
    }
}

function getTotal(data){
    let total=0;
    let students=0;

    return total/students;
}

console.log(getTotal(students))
