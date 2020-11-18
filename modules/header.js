function buildHeader() {

    // if user logged in 

    // if user not logged in
    $('header').append('<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand" href="#">Color<b>426</b></a>' +
        '<div class="navbar-expand" id="navbarNav">' +
            '<ul class="navbar-nav">' +
                '<li class="nav-item">' +
                    '<a class="nav-link" href="index.html">Explore</a>' +
                '</li>' +
                '<li class="nav-item">' +
                    '<a class="nav-link" href="login.html">Login</a>' +
                '</li>' +
            '</ul>' +
        '</div>' +
    '</nav>');

}

$(document).ready(function () {
    buildHeader();
})