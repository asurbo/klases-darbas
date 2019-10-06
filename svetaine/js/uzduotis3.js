let atl=890;
let psd=9;
let vsd=24;

function gautipsd(atl) { return atl * psd / 100; }
function gautivsd(atl) { return atl / 2 * vsd / 100; }

function atlyginimas(atl) {
  return atl - gautipsd(atl) - gautivsd(atl);
}
console.log(atlyginimas(atl))
