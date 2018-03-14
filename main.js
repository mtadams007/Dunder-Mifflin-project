const quotation = document.getElementById('quote');

const moveLeft = document.getElementById('buttonLeft');
const moveRight = document.getElementById('buttonRight');

const itemForSale = document.getElementById('switchProduct');

//Moves items from right to left to view
moveLeft.addEventListener('click', function(e) {
  // debugger;
  if (itemForSale.classList.contains('productOne')) {

    // itemForSale.classList.add('leaveLeft');
    itemForSale.classList.add('productTwo');
    itemForSale.classList.remove('productOne');
    itemForSale.innerHTML ="<img src='images/notebooks.jpeg' class='productTwo product comeFromRight'>";
  } else if (itemForSale.classList.contains('productTwo')) {
    itemForSale.classList.add('productThree');
    itemForSale.classList.remove('productTwo');
    itemForSale.innerHTML ="<img src='images/envelopes.jpeg' class='productThree product comeFromRight'>";
  } else {
    itemForSale.classList.add('productOne');
    itemForSale.classList.remove('productThree');
    itemForSale.innerHTML ="<img src='images/paper1.jpeg' class='productOne product comeFromRight'>";
  }
});

//Moves items from left to right to view
moveRight.addEventListener('click', function(e) {
  // debugger;
  if (itemForSale.classList.contains('productOne')) {

    // itemForSale.classList.add('leaveLeft');
    itemForSale.classList.add('productThree');
    itemForSale.classList.remove('productOne');
    itemForSale.innerHTML ="<img src='images/envelopes.jpeg' class='productThree product comeFromLeft'>";
  } else if (itemForSale.classList.contains('productTwo')) {
    itemForSale.classList.add('productOne');
    itemForSale.classList.remove('productTwo');
    itemForSale.innerHTML ="<img src='images/paper1.jpeg' class='productOne product comeFromLeft'>";
  } else {
    itemForSale.classList.add('productTwo');
    itemForSale.classList.remove('productThree');
    itemForSale.innerHTML ="<img src='images/notebooks.jpeg' class='productTwo product comeFromLeft'>";
  }
});
