let cartItems = [];
let totalPrice = 0;

const buyNowButton = document.getElementById('buy-now');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

buyNowButton.addEventListener('click', () => {
    const item = 'Product Title';
    const price = 99.99;

    cartItems.push({ item, price });
    totalPrice += price;

    updateCart();
});

function updateCart() {
    cartItemsList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

// Switch main image when thumbnail is clicked
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        mainImage.src = event.target.src;
    });
});
