export default function renderCard(name, creator, c1, c2, c3, c4, c5) {
    let cardHtml = '<div class="col-md-4 card color-card">' +
        '<div class="color-container">';
    
    if (creator == firebase.auth().currentUser.email) {
        cardHtml += `<button type="button" class="btn delete-btn" id = "delete-btn" data-id = "${name}"><i class="fas fa-trash"></i></button>`;
    }
            
    cardHtml += '<div class="color" style="background: '+ c1 +';"></div>' +
            '<div class="color" style="background: '+ c2 +';"></div>' +
            '<div class="color" style="background: '+ c3 +';"></div>' +
            '<div class="color" style="background: '+ c4 +';"></div>' +
            '<div class="color" style="background: '+ c5 +';"></div>' +
        '</div>' +
        '<div class="information">' +
            '<h4>'+ name +'</h4>' +
            '<h6>'+ creator +'</h6>' +
        '</div>' +
    '</div>';
    return cardHtml;
}

$(document).ready(function() {
    $('head').append ('<link rel="stylesheet" href="../modules/color_card/color_card.css">');
    console.log($(".color-container"))
})