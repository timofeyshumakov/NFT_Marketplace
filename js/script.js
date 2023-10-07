const cards = document.getElementsByClassName('cards');

function showMessage() {

  
setTimeout(() => {
    for(var i=0; i<cards.length; i++) {
    const card = cards[i].getElementsByClassName('card');

    if (cards[i].clientHeight>= card[0].clientHeight*2){
    if (card.length=3){
        



        if (window.screen.width >= '1200'){

            for(var ii=0; ii<card.length; ii++) {
           card[ii].style.width='30%';
           
        }}
else{


  for(var ii=0; ii<card.length; ii++) {
    card[ii].style.width='50%';

    //alert(card[i].clientHeight)
}
}
    }

}



}}, 100);
}

window.onresize = function( event ) {
    showMessage();
};
    

