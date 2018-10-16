'use strict';

//=================
// Global Variables
//=================

var leftImage = document.getElementById('left');
var leftIndex;
var leftText = document.getElementById('left-text');
var centerImage = document.getElementById('center');
var centerIndex;
var centerText = document.getElementById('center-text');
var rightImage = document.getElementById('right');
var rightIndex;
var rightText = document.getElementById('right-text');
var totalRounds = 0;
var productLabels = [];
var productLikes = [];
var likeableProductLabels = [];
var likeableProductLikes = [];

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

        // Save results to local storage
        localStorage.setItem('productArray', JSON.stringify(Product.allProducts));

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

    if (!localStorage.getItem('productArray')) {
        // Create Product objects
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
    } else {
        Product.allProducts = JSON.parse(localStorage.getItem('productArray'));   
    }
    
    // Select Left
    leftIndex = Math.floor(Math.random() * Product.allProducts.length);
    leftImage.src = Product.allProducts[leftIndex].image;
    leftText.textContent = Product.allProducts[leftIndex].name;

    // Select Center
    do {
        centerIndex = Math.floor(Math.random() * Product.allProducts.length);
    } while (centerIndex === leftIndex)
    centerImage.src = Product.allProducts[centerIndex].image;
    centerText.textContent = Product.allProducts[centerIndex].name;

    // Select Right
    do {
        rightIndex = Math.floor(Math.random() * Product.allProducts.length);
    } while (rightIndex === leftIndex || rightIndex === centerIndex)
    rightImage.src = Product.allProducts[rightIndex].image;
    rightText.textContent = Product.allProducts[rightIndex].name;
}

var renderResults = function () {
    // Create heading
    // var results = document.getElementById('results');
    // results.textContent = 'Test Results:';

    // Create label and data arrays
    for(var i in Product.allProducts) {
        productLabels.push(Product.allProducts[i].name);
        productLikes.push(Product.allProducts[i].likes);

        if(Product.allProducts[i].likes > 0) {
            likeableProductLabels.push(Product.allProducts[i].name);
            likeableProductLikes.push(Product.allProducts[i].likes);
        }
    }

    // Create Bar Chart
    Chart.defaults.global.defaultFontFamily = "'Josefin Slab', sans-serif";
    var ctx = document.getElementById('myBarChart').getContext('2d');
    var barData = {
        labels: productLabels,
        datasets: [{
            label: "Product Likes",
            backgroundColor: 'pink',
            borderColor: 'black',
            data: productLikes,
        }] 
    };
    var barChartOptions = {
        responsive: true,
        animation: {easing: 'easeInCirc'},
    };
    var chart = new Chart(ctx, {
        type: 'bar', 
        data: barData, 
        options: barChartOptions,
    });

    // Create Pie Chart
    var ctx2 = document.getElementById('myPieChart').getContext('2d');
    var pieData = {
        labels: likeableProductLabels,
        datasets: [{
            label: "Percent of All Likes",
            backgroundColor: 'blue',
            borderColor: 'black',
            data: likeableProductLikes
        }]
    };
    var pieChartOptions = {
        responsive: true,
        animation: {
            easing: 'easeInCirc',
        },
    };
    var pieChart = new Chart(ctx2, {
        type: 'doughnut',
        data: pieData,
        options: pieChartOptions,
    });

    // Move browser down to chart
    window.location.href = 'index.html#myBarChart';
}

//===============
// Function Calls
//===============

randomStart();