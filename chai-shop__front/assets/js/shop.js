// add buttons
const addToShoppingCartButtons = document.querySelectorAll('.add-to-cart');
addToShoppingCartButtons.forEach(el => {
    el.addEventListener('click', addToCartClicked);

});


// button but
const comprarButton = document.querySelector('.shopping-cart__buy');
comprarButton.addEventListener('click', comprarButtonClicked);

// shopping container
const shoppingCartItemsContainer = document.querySelector('#shopping-cart-container');

//funcion for buttons add
function addToCartClicked(e) {
    const button = e.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item__title').textContent;
    const itemPrice = item.querySelector('.item__price').textContent;
    const itemImage = item.querySelector('.item__image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
};


// funcion for added items in shopping cart
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.querySelectorAll('.shopping-item__title');

    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.querySelector('.item__quantity');
            elementQuantity.value++;
            updateShoppingCartTotal();
            return
        }
    }

    const shoppingCartRow = document.createElement('div');
    shoppingCartRow.classList.add('shopping__row');
    const shoppingCartContent = `
                    <div class="shopping__item">
                        <h3 class="shopping-item__title">${itemTitle}</h3>


                        <div class="shopping-item__details">
                            <img class="shopping-item__image" src=${itemImage}>
                            <h4 class="shopping-item__price">${itemPrice}</h4>
                            <button class="shopping-item__button delete-to-cart">BORRAR</button>
                        </div>
                    </div>

                    <div class="shopping__counter">
                        <input type="number" value="1" class="item__quantity">
                    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow
        .querySelector('.delete-to-cart')
        .addEventListener('click', removeShoppingCartItem);

    shoppingCartRow
        .querySelector('.item__quantity')
        .addEventListener('change', quantityChanged);

    updateShoppingCartTotal();
};


// counter total
function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.price__total');

    const shoppingCartItems = document.querySelectorAll('.shopping__row');

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shopping-item__price'
        );
        const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('€', '')
        );
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.item__quantity'
        );
        const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value
        );
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
}


//remove items
function removeShoppingCartItem(e) {
    const buttonClicked = e.target;
    buttonClicked.closest('.shopping__row').remove();
};

//update in change input
function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}

//buy items
function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
}