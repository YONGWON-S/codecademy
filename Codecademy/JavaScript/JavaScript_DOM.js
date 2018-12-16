
document.body.innerHTML = 'This is the text of the body element'; //<!-- 이런 방식으로 html 문서에 접근할 수 있다. -->

document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016'; //<!-- 첫 h1요소에 접근한다. class와 id에 접근할 땐 . , #을 써서 접근할 수 있다. -->
document.getElementById('fourth').innerHTML = 'Fourth element'; //<!-- id 접근 방식 -->

document.querySelector('body').style.backgroundColor = 'red' //<!-- CSS 스타일에도 접근하는 법 -->

let newDestination = document.createElement("li"); // 새 구성요서 추가하기
newDestination.innerHTML = "Oaxaca, Mexico";
document.getElementById("more-destinations").appendChild(newDestination);

function turnButtonRed() {
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}
element.onclick = turnButtonRed; //버튼 클릭하면 변하는 명령어, 버튼함수에 ()가 안 붙은거에 눈여겨 보라.()가 붙으면 클릭 안해도 곧바로 실행된다.

let first = document.querySelector('body').firstChild; // 첫 child node에 접근
first.innerHTML = 'I am the child!';
first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!' //parent에 접근


// Event Handler //

// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let margo = document.getElementById('margo');

let open = function() {
  margo.style.display = 'block'; //보여준다
  close.style.display = 'block';
};

let hide = function() {
  margo.style.display = 'none'; //사라진다
  close.style.display = 'none';
};

let textChange = function() {
  view.innerHTML = 'Hello, World!';
}

let textReturn = function() {
  view.innerHTML = 'View';
}

view.onclick = open;
close.onclick = hide;
view.addEventListener('click', textChange); // The event type as a string
close.addEventListener('click', textReturn); //The event handler function

lock.addEventListener('click', function() {
  door.removeEventListener('click', openDoor); // 위와 반대로 함수를 무력화
})


//--------------------------------------------------------------------

let button = document.getElementById('color-button');
let mysteryButton = document.getElementById('next-button');

function rgb(num) {
  return Math.floor(Math.random() * num);
}
let colorChange = function(event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor; // 랜덤 컬로 추출기
}
button.onclick = colorChange;
mysteryButton.onwheel = colorChange; // 휠 이용 작동

// 마우스 이벤트 핸들러
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = 'none';
};
resetButton.onclick = reset;

itemOne.onmouseover = function() { // 마우스가 아이템 위로 갈 때 발생
  itemOne.style.width = '500px';
}
itemTwo.onmouseout = function() { // 마우스가 아이템을 떠나갈 때 발생
  itemTwo.style.backgroundColor = '#FF00FF';
}
itemThree.onmousedown = function() { // 마우스 버튼을 누를 때 발생
  itemThree.innerHTML = 'The mouse has left the element.';
}
itemFour.onmouseup = function() { // 마우스 버튼을 누르다가 올릴 때 발생
  itemFive.style.display = 'block';
}

// 키보드 이벤트 핸들러
let ball = document.getElementById('float-circle');

const up = () => {
  ball.style.bottom = '250px';
};
const down = () => {
  ball.style.bottom = '50px';
}
document.onkeydown = up; //키보드 누르고 있을 때 작동, 만약 document가 아닌 ball.onkeydown으로 하면 어떨까? 키보드는 마우스 같이 item 위로 이동이 불가능하기 때문에 여기선 브라우저 내 어디서든 키보드가 작동할 수 있도록 document를 사용했다.
document.onkeyup = down; // 키보드 뗄 때 작동,
