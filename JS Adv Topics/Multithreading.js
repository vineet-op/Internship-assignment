//*NOTE

/* Javascript is an loosely type and single threaded language.
So it doest not support multithreading, but we can achieve similar by using inbuilt 
JS features such as Async And Await 
*/

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayMSG() {
  console.log("Start");
  await delay(3000).then(() => console.log("Promise Resolved"));
  console.log("After 3 seconds");
}

delayMSG();
