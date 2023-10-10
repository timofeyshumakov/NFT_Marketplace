//adaptive
var gap='60';
var arr = new Map([
    ['cards', 'card']
  ]);

  function showMessage() {
  arr.forEach(function(adaptiveElement,adaptiveBlock) {
const items = document.getElementsByClassName(adaptiveBlock);

setTimeout(() => {

    for(var i=0; i<items.length; i++) {
    const item = items[i].getElementsByClassName(adaptiveElement);
    
if (item.length==3){
    var ww=0;

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
window.onresize = function( event ) {
    //showMessage();
};
document.addEventListener("DOMContentLoaded", () => {
    //showMessage()
  });

//popup

//burger

//scroll


// Scroll

