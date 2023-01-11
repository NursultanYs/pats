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
        return x*pow2(x,n-1) //pow(2,2)=2 return 4  ; pow(2,1) return 2; pow(2,3) return 8
    }
}

console.log(pow2(2,3))


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

function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let total=0;
        for(let i=0;i<data.length;i++){
            total+=data[i].progress;
        }

        return [total,data.length]
    }else{
        let total=[0,0];

        for(let subData of Object.values(data)){
            const subDataArr=getTotalProgressByRecursion(subData);
            total[0]+=subDataArr[0];
            total[1]+=subDataArr[1];
        }
        return total
    }

}

const result=getTotalProgressByRecursion(students);
console.log((result[0]/result[1]))


function getTotal(data){
    let total=0;
    let students=0;

    for (const course of Object.values(data)) {
        if (Array.isArray(course)){
            students+=course.length;

            course.forEach(e=>{
                total+=e.progress
            })
        }else{
            for (const lvl of Object.values(course)) {
                students+=lvl.length
                lvl.forEach(e=>{
                    total+=e.progress
                })
            }
        }
        

    }

    return total/students;
}

console.log(getTotal(students))



function fact(a){
    if(a===1){
        return a;
    }else{
        return a*fact(a-1);
    }

}

console.log(fact(4))


function factorial(n) {
    if((typeof(n))!=='number' || !Number.isInteger(n)){return 'Err'}
    else if(n<=0){return 0}
    else if (n===1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

console.log(factorial(12))