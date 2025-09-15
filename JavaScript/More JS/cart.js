const handleProducts = () => {
    const productElement = document.getElementById('product')
    const quantityElement = document.getElementById('quantity')
    const product = productElement.value;
    const quantity = quantityElement.value;

    console.log('product add:', product, quantity);

    displayProduct(product, quantity)
    
    productElement.value = '';
    quantityElement.value = '';

}

const displayProduct = (product, quantity) => {
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`

    // get ul
    const ul = document.getElementById('products-container')
    ul.appendChild(li)
}