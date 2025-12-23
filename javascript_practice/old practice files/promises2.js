const myPromise=new Promise((resolve, reject)=>{
    const error=false;
    if(!error){
        resolve("Yes! Resolved the Promise");
    }
    else
    {
        reject("No! Rejected the promise");
    }
    })

    const myNextPromise = new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("MyNextPromise resolved!");
        }, 3000);
    });

    myNextPromise.then(value =>{
        console.log(value);
    });

    myPromise.then(value =>{
        console.log(value);
    });