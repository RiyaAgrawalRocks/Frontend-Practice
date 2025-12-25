function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}

// simulateAsyncTask();

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);
  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);
  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000);
  //   function task1() {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve("Task 1 finished");
  //       }, 1000);
  //     });
  //   }
  //   function task2() {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve("Task 2 finished");
  //       }, 2000);
  //     });
  //   }
  //   function task3() {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve("Task 3 finished");
  //       }, 3000);
  //     });
  //   }

  //   async function runTasks() {
  //     // console.log("Started to run functions");
  //       try {
  //         //   const [data1, data2, data3] = await Promise.all([
  //         //       task1(),
  //         //       task2(),
  //         //       task3()
  //         //   ])
  //         //   console.log(data1);
  //         //   console.log(data2);
  //         //   console.log(data3);

  //       console.log(await task1());
  //       console.log(await task2());
  //       console.log(await task3());

  //       //   console.log("Tasks over");
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //   }

  //   runTasks();
}

// simulateMultipleTasks();

function fetchDataWithCallback(callback) {
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 2000);
    });
  }
  async function useCallback() {
    await fetchData();
    callback("Fetched data");
  }
  useCallback();
}

// fetchDataWithCallback();
