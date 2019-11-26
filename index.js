const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

function drinkRecipe(drinks) {
    drinks.forEach(drink => {
        fetch ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drink.idDrink)
        .then(response => response.json())
        .then(json => displayRecipe(json.drinks[0]))
    });
};

function displayRecipe(recipe) {
    let recipeCard = document.querySelector('body')
    console.log(recipe)
    let container = document.createElement('div')
    let cName = document.createElement('h2')
    let iTitle = document.createElement('h3')
    let instructionsTitle = document.createElement('h3')
    let image = document.createElement('img')
    let ingList = document.createElement('ul')
    let ins = document.createElement('p')
    cName.innerText = recipe.strDrink
    container.appendChild(cName)
    recipeCard.appendChild(container)
    recipeCard.appendChild(iTitle)
}

document.getElementById("drinkPicker").addEventListener('submit',drinker)
function drinker(e) {
e.preventDefault()
let myLiquor = document.getElementById('alcohol').value
console.log(myLiquor)
fetch (baseURL + myLiquor)
.then(response => response.json())
.then(json => drinkRecipe(json.drinks))
}

