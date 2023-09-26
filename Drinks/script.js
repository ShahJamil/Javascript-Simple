let grid_container = document.querySelector('.grid_container')
let inp = document.querySelector('#inp')

function getApi(api) {
    fetch(api)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.drinks[0].strCategory);
            data.drinks.forEach(e => {
                // console.log(e.strDrink);
                // console.log(e.strInstructions.substr(0,70));
                // console.log(e.strDrinkThumb);

                grid_container.innerHTML += `
            <div class="grid_card">
          <div class="grid_img">
            <img src=${e.strDrinkThumb} alt="" />
          </div>
          <h2>${e.strDrink}</h2>
          <p>${e.strInstructions.substr(0, 70)}</p>
        </div>
            `
            });

            let grid_card = document.querySelectorAll('.grid_card');
            grid_card.forEach(e => {
                let red = Math.floor(Math.random() * 255)
                let blue = Math.floor(Math.random() * 255)
                let green = Math.floor(Math.random() * 255)
                e.style.borderTop = `23px solid rgb(${red}, ${green}, ${blue})`
            })

        })
}
getApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')



inp.addEventListener('change', () => {
    getApi(`link/inp.value`)
    console.log(inp.value);
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
        .then(resp => resp.json())
        .then(data => {
            let drink = data.drinks.find(e => e.strDrink.toLowerCase() == inp.value.toLowerCase());
            // console.log(drink);
            grid_container.innerHTML = `
            <div class="grid_card">
          <div class="grid_img">
            <img src=${drink.strDrinkThumb} alt="" />
          </div>
          <h2>${drink.strDrink}</h2>
          <p>${drink.strInstructions.substr(0, 70)}</p>
        </div>
            `
        });
})




fetch('https://api.coinpaprika.com/v1/coins')
.then(e=>e.json())
.then(data=>{
    console.log(data);
})