function buildHeader() {
    //temporary, need to build database to check if users exist
    let loggedIn = true;
    
    let navHTML = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
                    '<a class="navbar-brand" href="#">Color<b>426</b></a>' +
                    '<div class="navbar-expand" id="navbarNav">' +
                        '<ul class="navbar-nav">' +
                            '<li class="nav-item">' +
                                '<a class="nav-link" href="index.html">Explore</a>' +
                            '</li>';

    // if user logged in
    if (loggedIn) {
        // link to profile page
        navHTML += '<li class="nav-item dropdown">' + 
                    '<a class="nav-link dropdown-toggle" id="nav-username" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>'+ 
                    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                        '<a class="dropdown-item" href="profile.html">My Profile</a>' +
                        '<a class="dropdown-item" id="logout-btn" href="login.html">Logout</a>' +
                    '</div>' +
                '</li>';
    }
    else {}
    // temporarily available no matter what for testing etc.
    // link to login page
    navHTML += '<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>'

    navHTML += '</ul></div></nav>';
    $('header').append(navHTML);

}

$(document).ready(function () {
    buildHeader();
})