function buildDocHead() {

    // BOOTSTRAP
    $('head').append ('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">' +
        '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" defer></script>' +
        '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" defer></script>');

    // AXIOS
    $('head').append ('<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>');

    // FONTS / OHER RESOURCES
    $('head').append ('<link rel="preconnect" href="https://fonts.gstatic.com">' +
    '<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">' +
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />')

    // CUSTOM SHEETS
    $('head').append ('<link rel="stylesheet" href="../assetts/style.css">');
    $('head').append ('<link rel="stylesheet" href="../assetts/responsive.css">');

    // MODULES
    $('head').append ('<script type="module" src="../modules/header.js"></script>');
    $('head').append ('<script type="module" src="../modules/scroll_listener.js"></script>');
    $('head').append ('<script type="module" src="../modules/color_card/color_card.js"></script>');
    $('head').append ('<script type="module" src="../modules/auth.js"></script>');
}

$(document).ready(function () {
    buildDocHead();
})