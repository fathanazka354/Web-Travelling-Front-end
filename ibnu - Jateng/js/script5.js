$(document).ready(function () {
    // alert("OK")
    $('.profile__btn').click(function () {
        $('.profile__btn').addClass('active')
        $('.password__btn').removeClass('active')
        $('.billing__btn').removeClass('active')
        $('#content').html(`
        <head>
        <link rel="stylesheet" href="./css/stylessss_profile.css">
        </head>
        <body>
        <div class="profile">
                        <h5>Profile Details</h5>
                        <hr>
                        <div class="img text-center">
                            <img src="./asset/img/profile.jpg" class="rounded-circle" width="120px" height="120px"
                                alt="">
                        </div>
                        <div class="sec__details mt-4">

                            <div class="name">
                                <label for="first">First Name</label>
                                <input type="text" class="form-control" id="first" value="Abu" required>
                            </div>

                            <div class="name">
                                <label for="last">First Name</label>
                                <input type="text" class="form-control" id="last" value="Ridho" required>
                            </div>
                        </div>

                        <div class="sec__contact">
                            <h5>Contact Details</h5>
                            <hr>
                            <div class="email">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" value="Abu32@gmail.com" required>
                            </div>
                        </div>

                        <div class="sec__date">
                            <h5>Date Of birth</h5>
                            <hr>
                            <div class="date">
                                <div class="tempat__lahir">
                                    <label for="tempat">Tempat Lahir</label>
                                    <input type="text" class="form-control" id="tempat" required>
                                </div>
                                <div class="tempat__lahir">
                                    <label for="date">Date</label>
                                    <input type="date" class="form-control" id="date" required>
                                </div>
                            </div>
                        </div>
                        <div class="button d-flex justify-content-end mb-4">
                            <button class="btn__save mt-4">Save</button>
                        </div>

                    </div>
            
        </body>
        `)
    })
    $('.password__btn').click(function () {
        $('.password__btn').addClass('active')
        $('.profile__btn').removeClass('active')
        $('.billing__btn').removeClass('active')

        $('#content').html(`
        <link rel="stylesheet" href="./css/stylessss_profile.css">
        <div class="password">
                        <h5>Password</h5>
                        <hr>
                        <div class="sec__password">
                        <label for="password">New Password</label>
                        <input type="password" class="form-control" id="password" required>
                        </div>

                        <div class="sec__password">
                        <label for="first">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm" required>
                        </div>
                        <div class="button d-flex justify-content-end mb-4">
                            <button class="btn__save mt-4">Save</button>
                        </div>
                    </div>
        `)
    })
    $('.billing__btn').click(function () {
        $('.billing__btn').addClass('active')
        $('.password__btn').removeClass('active')
        $('.profile__btn').removeClass('active')
        $('#content').html(`
        <link rel="stylesheet" href="./css/stylessss_profile.css">
        <div class="billing">
                        <h5>Billing Address</h5>
                        <hr>
                        <form action="">
                            <div class="form-group">
                                <label for="street">
                                    Street / No
                                </label>
                                <input type="text" class="form-control" id="street" value="Jl Pegangsaan 17">
                            </div>
                            <div class="form-group">
                                <label for="code">
                                    Zip Code
                                </label>
                                <input type="text" class="form-control" id="code" value="297362">
                            </div>
                            <div class="form-group">
                                <label for="state">
                                    State/Region
                                </label>
                                <input type="text" class="form-control" id="state" value="Jawa Tengah">
                            </div>
                            <div class="form-group">
                                <label for="address">
                                    Address line
                                </label>
                                <input type="text" class="form-control" id="address"
                                    value="Mancasan, Krajan,Yogyakarta">
                            </div>
                            <div class="form-group">
                                <label for="city">
                                    City
                                </label>
                                <select class="form-control" id="city">
                                    <option>Jakarta</option>
                                    <option>Surabaya</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="country">
                                    Country
                                </label>
                                <select class="form-control" id="country">
                                    <option>Indonesia</option>
                                    <option>Vietnam</option>
                                    <option>Thailand</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </form>
                        <div class="button d-flex justify-content-end mb-4">
                            <button class="btn__save mt-4">Save</button>
                        </div>
                    </div>
        `)
    })
})