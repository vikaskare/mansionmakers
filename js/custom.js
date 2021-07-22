$('#signpLink').click(function (e) {
    $('#signupPage').addClass("d-block").removeClass("d-none");
    $('body').addClass("pause-screen");
    $('.main-area').addClass("blur");
});

$('#signpClose').click(function (e) {
    $('#signupPage').addClass("d-none").removeClass("d-block");
    $('body').removeClass("pause-screen");
    $('.main-area').removeClass("blur");
    });

