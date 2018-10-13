"use strict"

//=================
// Global Variables
//=================

var leftImage = document.getElementById('left');
var leftIndex = 0; //This is hardcoded for the initial image
var leftText = document.getElementById('left-text');
var centerImage = document.getElementById('center');
var centerIndex = 1; //This is hardcoded for the initial image
var centerText = document.getElementById('center-text');
var rightImage = document.getElementById('right');
var rightIndex = 2; //This is hardcoded for the initial image
var rightText = document.getElementById('right-text');
var totalRounds = 0;

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
        // Increment counters
        totalRounds++;
        Product.allProducts[leftIndex].appearances++;
        Product.allProducts[centerIndex].appearances++;
        Product.allProducts[rightIndex].appearances++;
        if (event.target.id === 'left') {
            Product.allProducts[leftIndex].likes++;
        } else if (event.target.id === 'center') {
            Product.allProducts[centerIndex].likes++;
        } else {
            Product.allProducts[rightIndex].likes++;
        }

        // Get random number for left image
        do {
            var randomLeftIndex = Math.floor(Math.random() * Product.allProducts.length);
        } while (randomLeftIndex === leftIndex || randomLeftIndex === centerIndex || randomLeftIndex === rightIndex)
        leftImage.src = Product.allProducts[randomLeftIndex].image;
        leftText.textContent = Product.allProducts[randomLeftIndex].name;
        
        // Get random number for center image
        do {
            var randomCenterIndex = Math.floor(Math.random() * Product.allProducts.length);
        }while (randomCenterIndex === leftIndex || randomCenterIndex === randomLeftIndex || randomCenterIndex === centerIndex || randomCenterIndex === rightIndex)
        centerImage.src = Product.allProducts[randomCenterIndex].image;
        centerText.textContent = Product.allProducts[randomCenterIndex
        ].name;

        // Get random number for right image
        do {
            var randomRightIndex = Math.floor(Math.random() * Product.allProducts.length);
        } while ( randomRightIndex === leftIndex || randomRightIndex === randomLeftIndex || randomRightIndex === centerIndex || randomRightIndex === randomCenterIndex || randomRightIndex === rightIndex)
        rightImage.src = Product.allProducts[randomRightIndex].image;
        rightText.textContent = Product.allProducts[randomRightIndex].name;

        // Update all indices
        leftIndex = randomLeftIndex;
        centerIndex = randomCenterIndex;
        rightIndex = randomRightIndex;
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