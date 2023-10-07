const els = document.getElementsByClassName('cards');


setTimeout(() => {
    const card = els[0].getElementsByClassName('card');
    if (els[0].clientHeight>= card[0].clientHeight*2){
    if (card.length=3){
  // вставим на страницу новый <li>
  //document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>Three</li>');
// выведем количество <li> в консоль
  console.log(`Количество <li>: ${els.length}`); // 3
  
  
  for(var i=0; i<card.length; i++) {
    card[i].style.width='50%';
    //alert(card[i].clientHeight)
}
    }
}
alert(els[0].clientHeight);
alert(card[0].clientHeight);
}, 1000);
