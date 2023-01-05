let sum='';
const length=7;

for(let i=1;i<length;i++){
    for(let j=0;j<i;j++){
        sum+='*'
    }
    sum += '\n'
}

console.log(sum);

first: for(let i=0;i<3;i++){
    console.log(`First level: ${i}`)
    for(let j=0;j<3;j++){
        console.log(`First level: ${j}`)
        for(let k=0;k<3;k++){
            if (k===2) continue first
            console.log(`First level:${k}`)
        }
    }
}

first: for(let i=0;i<3;i++){
    console.log(`First level: ${i}`)
    for(let j=0;j<3;j++){
        console.log(`First level: ${j}`)
        for(let k=0;k<3;k++){
            if (k===2) break first
            console.log(`First level:${k}`)
        }
    }
}