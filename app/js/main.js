$(function() {
  $('.location__button').on('click', function(){
    $('.location__list').toggleClass('active');
    $('.location__button').toggleClass('active');
  });
  $('.location__list-item').on('click', function(){
    var itemValue = $(this).data('value');
    console.log(itemValue);
    $('.location__button span').text($(this).text()).parent().attr('data-value', itemValue);
    $('.location__list').toggleClass('active');
  });
});