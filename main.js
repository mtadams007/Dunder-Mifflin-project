// const product1 = document.getElementsByClassName('productOne');
//
// const product2 = document.getElementsByClassName('productTwo');
//
// const product3 = document.getElementsByClassName('productThree');

const moveLeft = document.getElementById('buttonLeft');
const moveRight = document.getElementById('buttonRight');

const itemForSale = document.getElementById('switchProduct');

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
