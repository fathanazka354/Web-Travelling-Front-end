$(document).ready(function () {
    $(".fa-heart").click(function () {
        swal({
            title: "Good job!",
            text: "you have successfully added to wishlist",
            icon: "success",
        });
        $(".angka").addClass("active")

    })
    const about = $('.btn-1')
    const essential = $('.btn-2')
    const gallery = $('.btn-3')
    const review = $('.btn-4')
    const price = $('.btn-5')

    about.click(function () {
        // alert("ok")
        event.preventDefault()
        $('.about').addClass('activat')
        about.addClass('active')
        essential.removeClass('active')
        gallery.removeClass('active')
        review.removeClass('active')
        price.removeClass('active')
        $('.essential').removeClass('activat')
        $('.gallery').removeClass('activat')
        $('.review').removeClass('activat')
        $('.price').removeClass('activat')
    })
    essential.click(function () {
        // alert("ok")
        event.preventDefault()
        $('.essential').addClass('activat')
        essential.addClass('active')
        about.removeClass('active')
        gallery.removeClass('active')
        review.removeClass('active')
        price.removeClass('active')
        $('.about').removeClass('activat')
        $('.gallery').removeClass('activat')
        $('.review').removeClass('activat')
        $('.price').removeClass('activat')
    })
    gallery.click(function () {
        // alert("ok")
        event.preventDefault()
        $('.gallery').addClass('activat')
        gallery.addClass('active')
        essential.removeClass('active')
        about.removeClass('active')
        review.removeClass('active')
        price.removeClass('active')
        $('.about').removeClass('activat')
        $('.essential').removeClass('activat')
        $('.review').removeClass('activat')
        $('.price').removeClass('activat')
    })
    review.click(function () {
        event.preventDefault()
        $('.review').addClass('activat')
        review.addClass('active')
        essential.removeClass('active')
        gallery.removeClass('active')
        about.removeClass('active')
        price.removeClass('active')
        $('.about').removeClass('activat')
        $('.essential').removeClass('activat')
        $('.gallery').removeClass('activat')
        $('.price').removeClass('activat')
    })
    price.click(function () {
        event.preventDefault()
        $('.price').addClass('activat')
        price.addClass('active')
        essential.removeClass('active')
        gallery.removeClass('active')
        review.removeClass('active')
        about.removeClass('active')
        $('.about').removeClass('activat')
        $('.essential').removeClass('activat')
        $('.gallery').removeClass('activat')
        $('.review').removeClass('activat')
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






















// const categoryTitles = document.querySelectorAll('.category-title')
// const allCategoryPost = document.querySelectorAll('.all')

// for (let i = 0; i < categoryTitles.length; i++) {
//     categoryTitles[i].addEventListener('click', filterPost.bind(this, categoryTitles[i]))
// }

// function filterPost(item) {
//     changeActivePositions(item)
//     for (let i = 0; i < allCategoryPost.length; i++) {
//         if (allCategoryPost[i].classList.contains(items.attributes.id.value)) {
//             allCategoryPost[i].getElementsByClassName.display = "block"
//         } else {
//             allCategoryPost[i].getElementsByClassName.display = "none"
//         }
//     }
// }

// function changeActivePositions(activeItems) {
//     for (let i = 0; i < categoryTitles.length; i++) {
//         categoryTitles[i].classList.remove('active')
//     }
//     activeItems.classList.add('active')
// }
// const categoryTitle = document.querySelectorAll('.category-title');
// const allCategoryPosts = document.querySelectorAll('.all');

// for (let i = 0; i < categoryTitle.length; i++) {
//     categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
// }

// function filterPosts(item) {
//     changeActivePosition(item);
//     for (let i = 0; i < allCategoryPosts.length; i++) {
//         if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
//             allCategoryPosts[i].style.display = "block";
//         } else {
//             allCategoryPosts[i].style.display = "none";
//         }
//     }
// }

// function changeActivePosition(activeItem) {
//     for (let i = 0; i < categoryTitle.length; i++) {
//         categoryTitle[i].classList.remove('active');
//     }
//     activeItem.classList.add('active');
// };