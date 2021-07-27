$(document).ready(function () {
    // if (radiosGPay.checked) {
    var select = $(".select")
    var location = $("#location")

    select.click(function () {
        $(".form_bawah").addClass("active")
        location.addClass("activ")
    })

    location.click(function () {
        location.addClass("activ")
        select.focus();
        $(".form_bawah").addClass("active")
    })

    $()
    // }
})
// If empty
function required() {
    var emp = document.form.first.value
    var emp2 = document.form.last.value
    var emp3 = document.form.country.value
    var emp4 = document.form.phone.value



    if (emp === "" &&
        emp2 === "" &&
        emp3 === "" &&
        emp4 === "") {
        alert("Please input a Value");
        return false;
    } else {

        return true;
    }
}


function required2() {
    var emp = document.form.number.value
    var emp2 = document.form.yy.value
    var emp3 = document.form.mm.value
    var emp4 = document.form.card.value
    var emp5 = document.form.cvc.value
    var emp6 = document.form.bill.value
    var emp7 = document.form.add1.value
    var emp8 = document.form.add2.value
    var emp9 = document.form.city.value
    var emp10 = document.form.prov.value
    var emp11 = document.form.code.value



    if (emp === "" &&
        emp2 === "" &&
        emp3 === "" &&
        emp4 === "" &&
        emp5 === "" &&
        emp6 === "" &&
        emp7 === "" &&
        emp8 === "" &&
        emp9 === "" &&
        emp10 === "" &&
        emp11 === ""
    ) {
        alert("Please input a Value");
        return false;
    } else {
        document.querySelector(".success").addEventListener("click", function () {
            swal({
                title: "Good job!",
                text: "you have successfully added to wishlist",
                icon: "success",
            });
        })
        return true;
    }


}

$(window).scroll(function () {
    if ($(window).scrollTop()) {
        // alert("OK")
        $('nav').addClass('black')
    } else {
        $('nav').removeClass('black')
    }
})