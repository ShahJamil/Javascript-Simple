let grid_container = document.querySelector('.grid_container')
let totalP = document.querySelector('#totalP')
let totalC = document.querySelector('#totalC')


let basket = [];
if (localStorage.getItem('basket')) {
    basket = JSON.parse(localStorage.getItem('basket'))
}
console.log(basket);

function showBasket() {
    grid_container.innerHTML = '';
    let totalCount = 0;
    let totalPrice = 0;
    basket.forEach(e => {

        totalPrice += e.count_price;
        totalCount += e.count;

        grid_container.innerHTML += `
        <div class="grid_card">
        <div class="card_img1">
            <img src=${e.Image} alt="">
            <div class="text">
            <h2 class="h_5">ADI:${e.name}</h2>
            <h2 class="h_2">QIYMETI:${e.count_price}</h2>
            </div>
            </div>
            <div class="btn">
                <button onclick="changeCount(${e.id},'artir')">+</button>
                <span>${e.count}</span>
                <button onclick="changeCount(${e.id},'azalt')">-</button>
            </div>
       

    </div>
        `
    })
    totalC.innerHTML = totalCount;
    totalP.innerHTML = totalPrice;


}
window.addEventListener('load', () => {
    showBasket()
})

function changeCount(id, type) {
    let checkItem = basket.find(e => e.id == id);
    console.log(checkItem);
    if (type == 'artir') {
        checkItem.count++;
        checkItem.count_price = checkItem.price * checkItem.count;
    } else if (type == 'azalt') {
        checkItem.count--;
        if (checkItem.count > 0) {
            checkItem.count_price = checkItem.price * checkItem.count;
        } else {
            let index = basket.findIndex(e => e.id == id);
            basket.splice(index, 1);
        }
    }
    localStorage.setItem('basket', JSON.stringify(basket))
    showBasket();
}