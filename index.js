const omikuzi= [
  "大吉", "中吉", "小吉", "末吉", "凶", "大凶"
];

const $h1= document.getElementById('h1');
const $button= document.querySelector('button');

function start(){
  if(!(0 === omikuzi.length)){
  const random= Math.floor(Math.random()* omikuzi.length);
  $h1.textContent= omikuzi[random];
  omikuzi.splice([random], 1);
  }
  else{
    alert('引き終わりました');
    $button.disabled= true;
  }
};

$button.addEventListener('click', start);