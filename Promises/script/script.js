console.log("Запрос данных...")

const req=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Подготовка...")
        const product={
            name: "Tv",
            price: 2000
        }
    
        resolve(product);
    },2000);
});

req.then((product)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product.status="ordered";
            resolve(product);
            reject();
        },2000);   
    }).then(data=>{
        data.modify='true';
        return data;
    }).then((data)=>{
        console.log(data);
    }).catch(()=>{
        console.log("Err")
    }).finally(()=>{
        console.log('finally')
    })
})

const test=time =>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),time)
    })
}

// test(1000).then(()=>console.log('1000 ms'))
// test(2000).then(()=>console.log('2000 ms'))

Promise.all([test(1000),test(2000)]).then(()=>{
    console.log('All')
});

Promise.race([test(1000),test(2000)]).then(()=>{
    console.log('All')
});


setTimeout(()=>{
    console.log(1)
},2000);
setTimeout(()=>{
    console.log(2)
},2000);


const prom=new Promise(function(resolve,reject){
    obj={
        first:1
    }
    resolve(obj);
}).then((obj)=>{
    console.log(obj);
})

prom.then((obj)=>{
    return new Promise((resolve,reject)=>{
        obj.second=2;
        resolve(obj);
    }).then((obj)=>{
        return obj;
    }).then(obj=>{
        obj.third=3;
        return obj
    }).then(obj=>{
        console.log(obj)
    })
})
