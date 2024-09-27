const itemNames = ["Laptop", "Phone"];
const itemPrices = [1000, 500];
const itemQuantities = [1, 2];
const itemInStock = [true, true];


const ShoppingCart = () => {

const cart = [];

const addItemToCart = (itemIndex) => {
  if (itemInStock[itemIndex]) {
    cart.push(itemIndex); // Store the index of the item in the cart
    console.log(`${itemNames[itemIndex]} added to the cart`);
  } else {
    console.log(`${itemNames[itemIndex]} is out of stock`);
  }
};

  const removeItemFromCart = (itemIndex) => {
    const index = cart.indexOf(itemIndex);
    if (index > -1) {
      cart.splice(index, 1);
    }
  };

  const getCartItems = () => {
    return cart.map(itemIndex => itemNames[itemIndex]);
  };
  
  
  const calculateTotal = () => {
    return cart.reduce((total, itemIndex) => {
      return total + itemPrices[itemIndex] * itemQuantities[itemIndex];
    }, 0);
  };

  return {
    addItemToCart,
    removeItemFromCart,
    calculateTotal,
    getCartItems
  };

};


const myCart = ShoppingCart();
myCart.addItemToCart(0); 
console.log(myCart.getCartItems());
console.log(myCart.calculateTotal()); 