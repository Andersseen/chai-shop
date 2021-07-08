const serverUrl = 'http://localhost:3000/';
const itemsPath = 'items/';
const imagesPath = 'img/';

window.onload = getData();

const items = document.querySelector('.main__section');

function getData() {
    fetch(`${serverUrl}${itemsPath}`)
        .then((res) => res.json())
        .then((data) => printData(data));

}

function printData(data) {
    const itemContainer = document.createElement('div')
    itemContainer.className = 'section__container'

    data.forEach(item => {
        itemContainer.innerHTML += createDomElement(item)
        items.append(itemContainer)
    });
}

function createDomElement(item) {
    const itemHtml = `
        <div class="section__item item">
            <div class="item__cotainer">
                <h3 class="item__title">${item.title}</h3>
                <img class="item__image" src=${serverUrl}${imagesPath}${item.image}>

                <div class="item__details">
                    <h4 class="item__price">${item.price}€</h4>
                    <button class="item__button add-to-cart">AÑADIR AL CARRITO</button>
                </div>
            </div>
        </div>`
    return itemHtml;
}

