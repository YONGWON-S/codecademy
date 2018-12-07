
document.body.innerHTML = 'This is the text of the body element'; //<!-- 이런 방식으로 html 문서에 접근할 수 있다. -->

document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016'; //<!-- 첫 h1요소에 접근한다. class와 id에 접근할 땐 . , #을 써서 접근할 수 있다. -->
document.getElementById('fourth').innerHTML = 'Fourth element'; //<!-- id 접근 방식 -->

document.querySelector('body').style.backgroundColor = 'red' //<!-- CSS 스타일에도 접근하는 법 -->
