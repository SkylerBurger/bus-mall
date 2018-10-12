//=================
// Global Variables
//=================

var leftImage = document.getElementById('left');
var leftIndex = 0; //This is hardcoded for the initial image
var leftText = document.getElementById('left-text')
var centerImage = document.getElementById('center');
var centerIndex = 1; //This is hardcoded for the initial image
var centerText = document.getElementById('center-text')
var rightImage = document.getElementById('right');
var rightIndex = 2; //This is hardcoded for the initial image
var rightText = document.getElementById('right-text')

//==========================
// Constructors & Prototypes
//==========================

var Product = function(name, imageLocation) {
    this.name = name;
    this.image = imageLocation;
    this.appearances = 0;
    this.likes = 0;
    this.index = Product.allProducts.length;
    Product.allProducts.push(this);
}

Product.allProducts = [];

//=============================
// Event Listeners and Handlers
//=============================

var testHandler = function(event) {
    console.log(event.target.id);
    if (event.target.id === 'left' || event.target.id === 'center' || event.target.id === 'right') {
        // Get random number for left image
        do {
            randomLeftIndex = Math.floor(Math.random() * Product.allProducts.length);
        } while (randomLeftIndex === leftIndex || randomLeftIndex === centerIndex || randomLeftIndex === rightIndex)
        leftImage.src = Product.allProducts[randomLeftIndex].image;
        leftIndex = randomLeftIndex;
        console.log(randomLeftIndex);
    }
}

var testZone = document.getElementById('products');
testZone.addEventListener('click', testHandler);

//===============
// Function Calls
//===============

var bag = new Product('Bag', 'img/bag.jpg');
var banana = new Product('Banana', 'img/banana.jpg');
var bathroom = new Product('Bathroom', 'img/bathroom.jpg');
var boots = new Product('Boots', 'img/boots.jpg');
var breakfast = new Product('Breakfast', 'img/breakfast.jpg');
var bubbleGum = new Product('Bubble Gum', 'img/bubblegum.jpg');
var chair = new Product('Chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulhu', 'img/cthulhu.jpg');