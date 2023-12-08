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
var sliderWidth = 0;
function adaptive() {

const items = document.getElementsByClassName('cards');

for( i=0; i<items.length; i++) {
  item = items[i].getElementsByClassName('card');

  ww[i]=0;
  ww[i] = parseInt(getComputedStyle(item[0]).minWidth) + parseInt(getComputedStyle(item[0]).gap) * (items.length+1);
countCards = Math.floor(window.screen.width/ ww[i]);
if (countCards < 1){
  countCards = 1;
}
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
  countCards = 3;
}

if (i === 0){
  sliderWidth =  item[0].offsetWidth * countCards + parseInt(getComputedStyle(items[0]).gap) * (countCards-1) + 'px';
  items[0].style.width = sliderWidth;
  cardWidth = item[0].offsetWidth + parseInt(getComputedStyle(items[0]).gap) ;
}
if (currentItem >= item.length-countCards){
  currentItem= item.length-countCards;
  slider[0].style.left = -currentItem * cardWidth + 'px';
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
  var timerDuration = [];
  var hours = [];
  var minutes = [];
  var seconds = [];
  //var timerToNumber = [];
  timerPopupDuration = 20;

  for (i = 0; i < descript.length; i++){
  timerToNumber= (descript[i].innerHTML).split(":");
  timerDuration[i]= timerToNumber[0]*3600+timerToNumber[1]*60+timerToNumber[2]*1;
  }
  
  //timerRestart= timerDuration;
  var popupActivate=0;
const items = document.getElementsByClassName('popup__container');

var modal = document.getElementById("popup__container");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

timers= document.getElementsByClassName('timer');
 function updateTimer() {
  if (timerDuration[0] <= 0) {
    //timerDuration= timerRestart;
  } else {
    for (i = 0; i < descript.length; i++){
      timerDuration[i]--;
      hours[i]= Math.floor(timerDuration[i]/3600);
      minutes[i]= Math.floor(timerDuration[i]/ 60) - hours[i]*60;
      seconds[i]= timerDuration[i]-minutes[i]*60 - hours[i]*3600;
      if (hours[i] < 10){
        hours[i]= '0' + hours[i];
      }
      if (minutes[i] < 10){
        minutes[i]= '0' + minutes[i];
      }
      if (seconds[i] < 10){
        seconds[i]= '0' + seconds[i];
      }
      timers[i].innerText= hours[i] + ':' + minutes[i] + ':' + seconds[i];
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
slider = document.getElementsByClassName('live-auctions__slider');

function backArrowOnclick(){
  if(currentItem > 0){
    currentItem--;
    slider[0].style.left = -currentItem * cardWidth + 'px';
   }
}
function nextArrowOnclick() {
  if(currentItem <= item.length-countCards-1){
    currentItem++;
    slider[0].style.left = -currentItem * cardWidth + 'px';
  }
}
function likesOnclick() {
  
}
  



    
  
  

