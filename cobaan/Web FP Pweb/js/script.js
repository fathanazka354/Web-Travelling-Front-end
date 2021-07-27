$(document).ready(function () {
    // alert("Ok")
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker();

    $('.card').hover(function () {
        $('.card').toggleClass('hover')
    })

    // $(window).on("load", ".jumbotron")

    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });


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