async function myFunc() { // async는 언제나 promise를 반환한다.
  // Function body here
};
myFunc();

//아니면

const myFunc = async () => {
  // Function body here
};
myFunc();


async function fivePromise() {  // 아니면 const fivePromise = async () => {}
  return 5;
}
fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

  // 5가 log되지만 단순 5가 아니라 promise를 동반한 5가 반환된 것이다.




  function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}
// -> 위와 async 로 생략된 형태와 비교하자
const withAsync = async (num) => {
  if (num===0) {
  return 'zero';
  } else {
    return 'not zero';
  }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})




// The await keyword can only be used inside an asyncfunction. await is an operator: it returns the resolved value of a promise.
//Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
      console.log(`I'm going to make ${meal} for dinner.`);
  })
}

// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}
announceDinner();


//await를 사용 안 하면..
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> } myPromise의 setTimeout이 1초가 걸리지만 nowait는 promise가 완료되기 전에 값을 내려고 해 pending이 나온다.
yesAwait(); // Prints: Yay, I resolved!


//await의 편의성
function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}
//위가 아래처럼 심플하게 변한다
async function asyncAwaitVersion() {
 let firstValue = await returnsFirstPromise();
 console.log(firstValue);
 let secondValue = await returnsSecondPromise(firstValue);
 console.log(secondValue);
}



// try catch를 이용한 error handling
async function hostDinnerParty () {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
	} catch(error) {
    console.log(error)
    console.log('Ordering a pizza!');
  }
}
hostDinnerParty();

// 한꺼번에 await 사용하기
async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log (`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
} // 여기서 await를 지운 항목은 pending으로 나온다.
serveDinner();

// promise.all을 이용한 await
//Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, meaning it won't wait for the rest of the asynchronous actions to complete once any one has rejected. As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason.
async function serveDinnerAgain () {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()])
  let vege = foodArray[0];
  let star = foodArray[1];
  let chic = foodArray[2];
  let bean = foodArray[3];
  console.log(`Dinner is served. We're having ${vege}, ${star}, ${chic}, and ${bean}.`)
}
serveDinnerAgain();
