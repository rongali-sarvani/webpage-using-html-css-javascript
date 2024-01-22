let total = 0;
let cartItems = [];


const menu = [
    { id: 1, name: 'Chicken Biryani'  , price: 299 },
    { id: 2, name: 'Vegetable Biryani', price: 199},
    { id: 3, name: 'Mutton Biryani'   , price: 399},
    { id: 4, name: 'Hyderabadi Biryani', price: 320},
    { id: 5, name: 'Prawn Biryani'    , price: 399},
    { id: 6, name: 'Veg Manchuria'    , price: 220},
    { id: 7, name: 'Chicken Manchuria', price: 320},
    { id: 8, name: 'Fish Biryani'     , price: 399}
    

];




function addToCart(itemId) {
    const selectedItem = menu.find(item => item.id === itemId);

    if (selectedItem) {
        total += selectedItem.price;

        const cartItem = { id: selectedItem.id, name: selectedItem.name, price: selectedItem.price };
        cartItems.push(cartItem);

        updateCart();
        updateTotal();
    }
}

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    total -= removedItem.price;

    updateCart();
    updateTotal();
}



function updateTotal() {
    document.getElementById('total').innerText = `Total: Rs${total.toFixed(2)}`;
}

// Display the initial menu
displayMenu();


function displayMenu() {
    const menuList = document.getElementById('menu-list');

    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <strong>${item.name}</strong> - Rs ${item.price.toFixed(2)}
            <div class="button-container">
                <button class="addToCart" onclick="addToCart(${item.id})">Add to Cart</button>
                
            </div>
        `;

        menuList.appendChild(menuItem);
    });
}



function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div class="item-info">
                <strong>${item.name}</strong> - Rs ${item.price.toFixed(2)}
            </div>
            <div class="button-container">
                <button class="removeFromCart" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;

        cartList.appendChild(cartItem);
    });
}



