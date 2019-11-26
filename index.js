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

    console.log(recipe['strIngredient2'])
    let container = document.createElement('div')
    let cName = document.createElement('h2')
    let iTitle = document.createElement('h3')
    let instructionsTitle = document.createElement('h3')
    let image = document.createElement('img')
    let ingList = document.createElement('ul')
    for (let i = 1; i<= 15; i++) {
        if (recipe['strIngredient'+i]!=null){
            let li = document.createElement('li')
            li.innerText = recipe['strIngredient'+i]
            ingList.appendChild(li)
        }
    }
    let ins = document.createElement('p')
    cName.innerText = recipe.strDrink
    iTitle.innerText = "Ingredients"
    instructionsTitle.innerText = "Instuctions"
    ins.innerText = recipe.strInstructions
    image.src = recipe.strDrinkThumb 
    container.appendChild(cName)
    container.appendChild(image)
    container.appendChild(iTitle)
    container.appendChild(ingList)
    container.appendChild(instructionsTitle)
    container.appendChild(ins)
    recipeCard.appendChild(container)
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

