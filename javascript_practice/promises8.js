//    2nd parameter of fetch is a object
//abstract into func
//maybe from a form

const getDataFromForm = () => {
    const requestObj={
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl= (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async(url) =>{

    const response = await fetch(url);
    const jsonResponse=await response.json();
    const joke=jsonResponse.value.joke;
    console.log(joke);
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

//procedural "workflow" func
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();