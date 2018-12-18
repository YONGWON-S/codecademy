// HTML 문서 </ㅠbody> 끝나기 전에 아래 명령어를 넣는다. integrity와 crossorigin은 third 파티의 조작이 없게 옵션을 넣는다.
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>


$(document).ready(() => { // jquery가 html의 문서가 다 불러질 때까지 대기한다.
  const $menuButton = $('.menu-button'); // jquery 변수 지정은 앞에 $ 붙인다.
  const $navDropdown = $('#nav-dropdown');
  $menuButton.on('click', () => { // 반응형 method를 부를 땐 on() 사용
    $navDropdown.show();
  })
});

$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');
  $menuButton.on('click', () => {
    $navDropdown.show();
  })
})
