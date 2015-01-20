var accItems = $('.acc-item');

accItems.each( function(i) {
  i === 0 ? $(this).addClass('expanded') : $(this).addClass('collapsed');
});

accItems.on('click', function() {
  accItems.removeClass('expanded');
  accItems.addClass('collapsed');
  $(this).addClass('expanded');
  $(this).removeClass('collapsed');
});
