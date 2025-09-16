const handelAddStorage = () => {
    const name = document.getElementById('name').value
    const id = document.getElementById('id').value

    // local storage set item key & value
    const data = {id, name}

    // convert to string
    localStorage.setItem(id, JSON.stringify(data))
}

    // get set item by key
const storedItem = localStorage.getItem('123')
    
    // remove item
const removeItem = localStorage.removeItem('125')

    // convert to object
console.log(JSON.parse(storedItem));

    // clear local storage
const handleClear = () => {
    localStorage.clear()
}