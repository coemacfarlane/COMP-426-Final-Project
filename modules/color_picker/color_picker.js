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

// ON DOC LOAD
$(document).ready(function() {
    console.log($('#picker'))

    // ----- INITIALIZE -----
    var colorPicker = new iro.ColorPicker("#picker", {
        width: 320,
        layoutDirection: 'horizontal',
        layout: [
            {
                component: iro.ui.Wheel,
                options: {
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
                    activeIndex: 1
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
            }
        ]
    });      
    // set colors randomly when page first loaded
    colorPicker.setColors(defaultRandomizer())


    // When color on wheel changes, print index of color changed
    colorPicker.on('color:change', function(color) {
        console.log('color changed:', color.index);
    });
})