
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
