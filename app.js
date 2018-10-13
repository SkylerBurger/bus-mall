"use strict"

//=================
// Global Variables
//=================

var leftImage = document.getElementById('left');
var leftIndex; //This is hardcoded for the initial image
var leftText = document.getElementById('left-text');
var centerImage = document.getElementById('center');
var centerIndex; //This is hardcoded for the initial image
var centerText = document.getElementById('center-text');
var rightImage = document.getElementById('right');
var rightIndex; //This is hardcoded for the initial image
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
    // Make sure you clicked on an image
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

        // End test if 25 rounds have been completed
        if (totalRounds >= 25) {
            testZone.removeEventListener('click', testHandler);
            renderResults();
        }
    }
}

var testZone = document.getElementById('products');
testZone.addEventListener('click', testHandler);

//==========
// Functions
//==========

var randomStart = function() {
    // Left
    leftIndex = Math.floor(Math.random() * Product.allProducts.length);
    leftImage.src = Product.allProducts[leftIndex].image;
    leftText.textContent = Product.allProducts[leftIndex].name;

    // Center
    do {
        centerIndex = Math.floor(Math.random() * Product.allProducts.length);
    } while (centerIndex === leftIndex)
    centerImage.src = Product.allProducts[centerIndex].image;
    centerText.textContent = Product.allProducts[centerIndex].name;

    // Right
    do {
        rightIndex = Math.floor(Math.random() * Product.allProducts.length);
    } while (rightIndex === leftIndex || rightIndex === centerIndex)
    rightImage.src = Product.allProducts[rightIndex].image;
    rightText.textContent = Product.allProducts[rightIndex].name;
}

var renderResults = function () {
    var results = document.getElementById('results');
    var h2El = document.createElement('h2');
    h2El.textContent = 'Test Results:';
    results.appendChild(h2El);
    var ulEl = document.createElement('ul');
    var liEl = document.createElement('li');

    // Check all products for ones with likes
    for(var i in Product.allProducts) {
        if (Product.allProducts[i].likes > 0) {
            liEl = document.createElement('li');
            liEl.textContent += Product.allProducts[i].likes;
            liEl.textContent += " votes for the ";
            liEl.textContent += Product.allProducts[i].name;
            ulEl.appendChild(liEl);
        }
    }

    results.appendChild(ulEl);
}

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
var dogDuck = new Product('Dog Duck', 'img/dog-duck.jpg');
var dragon = new Product('Dragon', 'img/dragon.jpg');
var pen = new Product('Pen', 'img/pen.jpg');
var petSweep = new Product('Pet Sweep', 'img/pet-sweep.jpg');
var scissors = new Product('Scissors', 'img/scissors.jpg');
var shark = new Product('Shark', 'img/shark.jpg');
var sweep = new Product('Sweep', 'img/sweep.png');
var tauntaun = new Product('Tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product('Unicorn', 'img/unicorn.jpg');
var usb = new Product('USB', 'img/usb.gif');
var waterCan = new Product('Water Can', 'img/water-can.jpg');
var wineGlass = new Product('Wine Glass', 'img/wine-glass.jpg');

randomStart();