$(document).ready(() => {

  $('.shoe-details').show();

  $('.more-details-button').on('click', event => {
  	$(event.currentTarget).closest('.product-details').next().toggle(); // next()는 아이템이 많은 siblings을 가지고 있을 때 바로 옆 하나의 sibling만 선택하게 해준다. .prev() 는 바로 전 것을 찾는다.
    $(event.currentTarget).find('img').toggleClass('rotate'); // find() 는 children 보다 더 하위 item, class, id를 찾아준다.
  });

  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active'); // parent() 도 있다.
    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled'); // closest는 가장 가까운 아이템을 찾아준다. 인근 아이템만 실행시키고 싶을 때 currentTarget과 함께 사용
       		  $(event.currentTarget).siblings().removeClass('active'); // siblings은 형제들을 지정한다.


});

// 이거 외에 prevUntil() 과 nextUntil()도 사용해 보자.

  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})
