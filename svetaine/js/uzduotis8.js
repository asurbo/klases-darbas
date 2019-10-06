let vardas='Mike';
let pavarde='Pukuotis';
let kursas=4;
let universitetas='VDU';
let pazymiai=[10, 7, 8];
let studentas=[vardas, pavarde, kursas, universitetas, pazymiai]

let informacija=vardas+' '+pavarde+' mokosi '+universitetas+' '+kursas+' kurse, jo pazymiai '+pazymiai;

console.log(informacija); //3 uzduotis

console.log( 'vardas yra',typeof(vardas) );
console.log( 'pavarde yra',typeof(pavarde) );
console.log( 'kursas yra',typeof(kursas) );
console.log( 'universitetas yra',typeof(universitetas) );
console.log( 'pazymiai - ',typeof(pazymiai) );  //4 uzduotis

console.log(studentas); //5 uzduotis

let studentas1;

studentas1 = {vardas:"Mike", pavarde:"Pukuotis", kursas:"4", universitetas:"VDU", pazymiai:"6,7,8"};
console.log(studentas1.vardas, studentas1.pavarde, 'mokosi', studentas1.universitetas, 'jo pazymiai', studentas1.pazymiai);
console.log(studentas1["vardas"], studentas1["pavarde"], 'mokosi', studentas1["universitetas"], 'jo pazymiai', studentas1["pazymiai"]); //7 uzduotis

console.log('studento pazymiai', studentas1.pazymiai); //8 uzduotis


let pazymiai2 = pazymiai.map(skaiciuojam);

function skaiciuojam(value, index, array) {
  if (value<10) {
  return value + 1;}
    else return value;
};
console.log(pazymiai2);  //9 uzduotis

let trijusuma = pazymiai.reduce(skaiciuojamtris);

function skaiciuojamtris(total, value, index, array) {
  return total + value;
};
console.log(trijusuma);  //10 uzduotis

let dviejusandauga = pazymiai[0] * pazymiai[1];
console.log(dviejusandauga); //11 uzduotis


console.log( 'kursas yra',typeof(kursas) );

let tikrinamkursa = kursas === 4;
console.log(tikrinamkursa); //12 uzduotis


if (kursas<4) {
  console.log('toli iki baigimo')}
    else {console.log('abiturientas')};
    
