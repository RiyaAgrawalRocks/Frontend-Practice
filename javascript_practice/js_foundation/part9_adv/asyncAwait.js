function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name: 'Riya', url: 'www.riya.com'})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log('Fetching user data...');
        const userData = await fetchUserData()
        console.log("User data: ", userData);
    } catch (error) {
        console.log('Error fetching data', error);
            
    }
}

getUserData()