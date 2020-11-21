// ------ COLOR ALGORITHMS --------
function defaultRandomizer() {
    let colors = [];

    for (var i = 0; i < 5; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        colors[i] = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    return colors;
}

// similar saturation and value, hues spaced out by approx. equal differences
function analogous() {}

// same hue, 2 with same saturation diff values, 3 with same sat. diff values
// ex: HSV format (282, 74, 38) (282, 44, 90) (282, 74, 88) (282, 44, 38) (282, 74, 68)
function monochromatic() {}

// opposite hues, 3 of one hue, 2 of other hue, similar sat. and value
// ex: HSV format (181, 80, 58) (181, 60, 100) (181, 70, 88) (23, 90, 58) (23, 70, 88)
function complementary() {}

// one of one hue, two hues splitting difference around opposite hue
// ex: HSV format (181, 70, 88) / (39, 80, 58) (39, 75, 88) / (5, 60, 58) (5, 65, 88)
function splitComplementary() {}

// ----- UPDATE PAGE AND DATA FUNCTIONS ------
function loadPaletteDisplay(colors) {
    let displays = document.getElementsByClassName('palette-container')[0].children;
    for (let i = 0; i < displays.length; i++) {
        displays[i].style.backgroundColor = colors[i].rgbString;
    }
}

// ON DOC LOAD
$(document).ready(function() {
    // ----- INITIALIZE -----
    var colorPicker = new iro.ColorPicker("#picker", {
        width: 360,
        layoutDirection: 'vertical',
        margin: 30,
        handleRadius: 12,
        layout: [
            {
                component: iro.ui.Wheel,
                options: {
                    width: 320
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    activeIndex: 0
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    activeIndex: 1,
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    activeIndex: 2
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    activeIndex: 3
                }
            },
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    activeIndex: 4
                }
            },
            
            
        ]
    });      
    // set colors randomly when page first loaded
    colorPicker.setColors(defaultRandomizer())
    // load the palette display in the sidebar
    loadPaletteDisplay(colorPicker.colors);
    var prevActiveIndex = colorPicker.color.index;
    document.getElementsByClassName('IroSliderBg')[prevActiveIndex].setAttribute("style", "stroke: var(--grey) !important; stroke-width: 3px;")

    // When color on wheel changes: update palette display
    colorPicker.on('color:change', function(color) {
        loadPaletteDisplay(colorPicker.colors)
    });

    // when active color changes: toggle border for active and previously active sliders
    colorPicker.on('color:setActive', function(color) {
        document.getElementsByClassName('IroSliderBg')[prevActiveIndex].setAttribute("style", "stroke: #fff !important; stroke-width: 0px;")
        document.getElementsByClassName('IroSliderBg')[colorPicker.color.index].setAttribute("style", "stroke: var(--grey) !important; stroke-width: 3px;")
        prevActiveIndex = colorPicker.color.index;
    });

    // --------- SAVING COLOR PALETTE ---------
    // open modal saying palette is saved,
    // auto close and clear input fields
    $('#save-palette-btn').click(function() {
        setTimeout(function() {
            $('#savedModal').modal('toggle');
            document.getElementById('palette-tags-field').value = "";
            document.getElementById('palette-name-field').value = "";
        }, 2500)
    })
})