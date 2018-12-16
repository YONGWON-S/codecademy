const source = document.getElementById('greet').innerHTML; //html의 head id에 위치하여 html 전체 문서에 적용된다는 신호
const template = Handlebars.compile(source);

const context = {
  greeting: 'Hello World!'
};

const compiledHtml = template(context); // To replace the Handlebars expressions with the values in context

const fill = document.getElementById('hello');

fill.innerHTML = compiledHtml; // 원하는 위치에 자기가 만든 compiledHtml를 걸어, 원할 때마다 문구 바꾸기. It's time to add the compiled template HTML to the web page. Assign compiledHtml to fill's innerHTML property.


/* HTML 문서  if/else 사용구
{{#if opinion}} // argument는 opinion
  <p>"The correct way to say 'GIF' is GIF!"</p>
{{else}}<p>"There's no right way to say GIF!"</p> // if 문구 사이에 들어갔다
{{/if}} */
//if에 해당하는 조건문
const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);
const context = {
  opinion: true // 여기에 ; 가 붙지 않는다는 걸 주의하라!
};
const compiledHtml = template(context);
const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;

/* html 문서 // each 사용구
<script id="eachHelper" type="text/x-handlebars-template">
{{#each newArray}} // array를 적용할 때 사용
<div class='block'>{{this}}
</div>
{{/each}}
</script> */

const source = document.getElementById('eachHelper').innerHTML;
const template = Handlebars.compile(source);
const context = {
  newArray: [1,2,3,4,5,6,7,8,9,10] // array에 주목하라
};
const compiledHtml = template(context);
const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;

/*html 문서 //this 사용 응용
<script id="languagesTemp" type="text/x-handlebars-template">
{{#each languages}}
<div class="card">
  <p>I should learn {{this.name}}.</p>
</div>
{{/each}}
</script> */

const context = {
  languages: [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JavaScript'}
  ]
};

/* html 문서, if each 혼합 응용
<script id="languagesTemp" type="text/x-handlebars-template">
  {{#each languages}}
    <div class="card">
      {{#if this.modern}}
        <p>I should learn {{this.name}}.</p>
      {{else}}<p>When I have time, I'll learn {{this.name}}.</p> //else 구문 추가
      {{/if}}
    </div>
  {{/each}}
</script> */

const context = {
  languages: [
    {
      name: 'HTML',
      modern: true
    },
    {
      name: 'CSS',
      modern: false // CSS는 나타나지 않는다!!
    }
  ]
};
