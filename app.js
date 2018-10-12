//=================
// Global Variables
//=================

//==========================
// Constructors & Prototypes
//==========================

var Product = function(name, imageLocation) {
    this.name = name;
    this.image = imageLocation;
    this.appearances = 0;
    this.likes = 0;
    Product.allProducts.push(this);
}

Product.allProducts = [];

//=============================
// Event Listeners and Handlers
//=============================

var testHandler = function(event) {
    console.log(event.target.id);
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