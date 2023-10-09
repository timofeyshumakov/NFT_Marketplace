//adaptive

var arr = new Map([
    ['cards', 'card'],
    ['clients__container', 'clients__img']
  ]);

  function showMessage() {
  arr.forEach(function(adaptiveElement,adaptiveBlock) {
const items = document.getElementsByClassName(adaptiveBlock);

setTimeout(() => {

    for(var i=0; i<items.length; i++) {
    const item = items[i].getElementsByClassName(adaptiveElement);
    
if (item.length==3){
    var ww=0;
    console.log(item.length);
    var children = items[i].childNodes;
    for (var ii = 0; ii < children.length; ++ii) {
        ww=ww+parseInt(getComputedStyle(children[ii]).width);
        
      }
      
    if (items[i].clientHeight >= item[0].clientHeight*3){
    if (window.screen.width > ww+parseInt(getComputedStyle(items[i]).gap)*2){
    for(var ii=0; ii<items.length; ii++){
        items[ii].style.display= 'grid';
    items[ii].style.gridTemplateColumns = "1fr 1fr 1fr";
    }}}
    else{
    for(var ii=0; ii<items.length; ii++){
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
    
    if (items[i].clientHeight>= item[0].clientHeight*2){
    if (parseInt(getComputedStyle(items[i]).width)< ww+parseInt(getComputedStyle(items[i]).gap)*3){
      console.log(items.length);
    for(var ii=0; ii<items.length; ii++){
    items[ii].style.display= 'grid';
    items[ii].style.gridTemplateColumns = "1fr 1fr";
    }}
    else{
    for(var ii=0; ii<items[i].length; ii++){
    items[ii].style.display= 'flex';
}}}}
}
}, 100);
}
);
  }
window.onresize = function( event ) {
    showMessage();
};
document.addEventListener("DOMContentLoaded", () => {
    showMessage()
  });

//popup

//burger

//scroll

