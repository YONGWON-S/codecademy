$(document).ready(() => {
	$('.menu').on('click', () => {
    $('.nav-menu').toggle();
  })
  $('.btn').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('btn-hover');
  })
  $('.postText').on('keyup', (event) => {
    $('.postText').focus();//This will cause the <textarea> to expect typed text as soon as the page loads.
    const post = $(event.currentTarget).val();//This will set post equal to the string inside the .postText element.
    const remaining = 140 - post.length;
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining); //The code above will update the number of characters remaining.
  })  
});
