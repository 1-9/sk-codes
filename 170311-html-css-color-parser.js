///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS.                         //
// Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).        //
//                                                                                                                                   //
// Input                                                                                                                             //
//                                                                                                                                   //
// The input string represents one of the following:                                                                                 //
//                                                                                                                                   //
// 1. 6-digit hexadecimal                                                                                                            //
//                                                                                                                                   //
// "#RRGGBB" - Each pair of digits represents a value of the channel in hexadecimal: 00 to FF                                        //
//                                                                                                                                   //
// 2. 3-digit hexadecimal                                                                                                            //
//                                                                                                                                   //
// "#RGB" - Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.            //
//                                                                                                                                   //
// 3. Preset color name                                                                                                              //
//                                                                                                                                   //
// You have to use the predefined map PRESET_COLORS (Ruby, Python, JavaScript), presetColors (Haskell), or preset-colors (Clojure).  //
// The keys are the names of preset colors in lower-case and the values are the corresponding colors                                 //
// in 6-digit hexadecimal (same as 1. "#RRGGBB").                                                                                    //
//                                                                                                                                   //
// Examples                                                                                                                          //
//                                                                                                                                   //
// parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }                                                                    //
// parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }                                                                    //
// parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function parseHTMLColor(color) {
  var key = color.toLowerCase();
  // var rgb = (PRESET_COLORS[key] || key).slice(1);
  var rgb = (key).slice(1);

  if (rgb.length === 3)
    rgb = rgb.replace(/./g, '$&$&');

  var val = parseInt(rgb, 16);

  return {
    r: val / 65536 | 0,
    g: (val / 256 | 0) % 256,
    b: val % 256
  };
}

console.log(46, '170311-html-css-color-parser.js', parseHTMLColor('#80FFA0'));
