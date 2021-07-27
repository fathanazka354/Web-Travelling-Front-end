$(document).ready(function () {
    let tambah = 0
    $(".close-2").click(function () {
        $(".card-1").addClass("close")
    })
    $(".close-1").click(function () {
        $(".card-2").addClass("close")
    })

    var countDownDate = new Date("July 7, 2021 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown1").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";
        document.getElementById("countdown2").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown1").innerHTML = "";
            document.getElementById("countdown").innerHTML = "";
        }
    }, 1000);
})
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        // alert("OK")
        $('nav').addClass('black')
    } else {
        $('nav').removeClass('black')
    }
})