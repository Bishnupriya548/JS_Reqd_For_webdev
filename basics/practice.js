const newdate = new Date();
solve();

console.log(newdate.getFullYear());
console.log("This is my script");
function solve() {
  var x = 10;
  console.log(x);
}
// console.log(x);  can't access as var is function scoped
var y = 12;
function solve() {
  console.log(y);
  console.log("hello");
}
solve();
{
  var z = 9;
}
console.log(z);
function help() {
  let y = 6;
  const z = 12;
  var v = 23;
}

//console.log(x); --> error
console.log(z);
console.log(v);
