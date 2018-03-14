const quotation = document.getElementById('quote');

const moveLeft = document.getElementById('buttonLeft');
const moveRight = document.getElementById('buttonRight');

const itemForSale = document.getElementById('switchProduct');

const themButton = document.getElementById('them');

const poorTrees = document.getElementsByClassName('treeKiller');

const usButton = document.getElementById('us');

themButton.addEventListener('click', function() {
  // poorTrees[0].classList.remove('lorax1');
  poorTrees[0].classList.add('onceler1');
  // poorTrees[1].classList.remove('lorax2');
  poorTrees[1].classList.add('onceler2');
  // poorTrees[2].classList.remove('lorax3');
  poorTrees[2].classList.add('onceler3');
  // poorTrees[3].classList.remove('lorax4');
  poorTrees[3].classList.add('onceler4');
  // poorTrees[4].classList.remove('lorax5');
  poorTrees[4].classList.add('onceler5');
})

usButton.addEventListener('click', function() {
  poorTrees[0].classList.remove('onceler1');
  // poorTrees[0].classList.add('lorax1');
  poorTrees[1].classList.remove('onceler2');
  // poorTrees[1].classList.add('lorax2');
  poorTrees[2].classList.remove('onceler3');
  // poorTrees[2].classList.add('lorax3');
  poorTrees[3].classList.remove('onceler4');
  // poorTrees[3].classList.add('lorax4');
  poorTrees[4].classList.remove('onceler5');
  // poorTrees[4].classList.add('lorax5');
})
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
