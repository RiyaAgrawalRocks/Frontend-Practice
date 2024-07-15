//fetch API requires a discussion of...
//Callbacks, Promises, Thenables, and Async/Await

//Callbacks




/*
function firstFunction(parameter, callback){
    //do stuff
    callback();
}

//aka "callback hell"
firstFunction(para, function(){
    //do stuff
    secondFunction(para, function(){
        thirdFunction(para, function(){
                
        });
    });
});
*/





/*
=============================
Promises
=============================
*/
//Promises
//3 states: Pending, Fulfilled, Rejected

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

console.log(myPromise);


myPromise.then(value => {
    return value+1;
})
.then(newValue =>{
    console.log(newValue);
} )
.catch(err =>{
    console.error(err);
} )



