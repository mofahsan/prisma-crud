


let x=async()=>{
    return await 2+3
}
// x().then((res)=>{
//     console.log(res)
// })

array=[1,2,3,4,5]
let u=async()=>{
    let y=await Promise.allSettled(array.map(async(element)=>{
        return element
    }))
    console.log(y)
}

const promise1  = new Promise ((resolve,reject)=>{
    setTimeout(() => {
             console.log("promise 1 code is running")
            reject("promise 1 was resolved")
    }, 500);
})

const promise2  = new Promise ((resolve,reject)=>{
    setTimeout(() => {
              console.log("promise 2 code running")
            reject("promise 2 was resolved")
    }, 200);
})

const promise3  = new Promise ((resolve,reject)=>{
    setTimeout(() => {
            reject("promise 3 was resolved")
    }, 100);
})

Promise.race([promise1,promise2,promise3]).then(value=>{
    console.log(value)
}).catch(reason=>{
    console.log(reason,"is the reason")
})

