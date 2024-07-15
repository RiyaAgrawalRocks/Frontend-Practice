//    2nd parameter of fetch is a object

const jokeObject={
    id: '1oOfFlOfaxc',
    joke: 'What do you do on a remote island? Try and find the TV island it belongs to.'
  }

const postData = async(jokeObj) =>{

    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse=await response.json();

    console.log(jsonResponse);
}

postData(jokeObject);

