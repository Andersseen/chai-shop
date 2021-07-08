const addToShoppingCartButtons = document.querySelectorAll('.add-to-cart');
addToShoppingCartButtons.forEach(el => {
    el.addEventListener('click', addToCartClicked);

});

const shoppingCartItemsContainer = document.querySelector('#shopping-cart-container');


function addToCartClicked(e) {
    const button = e.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item__title').textContent;
    const itemPrice = item.querySelector('.item__price').textContent;
    const itemImage = item.querySelector('.item__image').src;

    console.log(itemTitle, itemPrice, itemImage);
}


