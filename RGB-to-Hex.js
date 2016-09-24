//RGB-to-Hex Color Converter
//http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
//http://rgbhex.websanova.com/

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert( rgbToHex(0, 51, 255) ); // #0033ff
