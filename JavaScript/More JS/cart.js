const handleProducts = () => {
    const productElement = document.getElementById('product')
    const quantityElement = document.getElementById('quantity')
    const product = productElement.value;
    const quantity = parseInt(quantityElement.value);

    // console.log('product add:', product, quantity);

    displayProduct(product, quantity)
    addProductToCart(product, quantity)

    productElement.value = '';
    quantityElement.value = '';

}

const getCart = () => {
    const cart = {};

    const cartJSON = localStorage.getItem('cart')
    if(cartJSON){
        cart = JSON.parse(cartJSON)
    }
    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart();

    if(cart[product]){
        cart[product] = cart[product] + quantity;
    }
    else{
        cart([product]) = quantity;
    }
    
    console.log('cart', cart)

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON)
}
const displayProduct = (product, quantity) => {
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`

    // get ul
    const ul = document.getElementById('products-container')
    ul.appendChild(li)
}

// display product from stored local storage

const displayStoredProducts = () => {
    const cart = getCart();
    for(product in cart){
        const quantity = cart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}
displayStoredProducts()

/**
 * To save Object/array in the local storage
 * 
 * 1. convert the object to JSON string by using JSON.stringify
 * 2. localstorage.setItem()
 */

/**
 * To get Object/array from the local storage
 * 1. get the item form the local storage and it will be in JSON string
 * 
 * 2.  convert the JSON string to JS object by using JSON.parse
 * 
 */