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
  $navDropdown.on('mouseleave', () => {
  $navDropdown.hide();
})
});

// interactive $menuButton
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  });
  $('.show-button').on('click', () => {
    $('.first-image').show();
  });
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle(); //toggle은 hide와 show 둘 다 가능케 한다.
  });
  $('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
  });
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  $('.fade-toggle-button').on('click', () => {
    $('.fade-image').fadeToggle();
  });
  $('.up-button').on('click', () => {
		$('.slide-image').slideUp(100);
  });
  $('.down-button').on('click', () => {
    $('.slide-image').slideDown('slow');
  });
  $('.slide-toggle-button').on('click', () => {
    $('.slide-image').slideToggle();
  });
});


$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  $('.product-photo').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('photo-active') //addClass뒤에 class에는 .표시가 안 붙는것에 주의하라!!! event.currentTarget을 쓰면 마우스가 있는 타겟만 실행이 된다. addClass는 css 요소다.
  }).on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('photo-active')
  })
});

// 그 외 event listner: 'dblclick', 'mousemove', 'keydown', 'keypress', 'keyup'

$(document).ready(() => {
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active'); // removeClass와 같이 css요소 클래스를 추가/제거한다. !! . 을 클래스 이름 앞에 안 붙이니 주의!
    $('.menu-button').animate({ // 애니매에션 형식으로 바뀐다
      fontSize: '24px'
    }, 200);
    $('.nav-menu').removeClass('hide');
  })
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({ // css 요소를 바꾸는 콜백 함수
      color: '#EFEFEF',
      backgroundColor: '#303030'
    });
    $('.menu-button').animate({
      fontSize: '18px'
    }, 100);
  })
});
{
$('.menu-button').on('click', () => {
  $('.nav-menu').toggleClass('hide') // css class 열고 닫기
  $('.menu-button').toggleClass('button-active')
})
});
