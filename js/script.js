$(document).ready(function () {
  $(".order__button").click(function (e) {
    e.preventDefault();
    alert("Заказ сделан");
  });
});



$('#phone').focus(function (e) { 
    $('#number-hint').show()
});

$('#phone').focusout(function (e) { 
    $('#number-hint').hide()
});

$('#name').focus(function (e) { 
    $('#name-hint').show()
});

$('#name').focusout(function (e) { 
    $('#name-hint').hide()
});