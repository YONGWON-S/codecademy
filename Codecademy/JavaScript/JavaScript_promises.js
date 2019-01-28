console.log("This is the first line code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = () => {
  console.log('Whatever')
}

setTimeout(usingSTO, 3000) // 위 아래 console 실행을 합해 최소 3초 이후 실행

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");


const inventory = {
  sunglasses: 1890,
  pants: 1088,
  bags: 1344
};
const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]); // ?? 이게 무슨 의미지??
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    });
};
module.exports = {checkInventory};

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 0], ['bags', 4]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order).then(handleSuccess).catch(handleFailure) // checkInventory(order)까지만 하고 node app.js로 실행하면 pending으로 결과가 나타난다. catch는 failure에 해당하는 then를 반환한다. error handling 쓰인다고 보면 된다.


// Promise.all() accepts an array of promises as its argument and returns a single promise.

const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};
// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
}


const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');
Promise.all([checkSunglasses, checkPants, checkBags]).then(onFulfill).catch(onReject) // promise all은 각종 promise들을 array로 받고 전체가 true인지 아닌지 판단해 반환한다.
