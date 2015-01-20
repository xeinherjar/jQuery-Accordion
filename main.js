var accItems = $('.acc-item');

accItems.each( function(i) {
  if (i === 0) { $(this).addClass('expanded'); }
});

accItems.on('click', function() {
  accItems.removeClass('expanded');
  $(this).addClass('expanded');
});
