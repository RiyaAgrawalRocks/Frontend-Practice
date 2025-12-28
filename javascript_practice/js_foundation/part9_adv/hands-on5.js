// Task 1
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  console.log(user);
  console.log(posts);
}

// Task 2
function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve("Fetched successfully");
    }, 1000);
  });
}

function fetchFailure() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Error occurred");
      }, 1000);
    });
}

async function handlePromises() {
    try {
        const [res1, res2] = await Promise.all([
            fetchSuccess(),
            fetchFailure()
      ])
  } catch (error) {
    console.log('Error occurred');
  }
}

// Task 3
function fetchWithTimeout(promise, timeout) {
    const timer = new Promise((resolve, reject) => {
        setTimeout(() => {
               reject('Timeout exceeded') 
            }, timeout);
    })
        return Promise.race([promise, timer])
}

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 3000)
  );
}
