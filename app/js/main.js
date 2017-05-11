//mobile-menu
$('.ico').click(function() {
  $( this ).css('display', 'none');
 $('.open-men').css('display', 'block');
 $('.close').css('display', 'block');
 $('.row').css('margin-top', '180px');
});

$('.close').click(function() {
  $( this ).css('display', 'none');
 $('.open-men').css('display', 'none');
 $('.ico').css('display', 'block');
 $('.row').css('margin-top', '0');
});
//mobile-menu
