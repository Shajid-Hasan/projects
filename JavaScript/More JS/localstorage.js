const addNumberToLs = () => {
    const number = Math.ceil(Math.random()*100)
    console.log(number)
    localStorage.setItem('number', number)
}

const setObjectToLs = () => {
    const customer = {
        name: 'Rahim',
        age : 30
    }
    const customerJSON = JSON.stringify(customer);

    localStorage.setItem('customer', customerJSON);

}

const readObjectToLs = () => {
const customerJSON = localStorage.getItem('customer');
const customer = JSON.parse(customerJSON)
console.log(customer.name)
}



const getNumberFromLs = () => {
    const number = localStorage.getItem('number');
    console.log('form saved local storage', number)
}