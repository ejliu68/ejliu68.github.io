$(document).ready(function() {
  // $('.content').mouseover(function() {
  //   $('.content').css('box-shadow', '10px 10px 5px #888888');
  // });
  $('.drop-btn').click(function() {
      $('.drop-style').toggleClass("new-drop-style");
  });
  $('.blogpost').mouseover(function(){
    // $(this).css('transform', 'translate3d(2%, 0, 0)')
    $(this).css('transform', 'scale(1.05)')
    $(this).css('transition-timing-function', 'ease-in')
    $(this).css('animation-fill-mode', 'both')
  }).mouseout(function(){
    // $(this).css('transform', 'translate3d(-2%, 0, 0)')
    $(this).css('transform', 'scale(1)')
    $(this).css('transition-timing-function', 'ease-in')
    $(this).css('animation-fill-mode', 'both')
  });
});
// function showDropdown(){
//   document.getElementById('drop-menu').classList.toggle("new-drop-style");
// }
