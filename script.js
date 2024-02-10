let yBtn = document.querySelector(".Yippe");
let nBtn = document.querySelector(".NOOOO");
let div = document.querySelector("div");
let congrants = document.querySelector(".willYou");
let valentineIMG = document.querySelector(".valentineIMG");

yBtn.addEventListener('click', function(){

  div.style.display = "none";
  congrants.innerHTML = "I Love You! Thank you for being my valentines";
  valentineIMG.style.display = "block";
})

nBtn.addEventListener('click', function(){
   let x = Math.floor(Math.random() * 800) + 1;
  let y = Math.floor(Math.random() * 300) + 1;
  nBtn.style.top = x + 'px'; 
  nBtn.style.left = y + 'px';


  var currentWidth = yBtn.offsetWidth;
  var currentHeight = yBtn.offsetHeight;
  yBtn.style.width = currentWidth + 15 + "px";
  yBtn.style.height = currentHeight + 5 + "px";


})
