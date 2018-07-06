//Exercise 3 - Convert Hex to RGB and Hex to RGB

const convertToRgb = (cor) => {
    let hexNum = cor.slice(1);
    let r, g, b, storeRGB;

    r = parseInt(hexNum.substring(0, 2), 16); //Gets substring corresponding to R
    g = parseInt(hexNum.substring(2, 4), 16); //Gets substring corresponding to G
    b = parseInt(hexNum.substring(4, 6), 16); //Gets substring corresponding to B

    storeRGB = `rgb(${r}, ${g}, ${b})`
    console.log(`Hex to RGB: ${cor} = ${storeRGB}`);
}

const convertToHex = (cor) => {
    let getRgb, rgbArr, r, g, b, hex1, hex2, hex3, finalHex;

    getRgb = cor.substring(4, cor.length - 1); //Gets substring with only the RGB values 
    rgbArr = getRgb.split(','); //Stores the values in an array

    r = rgbArr[0];
    g = rgbArr[1];
    b = rgbArr[2];

    //Calling the function to convert the RGB value into HEX value 
    hex1 = rgbToHex(r);
    hex2 = rgbToHex(g);
    hex3 = rgbToHex(b);

    finalHex = '#' + hex1 + hex2 + hex3; //Joining strings 
    console.log(`RGB to Hex: ${cor} = ${finalHex.toUpperCase()}`);
}

const rgbToHex = (num) => {
    let hexNum = Number(num).toString(16); //Converting decimal to hex
    return hexNum.length === 1 ? '0' + hexNum : hexNum; //checks if value is zero 
}

const convertColor = (cor) => {
    if (cor[0] !== '#' && cor.substring(0, 3) !== 'rgb') {
        return 'Invalid color format';
    } else if (cor[0] === '#') {
        convertToRgb(cor);
    } else if (cor.substring(0, 3) === 'rgb') {
        convertToHex(cor);
    }
}

convertColor('rgb(255,175,0)');
convertColor('#FF00FF');
console.log(convertColor('126514'));