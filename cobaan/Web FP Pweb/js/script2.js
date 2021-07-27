$(document).ready(function () {
    // alert("Ok")

    // $(window).on("load", ".jumbotron")

    $('.card-header-1').click(function () {
        $('.card-body-1').fadeToggle(".active")
    })
    $('.card-header-2').click(function () {
        $('.card-body-2').fadeToggle(".active")
    })
    $('.card-header-3').click(function () {
        $('.card-body-3').fadeToggle(".active")
    })
    $('#ig__slider').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,
        onSliderLoad: function () {
            $('#ig__slider').removeClass('cS-hidden');
        }
    });
    // $('#datetimepicker').datetimepicker();

    // const btn = $('.btn1')
    // const btn2 = $('.btn2')
    // const btn3 = $('.btn3')

    // btn.click(function () {
    //     event.preventDefault()
    //     $('.answer-1').slideToggle();
    // })
    const faq = document.querySelectorAll('.faq')

    faq.forEach((faqs) => {
        faqs.addEventListener("click", () => {
            faqs.classList.toggle("active")
        })
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
})
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        // alert("OK")
        $('nav').addClass('black')
    } else {
        $('nav').removeClass('black')
    }
})