const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let array = [];
    for (let i = 0; i< expr.length; i+=10){
      array.push(expr.slice(i, i+10))
    }
    let filarr = []
    for (let i = 0; i < array.length; i++) {
       for (let n = 0; n < array[i].length; n++){
         if (array[i][n] === '*') {
           filarr.push(array[i].slice(n))
           break
         }
         else if (array[i][n] === '1') {
           filarr.push(array[i].slice(n))
           break
         }
       }
    }
    let lastFiltеr = filarr.map(element => element.replace(/10/g, '.').replace(/11/g, '-'))
    for (let i = 0; i < lastFiltеr.length; i++) {
      for (let value in MORSE_TABLE) {
        if (lastFiltеr[i] === value) {
          lastFiltеr[i] = MORSE_TABLE[value];
        }
      }
    }
      return lastFiltеr.join('');
    }

module.exports = {
    decode
}