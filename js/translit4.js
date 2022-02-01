//var latinString = 'Jednačine povće';

var latinToSerbian = {

    A: "А",

    B: "Б",

    C: "Ц",

    D: "Д",

    Dž: "Џ",

    E: "Е",

    F: "Ф",

    G: "Г",

    H: "Х",

    I: "И",

    J: "Ј",

    K: "К",

    L: "Л",

    Lj: "Љ",

    M: "М",

    N: "Н",

    Nj: "Њ",

    O: "О",

    P: "П",

    R: "Р",

    S: "С",

    T: "Т",

    U: "У",

    V: "В",

    Z: "З",

    a: "а",

    b: "б",

    c: "ц",

    d: "д",

    dž: "џ",

    e: "е",

    f: "ф",

    g: "г",

    h: "х",

    i: "и",

    j: "ј",

    k: "к",

    l: "л",

    m: "м",

    n: "н",

    nj: "њ",

    o: "о",

    p: "п",

    r: "р",

    s: "с",

    t: "т",

    u: "у",

    v: "в",

    z: "з",

    Ć: "Ћ",

    ć: "ћ",

    Č: "Ч",

    č: "ч",

    Đ: "Ђ",

    đ: "ђ",

    Š: "Ш",

    š: "ш",

    Ž: "Ж",

    ž: "ж",

    " ": " ",

    "/": "/",

    "0": "0",

    "1": "1",

    "2": "2",

    "3": "3",

    "4": "4",

    "5": "5",

    "6": "6",

    "7": "7",

    "8": "8",

    "9": "9",

    "(":"(",

    ")":")",

    ",":",",

    ".":".",

    ":":":",

    ";":";",

    "x":"x",

    "<":"<",

    ">":">",

    "=":"=",

    "+":"+",

    "-":"-",

    "*":"*",

    "?":"?",

    "!":"!",

    "%":"%",

    "·":"·",

    "m^2":"m<sup>2</sup>"

};/*

var serbianString = latinString.split('').map(function(character){

  return latinToSerbian[character];

}).join('');



console.log( latinString + ' = ' + serbianString ); // Povrce = Поврће

*/

var transLit = document.body.getElementsByClassName("trLit");

var noviNiz = [];

var current = 0;

for(var i = 0; i < transLit.length; i++) {

      transLit[i].textContent = transLit[i].textContent.split('').map(function(character){

        return latinToSerbian[character];

        }).join('').replaceAll("нј","њ").replaceAll("Нј","Њ").replaceAll("лј","љ").replaceAll("Лј","Љ");

    }

//    console.log(transLit[Math.round(Math.random())].textContent);