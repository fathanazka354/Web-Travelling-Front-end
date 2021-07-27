// $(document).ready(function () {


function setupTab() {
    document.querySelectorAll('.tabs__button').forEach(button => {
        button.addEventListener('click', () => {
            const sideBar = button.parentElement;
            const tabContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabtoActivate = tabContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll('.tabs__button').forEach(btn => {
                btn.classList.remove("tabs__button--active");
            });
            tabContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active")
            tabtoActivate.classList.add("tabs__content--active")
        })
    })
}




document.addEventListener("DOMContentLoaded", () => {
    setupTab();
});


// IMG
const imgDiv = document.getElementById('previewImg')
const img = document.getElementById('preview__Img')
const file = document.getElementById('inpFile')

file.addEventListener('change', function () {
    const choosedFile = this.files[0]
    // console.log(choosedFile);
    if (choosedFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result)
        })

        reader.readAsDataURL(choosedFile)
    }
})


// If empty
function required() {
    var emp = document.form1.tanggal.value
    var emp2 = document.form1.tempat.value
    var emp3 = document.form1.email.value
    var emp4 = document.form1.nama2.value
    var emp5 = document.form1.nama1.value



    if (emp === "" &&
        emp2 === "" &&
        emp3 === "" &&
        emp4 === "" &&
        emp5 === "") {
        alert("Please input a Value");
        return false;
    } else {
        alert('Anda berhasil menyimpan');
        return true;
    }


}

function required2() {
    event.preventDefault()
    var emp6 = document.form.pw1.value
    var emp7 = document.form.pw2.value
    if (emp6 === "" &&
        emp7 === "") {
        alert("Please input a Value");
        return false;
    } else {
        alert('Anda berhasil menyimpan');
        return true;
    }
}

function required3() {
    event.preventDefault()
    var emp = document.form.street.value
    var emp2 = document.form.code.value
    var emp3 = document.form.state.value
    var emp4 = document.form.address.value
    if (emp === "" &&
        emp2 === "" &&
        emp3 === "" &&
        emp4 === "") {
        alert("Please input a Value");
        return false;
    } else {
        alert('Anda berhasil menyimpan');
        return true;
    }
}

// $(document).ready(function () {

// })
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        // alert("OK")
        $('nav').addClass('black')
    } else {
        $('nav').removeClass('black')
    }
})