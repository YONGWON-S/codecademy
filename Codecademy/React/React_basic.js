const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
}; // react library에선 javascript내에서 html 요소들이 쓰일 수 있다. 대신 compilie 과정이 필요하다


const myDiv = (
  <div className="big"> // HTML의 class를 지정할 땐 class가 아니라 className이다
      <h1>
          Hello world
      </h1>
  </div>
) // nested 구조를 사용할 땐 ()를 사용하자

// !!! () 안의 opening tag와 closing tag는 반드시 동일하게 묶어줘야 한다
<img src="images/jenkins.png" /> // single tag들은 closing tag가 없기 때문에 끝에 /를 꼭 넣어줘야 한다

// 리액트 코드 rendering 명령어
ReactDOM.render(
  <h1>
  	Render me!
  </h1>,
  document.getElementById('app')
)

ReactDOM.render(
  <h1>
      myDiv //위의 변수를 이렇게 입력할 수 있다
  </h1>,
  document.getElementById('app')
)

ReactDOM.render(
    <h1>{2 + 3}</h1>, //javascript처럼 반응해 5 산출
    <h1>2 + 3</h1>, // html처럼 반응해 2+3 print
  document.getElementById('app')
)

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};
const panda = (
  <img
    src={pics.panda} //외부의 변수와 그 오브젝트를 끌어다 쓸 수 있다.
    alt="Lazy Panda" />
);


function makeDoggy(e) { //꽤 유용한 함수니까 참고!
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}
const kitty = (
	<img
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
		alt="kitty" onClick={makeDoggy}/> // DOM에서 배운 event handler 활용
);
ReactDOM.render(kitty, document.getElementById('app'));

if (coinToss() === 'heads') { //조건문은 JSX안에 넣지 못한다 대신 밖에서 쓴 후 실행하게 할 수 있다.
  img = (
    <img src={pics.kitty} />
)
} else {
  img = (
    <img src={pics.doggy} />
)
}

const img = <img src={coinToss() == 'heads' ? pics.kitty : pics.doggy} />; // if 구문을 못 넣는 대신에 이렇게 활용할 수 있다

const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map((person, i) => //map 함수는 꽤 유용하니 익혀놓자!
<li key={'person_' + i}>{person}</li> // key는 html의 id같은 존재다. 값들을 shuffle하거나 기억할 필요가 있을 때 써보
);
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
)

const greatestDivEver = React.createElement( 
	"div",
  null,
  "i am div"
);
const greatestDivEver = <div>i am div</div>; //위와 아래는 같다
