

let input = document.querySelector('#number');
let select = document.querySelector('#select');


const celToFah = (cel) => {
  let fahrenheit = ((cel) * (9 / 5) + 32).toFixed(2);
  return fahrenheit;
}

const fahToCel = (fah) => {
  let celsius = ((fah - 32) * 5 / 9).toFixed(2);
  return celsius;
}
let result;
let btn=document.querySelector('#submit');
btn.addEventListener('click', () => {

  let num=(input.value);
  let options=(select.value);
  
  if (options === 'cel') {
    result=celToFah(num);
     let span=document.getElementById('solution');
     span.innerHTML=`= ${result} &#8457;`;
}else{
  result=fahToCel(num);
  let span=document.getElementById('solution');
span.innerHTML=`= ${result} &#8451;`;
} 


});
