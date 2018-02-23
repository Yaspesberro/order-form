'use strict';

var dropMenu = document.getElementById('dropdown');
var userForm = document.getElementById('user-form');
var productForm = document.getElementById('product-container');
Product.all = [];

//Need to check local storage if user exits/ has products in cart, etc.
function User(name, street, city, state, zip, phone) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;

  //Array of products in the user cart
  this.cart = [];
}

//Creates user, 
function setupUser() {

}

User.prototype.addProduct = function(product, quantity) {
  for(var i = 0; i < quantity; i++) {
    this.cart.push(product);
  }
  console.log('Cart: ' + this.cart);
};

function Product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.index = Product.all.length;

  //Create dropdown list option element
  var opEl = document.createElement('option');
  opEl.value = Product.all.length;
  opEl.textContent = name;
  dropMenu.appendChild(opEl);

  Product.all.push(this);
}

//Instantiate all 20 picture objects
new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog-duck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet-sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('Usb', 'img/usb.gif');
new Product('Water-can', 'img/water-can.jpg');
new Product('Wine-glass', 'img/wine-glass.jpg');

function menuChange() {
  var imgEl = document.getElementById('image');
  var productIndex = dropMenu.options[dropMenu.selectedIndex].value;
  imgEl.src = Product.all[productIndex].filePath;
  console.log(Product.all[productIndex]);
}
dropMenu.addEventListener('change', menuChange);

var user;
user = new User('Yannick', '3230 NE 100th St.', 'Seattle', 'Washington', 98125, 2069792191);

//If user doesn't exist, add user to local storage
if(!localStorage.getItem('user')) {
  user = JSON.parse(localStorage.getItem('user'));
  productForm.appendChild(document.createElement('p').textContent = 'Welcome Back, ' + user.name);

} else {
  //Call form function
  userForm.style.visibility = 'visible';
  localStorage.setItem('user', JSON.stringify(user));
  
}

