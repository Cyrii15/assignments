$(document).ready(function() {

    var submitbtn;

    submitbtn = $('#submit').on('click', function() {
        $(this).delay(5000).fadeOut(3000);
        location.replace("C:/Users/tiogo/Documents/Github/assignments/index.html");
    });


    if (!submitbtn) {
        location.replace("C:/Users/tiogo/Documents/Github/assignments/signup/Signup.html");
    }



});