$(document).ready(() => {
  $('#text').on('keyup', (event) => {
    $('.preview').html($(event.currentTarget).val());// To get the value of the current target of an event listener you could use
  })
  $('#font').on('change', (event) => {
    $('.preview').css('fontFamily', $(event.currentTarget).val());
  }) //The change event handler will fire anytime the selected value of the '#font' menu changes.
  $('#weight').on('change', (event) => {
    $('.preview').css('fontWeight', $(event.currentTarget).val());
  })
$('#size').on('keyup', (event) => {
  	 let fontSize = $(event.currentTarget).val() + 'px';
  $('.preview').css({
    fontSize: fontSize
    })
  })
})
