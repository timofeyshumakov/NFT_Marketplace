//adaptive
var i=0;
var ii=0;
var gap='60';
var arr = new Map([
    ['cards', 'card']
  ]);

  function showMessage() {
  arr.forEach(function(adaptiveElement,adaptiveBlock) {
const items = document.getElementsByClassName(adaptiveBlock);

setTimeout(() => {

    for( i=0; i<items.length; i++) {
    const item = items[i].getElementsByClassName(adaptiveElement);
    
if (item.length==3){
    var ww=0;

    var children = items[i].childNodes;
    for ( ii = 0; ii < children.length; ++ii) {
        ww=ww+parseInt(getComputedStyle(children[ii]).width);
        
      }
      
    if (items[i].clientHeight >= item[0].clientHeight*3){
    if (window.screen.width > ww+parseInt(getComputedStyle(items[i]).gap)*2){
    for( ii=0; ii<items.length; ii++){
        items[ii].style.display= 'grid';
    items[ii].style.gridTemplateColumns = "1fr 1fr 1fr";

    }}}
    else{
    for( ii=0; ii<items.length; ii++){
        items[ii].style.display= 'grid';
        items[ii].style.gridTemplateColumns = "1fr";
    //alert(item[i].clientHeight)
}}
    }
    
if (item.length==4){
    var ww=0;
    var children = items[i].childNodes;
    
    for (var ii = 0; ii < children.length; ++ii) {
        ww=ww+parseInt(getComputedStyle(children[ii].firstChild).width);
      }
      ww=ww+gap*3;
    //
console.log(items[i].clientHeight>= item[0].clientHeight*2);
    //if (parseInt(getComputedStyle(items[i]).width)< ww){
      if (items[i].clientHeight>= item[0].clientHeight*2){
        
    for(var ii=0; ii<items.length; ii++){
      console.log('1');
    items[i].style.display= "grid";
    items[i].style.gridTemplateColumns = "1fr 1fr";
    }//}
  }
    if (parseInt(getComputedStyle(items[i]).width)>= ww){
      items[0].style.display= 'nowrap';
    for(var ii=0; ii<items.length; ii++){
      
      items[ii].style.display= 'flex';
      items[ii].style.gridTemplateColumns = "repeat(4,1fr)";
      
}}}
}
}, 100);
}
);
  }
//window.onresize = function( event ) {
    //showMessage();
//};
let timerDuration = 0;
document.addEventListener("DOMContentLoaded", () => {
  
  popup();
  });
//timer



//popup
function popup() {
  timerPopupDuration = 20;
  timerDuration= 11904;
  timerRestart= timerDuration;
  var popupActivate=0;
const items = document.getElementsByClassName('popup__container');
// Функция для обновления таймера
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
   // Получить ссылки на элементы модального окна

   // При клике на кнопку отобразить модальное окно

   // При клике на крестик скрыть модальное окно

   // При клике вне модального окна скрыть его
   window.onclick = function(event) {
     if (event.target != document.getElementById("popup__container")) {
      document.getElementById("popup__container").style.display = "none";
     }
   }
// Запустить таймер каждую секунду



//burger

//scroll




