$(document).ready(function () {
    // alert("Ok")
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker();

    $('.card').hover(function () {
        $('.card').toggleClass('hover')
    })

    // $(window).on("load", ".jumbotron")
    $(".fa-heart").click(function () {
        swal({
            title: "Good job!",
            text: "you have successfully added to wishlist",
            icon: "success",
        });
        $(".angka").addClass("active")
    })
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });

    // Checkbox
    // $('#all').change(function () {
    //     if (this.checked) {
    //         $(".checkSingle").each(function () {
    //             this.checked = true;
    //         })
    //     } else {
    //         $(".checkSingle").each(function () {
    //             this.checked = false
    //         })
    //     }
    // })
    $(".edit").click(function () {
        $(".cancel").addClass("active")
        $(".hapus").addClass("active")
        $(".edit").addClass("none")
        $(".checkSingle").addClass("active")
    })
    $(".cancel").click(function () {
        $(".checkSingle").removeClass("active")
        $(".hapus").removeClass("active")
        $(".cancel").removeClass("active")
        $(".edit").removeClass("none")
    })
    $(".hapus").click(function () {
        swal({
                title: "Are you sure delete it?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    var cb1 = $("#cb1")
                    var cb2 = $("#cb2")
                    var card1 = $('.card-1')
                    var card2 = $('.card-2')
                    if (cb1.is(':checked')) {
                        card1.addClass("none")
                        // alert("OK")
                    }
                    if (cb2.is(':checked')) {
                        card2.addClass("none")
                        // alert("OK")
                    }
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    })

    $('.btn-chat').click(function openChat() {
        document.getElementById('chatbox').style.display = 'block';
        $('.btn-chat').hide();
    })

    $('.btn-close').click(function closeChat() {
        document.getElementById('chatbox').style.display = 'none';
        $('.btn-chat').show();
    })
    $('form').submit(function () {
        // var text = $(this).find("textarea[name='msg']").val();

        alert('Pesan Berhasil Terkirim');
    });

    // Add Wishlist item
    var loveButton = $(".fa-heart")

    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            // alert("OK")
            $('nav').addClass('black')
        } else {
            $('nav').removeClass('black')
        }
    })
    // $('#datetimepicker').datetimepicker();
})

// Plus minus
// var count = 1;
// var count2 = 1;
// var countEl = document.getElementById("count1");
// var countEl2 = document.getElementById("count2");
// minusBtn = document.querySelector('.minus1')
// plusBtn = document.querySelector('.plus1')
// card2 = document.querySelector('.card-2')
// card1 = document.querySelector('.card-1')

// function plus() {
//     count++;
//     countEl.innerText = count
// }

// function minus() {
//     // alert("OK")
//     if (count >= 1) {
//         count--;
//         countEl.innerText = count
//         if (count == 0) {
//             // alert("OK")
//             count--;
//             var agree = confirm("Are you Sure for delete it?")
//             if (agree == true) {
//                 card1.style.display = "none"
//                 event.preventDefault()
//                 return true
//             } else {
//                 return false
//             }
//         }
//     }
// }

// function plus2() {
//     count2++;
//     countEl2.innerText = count2
// }

// function minus2() {
//     // alert("OK")
//     if (count2 >= 0) {
//         count2--;
//         countEl2.innerText = count2
//         if (count2 === 0) {
//             // alert("OK")
//             count2--;
//             card2.style.display = "none"
//         }
//     }
// }