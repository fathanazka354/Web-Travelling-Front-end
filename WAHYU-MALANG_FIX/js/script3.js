$(document).ready(function () {
    let tambah = 0
    $(".close-2").click(function () {
        $(".card-1").addClass("close")
    })
    $(".close-1").click(function () {
        $(".card-2").addClass("close")
    })

    var countDownDate = new Date("July 30, 2021 15:37:25").getTime();
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
    // Checkbox
    // $('#all').change(function () {
    //     if (this.checked) {
    //         $(".checkSingle").each(function () {
    //             $(".checkSingle").addClass("active")
    //             $(".tombol").slideDown({
    //                 duration: 1000,
    //                 queue: true
    //             })
    //             this.checked = true;
    //         })
    //     } else {
    //         $(".checkSingle").each(function () {
    //             $(".checkSingle").removeClass("active")

    //             $(".tombol").slideUp({
    //                 duration: 1000,
    //                 queue: true
    //             })
    //             this.checked = false
    //         })
    //     }
    // })
    var cb1 = $('#check1')
    var cb2 = $('#check2')
    var del = $('.delete')


    del.click(function () {
        event.preventDefault()
        cb1.change(function () {

            if (cb1.is(":checked")) {
                alert("OK")
                $(".card1").remove()
            }
        })

        if (cb2.checked == true) {
            $(".card-2").remove()
            alert("OK")
        }
        // alert("OK")

        // cb2.change(function () {
        //     if (this.checked == true) {
        //         // alert("OK")
        //         $(".card-2").remove()
        //         cb2.remove()
        //     }
        // })
        // cb1.change(function () {
        //     if (this.checked == true) {
        //         // alert("OK")
        //         $(".card-1").remove()
        //         cb1.remove()
        //     }
        // })
    })
    $(".edit").click(function () {
        $(".count").addClass("active")
        $(".edit").css("display", "none")
        $(".cancel").addClass("active")
        $(".tombol").addClass("setdisplay")
        $(".checkSingle").addClass("active")
    })
    $(".cancel").click(function () {
        $(".tombol").removeClass("setdisplay")
        $(".checkSingle").removeClass("active")
        $(".count").removeClass("active")
        $(".edit").css("display", "block")
        $(".cancel").removeClass("active")
    })

    // allCheck.change(function () {
    //     if (this.checked) {
    //         $(".checkSingle").each(function () {
    //             alert("OK")
    //             $(".checkSingle").addClass("active")
    //             this.checked = true;
    //         })
    //     }
    // })
    // button hapus simpan
    // function simpan() {
    //     var singleCheck1 = $("#check1")
    //     var singleCheck2 = $("#check2")
    //     var allCheck = $("#all")
    //     var hapus = $("#hapus")

    //     if (this.checked) {
    //         singleCheck1.change(function () {
    //             $(".card-1").remove()
    //         })
    //     }
    // }
})
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        // alert("OK")
        $('nav').addClass('black')
    } else {
        $('nav').removeClass('black')
    }
})

// Plus minus
var count = 1;
var count2 = 1;
var countEl = document.getElementById("count1");
var countEl2 = document.getElementById("count2");
minusBtn = document.querySelector('.minus1')
plusBtn = document.querySelector('.plus1')
card2 = document.querySelector('.card-2')
card1 = document.querySelector('.card-1')

function plus() {
    count++;
    countEl.innerText = count
}

function minus() {
    // alert("OK")
    if (count >= 1) {
        count--;
        countEl.innerText = count
        if (count == 0) {
            // alert("OK")
            count--;
            var agree = confirm("Are you Sure for delete it?")
            if (agree == true) {
                card1.style.display = "none"
                event.preventDefault()
                return true
            } else {
                return false
            }
        }
    }
}

function plus2() {
    count2++;
    countEl2.innerText = count2
}

function minus2() {
    // alert("OK")
    if (count2 >= 0) {
        count2--;
        countEl2.innerText = count2
        if (count2 === 0) {
            // alert("OK")
            count2--;
            card2.style.display = "none"
        }
    }
}