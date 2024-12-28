/** 
* Encoder and decode from ASCII to HEX code
* by hithja
**/
const codes = require('./codes.json');

//* Source string, array of symbols from string and encoded/decoded string
let str = "Hello, World! This code was wrote by hithja";
let sym_arr = [];
let code_str = [];

//* If user writes 'decode' in arguments, code automatically makes mode 'decode'
if (process.argv[2] == 'decode'){
    //* Adding every symbol (without spaces) to the symbol array
    sym_arr = str.split(' ');
    for (let i = 0; i<sym_arr.length; i++) {
        code_str += codes['decode'][sym_arr[i]];
    }
    console.log(code_str);
}
else {
    //* Adding every symbol (including spaces) to the symbol array
    sym_arr = str.split('');
    for (let i = 0; i<sym_arr.length; i++) {
        code_str += codes['encode'][sym_arr[i]] + ' ';
    }
    console.log(code_str);
}
