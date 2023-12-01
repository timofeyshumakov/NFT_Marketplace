//adaptive

var title = document.getElementsByClassName('live-auctions__title');
var arrows = document.getElementsByClassName('live-auctions__arrows');
var cw = 0;
var burgerClick = 0;
var item = [];
var i=0;
var ii=0;
var ww=[];
var countCards = 0;
function adaptive() {

const items = document.getElementsByClassName('cards');

for( i=0; i<items.length; i++) {
  item = items[i].getElementsByClassName('card');

  ww[i]=0;
  ww[i] = parseInt(getComputedStyle(item[0]).minWidth) + parseInt(getComputedStyle(item[0]).gap) * (items.length+1);
countCards = Math.floor(window.screen.width/ ww[i]);
if(item.length === 3){
if(countCards < 3){
  arrows[0].style.justifyContent = 'center';
  arrows[0].style.position = 'relative';
  title[0].style.flexDirection = 'column';
}
else{
  title[0].style.flexDirection = 'row';
  arrows[0].style.justifyContent = 'center';
  arrows[0].style.position = 'absolute';
}
if(countCards === 2){
  item[2].style.display='none';
  item[1].style.display='flex';
}
else if(countCards === 1){
  item[2].style.display='none';
  item[1].style.display='none';
}
else if(countCards > 2){
  item[2].style.display='flex';
  item[1].style.display='flex';
}
}
if(item.length === 2){
  for( i=0; i<countCards; i++) {
    item[i].style.width= '50%';
    }
}
if(item.length > 3){
  for( i=3; i<item.length; i++) {
    item[i].style.display='none';
    }
}
}
var hidenArrow = document.getElementsByClassName('hiden-arrow');
if(window.screen.width < 1024 && window.screen.width > 768){
  
  //hidenArrow[0].style.display = 'none';
}
else{
  //hidenArrow[0].style.display = 'flex';
}
}



window.onresize = function( event ) {
  burger(cw);
  adaptive();
};
let timerDuration = 0;
document.addEventListener("DOMContentLoaded", () => {
  
  var items = document.getElementById('header__container').childNodes;

for( i=0; i<items.length; i++) {
  if(items[i].id != undefined){
    cw = cw + parseInt(getComputedStyle(items[i]).width);
  }
}

cw=cw+20;
  burger(cw);
  adaptive();
  popup();
  });



//popup
function popup() {
  var descript = document.getElementsByClassName('timer');
  timerPopupDuration = 20;
  timerDuration= (descript[0].innerHTML).split(":");
  timerDuration= timerDuration[0]*3600+timerDuration[1]*60+timerDuration[2]*1;
  timerRestart= timerDuration;
  var popupActivate=0;
const items = document.getElementsByClassName('popup__container');

var modal = document.getElementById("popup__container");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

 function updateTimer() {
  if (timerDuration <= 0) {
    timerDuration= timerRestart;
  } else {
  timerDuration--;
  hours= Math.floor(timerDuration/3600);
  minutes= Math.floor(timerDuration/ 60) - hours*60;
  seconds= timerDuration-minutes*60 - hours*3600;
  if (hours < 10){
    hours= '0' + hours;
  }
  if (minutes < 10){
    minutes= '0' + minutes;
  }
  if (seconds < 10){
    seconds= '0' + seconds;
  }
  timers= document.getElementsByClassName('timer');

  for(var i=0; i< timers.length; i++){
    timers[i].innerText=hours + ':' + minutes + ':' + seconds;
    
  }
  
  }


  if (timerPopupDuration <= 0 && popupActivate >= 1) {
    //clearInterval(timerPopupInterval); // Остановить таймер
    document.getElementById("popup__container").style.display= 'flex';
    popupActivate--;
  } else {
    timerPopupDuration--;
  }
 }
 const timerInterval = setInterval(updateTimer, 1000);
}

   window.onclick = function(event) {

     if (event.target != document.getElementById("popup__container")) {
      document.getElementById("popup__container").style.display = "none";
     }
   }

function burger(cw) {

if(window.screen.width <= cw + 50){
  document.getElementById('menu-burger').style.display= 'flex';
  document.getElementById('menu-burger-content').style.display= 'none';
  document.getElementById('menu-burger-container').style.position= 'relative';
}
else{
  document.getElementById('menu-burger').style.display= 'none';
  document.getElementById('menu-burger-container').style.position= 'absolute';
  document.getElementById('menu-burger-content').style.display= 'flex';
  document.getElementById('header__container').style.flexDirection = 'row';
}

window.onclick = function(event) {
var menuBurgerContent = document.getElementById('menu-burger-content');
var menuList = document.getElementById('mega-menu-wrap-main_menu');
var headerButton = document.getElementById('header__button');
  if (event.target.id == 'menu-burger') {
    if (burgerClick == 0) {
      menuBurgerContent.style.display = "flex";
      menuBurgerContent.style.flexDirection = 'column';
      menuList.style.flexDirection = 'column';
      menuList.style.alignItems = 'center';
      headerButton.style.display = "flex";
      document.getElementById('header__container').style.flexDirection = 'column';
      burgerClick = 1;
}
else{
  menuBurgerContent.style.display = "none";
  document.getElementById('header__container').style.flexDirection = 'row';
  document.getElementById('menu-burger-content').style.flexDirection = 'row';
  burgerClick = 0;
}
}
}
}
//slider
let currentItem = 0;
function backArrowOnclick(){
  if(currentItem != 0){
      currentItem--;
      item = document.getElementsByClassName('live-auctions__card');
      item[currentItem+countCards].style.display='none';
      item[currentItem].style.display='flex';
    }
}
function nextArrowOnclick() {
  if(currentItem != item.length-countCards){
      item = document.getElementsByClassName('live-auctions__card');
      item[currentItem].style.display='none';
      currentItem++;
      for(i=0; i<countCards; i++){
      item[currentItem+i].style.display='flex';
      }
      
    }
}
function likesOnclick() {
  
}
  


    
  
  

