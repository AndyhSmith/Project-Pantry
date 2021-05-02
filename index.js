//#################################################################################
// S T Y L E S
//#################################################################################
var cs = {
    inCart:"blue",
    inPantry:"black",
    missing:"darkred",
    quantity:"blue",
    selected: "#A2C0D9",

    selectedNavTextShadow: "0px 0px 15px white, 0px 0px 15px white",
    selectedNavTextColor: "white",
    selectedBackgroundColor: "#1bb444",
    none: "none",
    normalBackgroundColor: "forestGreen",
    normalNavTextColor: "#AFC5DF",
    
    activeButton: "lightblue",
    inactiveButton: "white",
}


//#################################################################################
// L O C A L   S T O R A G E   &   S E T U P
//#################################################################################

var pantry = []
if (!localStorage.pantry) {
    localStorage.pantry = []
}

var shoppingList = []
if (!localStorage.shoppingList) {
    localStorage.shoppingList = []
}

var recipeFavorites = []
if (!localStorage.recipeFavorites) {
    localStorage.recipeFavorites = []
}

var customIngredients = []
if (!localStorage.customIngredients) {
    localStorage.customIngredients = []
}

var customRecipes = []
if (!localStorage.customRecipes) {
    localStorage.customRecipes = []
}

// Update DOM
function startDOM() {
    // Load Panty
    let localStorageContent = localStorage.getItem('pantry')
    if (localStorageContent != '') {
        pantry = JSON.parse(localStorageContent)
    }
    else {
        pantry = [{"name":"ground beef","quantity":1},{"name":"baking powder","quantity":1},{"name":"butter","quantity":1},{"name":"egg","quantity":4},{"name":"flour","quantity":1},{"name":"milk","quantity":1},{"name":"oil","quantity":1},{"name":"salt","quantity":1},{"name":"sugar","quantity":1}]
    }

    // Load  Shopping List
    let localShoppingListStorage = localStorage.getItem('shoppingList')
    if (localShoppingListStorage != '') {
        shoppingList = JSON.parse(localShoppingListStorage)
    }
    else {
        shoppingList = [{"name":"carrots","quantity":1},{"name":"onion","quantity":1},{"name":"rice","quantity":1}]
    }

    // Load Tutorial Data
    let localStorageFirstTime = localStorage.getItem('firstTime')
    if (localStorageFirstTime != '') {
        if (localStorageFirstTime == "true") {
            skipTutorial()
        }
        else {
            loadStartPage()
        }
    }

    // Load Favorites
    let recipeFavoriteLocalData = localStorage.getItem('recipeFavorites')
    recipeFavorites = ["Crepes (fancy)", "Autumn Soup"]
    if (recipeFavoriteLocalData != '') {
        recipeFavorites = JSON.parse(recipeFavoriteLocalData)
    }

    // Load Custom Ingredients
    let customIngredientsLocalData = localStorage.getItem('customIngredients') 
    if (customIngredientsLocalData != '') {
        customIngredients = JSON.parse(customIngredientsLocalData)
        ingredients = ingredients.concat(customIngredients)
    }

    // Load Custom Recipes
    let customRecipesLocalData = localStorage.getItem('customRecipes') 
    if (customRecipesLocalData != '') {
        customRecipes = JSON.parse(customRecipesLocalData)
        recipes = recipes.concat(customRecipes)
    }

    viewRecipes()
    userAddFood()
}

function clearLocalSavedData() {
    localStorage.clear();
    location.reload();
}

function saveLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    localStorage.setItem('pantry', JSON.stringify(pantry));
}

//#################################################################################
// I N G R E D I E N T   F I N D E R
//#################################################################################
var ingredientWhere = "pantry"
var numberOfIngredients = ingredients.length
function userAddFood() { 
    // Get Input
    userInput = document.getElementById("add-food").value.toLowerCase()

    // Set Title
    if (ingredientWhere == "pantry") {
        document.getElementById("add-ingredient-title").innerHTML = "<i class='fas fa-arrow-left back-arrow' onclick='goToPreviousPage()'></i> Add Ingredient to Pantry (" + numberOfIngredients + ")"
    } else if (ingredientWhere == "shoppingList") {
        document.getElementById("add-ingredient-title").innerHTML = "<i class='fas fa-arrow-left back-arrow' onclick='goToPreviousPage()'></i> Add Ingredient to Shopping List (" + numberOfIngredients + ")"
    }
    

    ingredientSearchResults = ""
    let counter = 0
    for (i in ingredients) { 
        // If Match
        if ((userInput == ingredients[i].name.substring(0, userInput.length)) && (counter <= 9)) { // if input matches start of ingredient
            ingredientSearchResults += "<div class='ingredient' onclick='"
            if (ingredientWhere == "pantry") {
                ingredientSearchResults += "addToPantry"
            } else if (ingredientWhere == "shoppingList") {
                ingredientSearchResults += "addToShoppingList"
            }
            
            ingredientSearchResults += "(" + i + ")'><span>" + ingredients[i].name 
            let foundInLocation = false
            let locationCount = 0

            if (ingredientWhere == "pantry") {
                for (p in pantry) { // add quantity form pantry
                    if(pantry[p].name == ingredients[i].name) {
                        foundInLocation = true
                        locationCount = pantry[p].quantity
                        break;
                    }
                }
            } else if (ingredientWhere == "shoppingList") {
                for (p in shoppingList) { // add quantity form pantry
                    if(shoppingList[p].name == ingredients[i].name) {
                        foundInLocation = true
                        locationCount = shoppingList[p].quantity
                        break;
                    }
                }
            }
            
            if (foundInLocation) {
                ingredientSearchResults += "<span style='color:" + cs.quantity + "'>" + " x " + locationCount + "</span></span></div>"; 
            }
            ingredientSearchResults += "</div>";
            counter += 1;
        }
    }
    
    // if no results
    if (ingredientSearchResults == '') {
        ingredientSearchResults = '<button id="add-custom-ingredient-button" onclick="addCustomIngredient()">Add as Custom Ingredient</button>'
    }


    document.getElementById("ingredient-search-results").innerHTML = ingredientSearchResults;
}

function addCustomIngredient() {
    let customIngredientName = document.getElementById("add-food").value.toLowerCase()
    let ingredientExists = checkIfIngredientExists(customIngredientName)
    if (ingredientExists == -1) {
        newIngredient = {name:customIngredientName}
        customIngredients.push(newIngredient)
        ingredients.push(newIngredient)
        localStorage.setItem('customIngredients', JSON.stringify(customIngredients));
    }
    userAddFood()
}

function checkIfIngredientExists(ingredientName) {
    for (let index in ingredients) {
        if (ingredientName == ingredients[index].name) {
            return index;
        }
    }
    return -1;
}

function getItemID(itemName) {
    let itemID = -1
    for (theItem in ingredients) {
        if (ingredients[theItem].name == itemName) {
            itemID = theItem;
            break;
        }
    }
    return itemID
}

//#################################################################################
// S H O P P I N G   L I S T  
//#################################################################################
function removeFromShoppingList(itemID) {
    console.log(shoppingList, shoppingList[itemID], shoppingList.length)
    if (shoppingList[itemID].quantity <= 1) {
        shoppingList.splice(itemID, 1)
    }
    else {
        shoppingList[itemID].quantity -= 1;
    }
    updateShoppingListDOM()
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function removeFromShoppingListByName(itemName) {
    // get shopping list id
    let itemShoppingListID = -1
    for (aItem in shoppingList) {
        if (shoppingList[aItem].name == itemName) {
            itemShoppingListID = aItem
            break
        }
    }
    if (shoppingList[itemShoppingListID].quantity == 1) {
        shoppingList.splice(itemShoppingListID, 1)
    }
    else {
        shoppingList[itemShoppingListID].quantity -= 1;
    }
    selectRecipeDOM(currentRecipe)
    saveLocalStorage()
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function updateShoppingListDOM() {
    // sort pantry by name
    let shoppingListItemCounter = 0
    pantry.sort(function(a, b) {
        // var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        // var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (a.name < b.name) {
        return -1;
        }
        if (a.name > b.name) {
        return 1;
        }
    
        // names must be equal
        return 0;
    });
    shoppingListContents = ""
    for (i in shoppingList) {
        shoppingListContents += "<div class='ingredient' tabindex='0'><span>" + shoppingList[i].name + " <span style='color:" + cs.quantity + "'>"
        shoppingListItemCounter += shoppingList[i].quantity
        if (shoppingList[i].quantity > 1) {
            
            shoppingListContents += "x " + shoppingList[i].quantity  
        }
        shoppingListContents += "</span></span>";
        shoppingListContents += "<span class='add-subtract'><button onclick='addToShoppingList(" + getItemID(shoppingList[i].name) + ")'>+</button>"
        shoppingListContents += "<button onclick='removeFromShoppingList(" + i + ")'>-</button>"
        shoppingListContents += "<button onclick='singleItemFromShoppingListToPantry(" + i + ")'>To Pantry</button></span></div>"

    
    
    }

    if (shoppingList.length == 0) {
        shoppingListContents = "You have nothing in your shopping List."
    } else {
        shoppingListContents += "<button onclick='emptyShoppingList()'>Empty Shopping List</button>"
    }
    document.getElementById("shopping-list-title").innerHTML = "Shopping List (" + shoppingListItemCounter + ")";
    document.getElementById("shopping-list-contents").innerHTML = shoppingListContents;
    
}

function emptyShoppingList() {
    shoppingList = []
    updateShoppingListDOM()
}

function shoppingListToPantry() {
    for (i in shoppingList) {
        let nameOfItem = shoppingList[i].name
        let idOfItem = 0
        
        for (j in ingredients) { // get item id
            if (nameOfItem == ingredients[j].name) {
                idOfItem = j;
                break;
            }
        }
        
        if (shoppingList[i].quantity) { // add correct quantity
            let amount = shoppingList[i].quantity
            for (let step = 0; step < amount; step++) {
                addToPantry(idOfItem)
            }
        }
    }
    shoppingList = []
    updateShoppingListDOM()
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function singleItemFromShoppingListToPantry(itemShoppingListID) {
    let itemName = shoppingList[itemShoppingListID].name
    console.log(shoppingList[itemShoppingListID])
    const quantityOfItem = shoppingList[itemShoppingListID].quantity
    for (let z = 0; z < quantityOfItem; z++) {
        addToPantry(getItemID(itemName))
    }
    shoppingList.splice(itemShoppingListID, 1)    
    updateShoppingListDOM() 
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function addToShoppingList(ingredientID) {
    itemToAdd = ingredients[ingredientID]
    let itemFound = false;
    for (i in shoppingList) { // check if item already in pantry
        if (itemToAdd.name == shoppingList[i].name) {
            shoppingList[i].quantity += 1
            itemFound = true;
            break;
        }
    }
    if (!itemFound) {
        itemToAdd.quantity = 1
        shoppingList.push(itemToAdd)
    }

    shoppingList.sort(function(a, b) {
        // var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        // var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (a.name < b.name) {
        return -1;
        }
        if (a.name > b.name) {
        return 1;
        }
    
        // names must be equal
        return 0;
    });

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    updateShoppingListDOM()
    userAddFood()
}

function checkIfInShoppingList(itemName) {
    for (p in shoppingList) { // check if in shoppingList
        if (itemName == shoppingList[p].name) {
            return true
        }
    }
    return false
}


//#################################################################################
// P A N T R Y  
//#################################################################################
function removeFromPantry(itemID) {
    if (pantry[itemID].quantity == 1) {
        pantry.splice(itemID, 1)
    }
    else {
        pantry[itemID].quantity -= 1;
    }
    updatePantryDOM()
}

function removeFromPantryByName(itemName) {
    // get pantry id
    let itemPantryID = -1
    for (aItem in pantry) {
        if (pantry[aItem].name == itemName) {
            itemPantryID = aItem
            break
        }
    }
    if (pantry[itemPantryID].quantity == 1) {
        pantry.splice(itemPantryID, 1)
    }
    else {
        pantry[itemPantryID].quantity -= 1;
    }
    selectRecipeDOM(currentRecipe)
    saveLocalStorage()
}




function updatePantryDOM() {
    let pantryItemCounter = 0
    // sort pantry by name
    
    pantryContents = ""
    for (i in pantry) {
        pantryContents += "<div class='ingredient' tabindex='0'><span>" + pantry[i].name + " <span style='color:" + cs.quantity + "'>"
        pantryItemCounter += pantry[i].quantity
        if (pantry[i].quantity > 1) {
            pantryContents += "x " + pantry[i].quantity  
        }
        pantryContents += "</span></span>";
        pantryContents += "<span class='add-subtract'><button onclick='addToPantry(" + getItemID(pantry[i].name) + ")'>+</button><button onclick='removeFromPantry(" + i + ")'>-</button></span></div>"
    }

    if (pantry.length == 0) {
        pantryContents = "You have nothing in your pantry."
    } else {
        pantryContents += "<button onclick='emptyPantry()'>Empty Pantry</button>"
    }
    document.getElementById("pantry-contents").innerHTML = pantryContents;
    document.getElementById("pantry-title").innerHTML = "Pantry (" + pantryItemCounter + ")"
    localStorage.setItem('pantry', JSON.stringify(pantry));
    
}

function emptyPantry() {
    pantry = []
    updatePantryDOM()
}

function addToPantry(ingredientID) {
    itemToAdd = ingredients[ingredientID]
    let itemFound = false;
    for (i in pantry) { // check if item already in pantry
        if (itemToAdd.name == pantry[i].name) {
            pantry[i].quantity += 1
            itemFound = true;
            break;
        }
    }
    if (!itemFound) {
        itemToAdd.quantity = 1
        pantry.push(itemToAdd)
    }

    pantry.sort(function(a, b) {
        // var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        // var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (a.name < b.name) {
        return -1;
        }
        if (a.name > b.name) {
        return 1;
        }
    
        // names must be equal
        return 0;
    });

    updatePantryDOM()
    userAddFood()
}



function addToShoppingListFromRecipe(ingredientID) {
    itemToAdd = ingredients[ingredientID]
    let itemFound = false;
    for (i_1 in shoppingList) { // check if item already in pantry
        if (itemToAdd.name == shoppingList[i_1].name) {
            shoppingList[i_1].quantity += 1
            itemFound = true;
            break;
        }
    }
    if (!itemFound) {
        itemToAdd.quantity = 1
        shoppingList.push(itemToAdd)
    }
    selectRecipeDOM(currentRecipe)
    saveLocalStorage()
}

function checkIfInPantry(itemName) {
    for (p in pantry) { // check if in pantry
        if (itemName == pantry[p].name) {
            return true;
        }
    }
    return false
}

//#################################################################################
// R E C I P E   L I S T 
//#################################################################################

var filterFavoriteRecipesBool = false
function filterFavoriteRecipes() {
    if (filterFavoriteRecipesBool) {
        filterFavoriteRecipesBool = false
        document.getElementById("star-filled").innerHTML = "<i class='far fa-star'></i>"
    } else {
        filterFavoriteRecipesBool = true;
        document.getElementById("star-filled").innerHTML = "<i class='fas fa-star'></i>"
    }
    viewRecipes()
}

var showType = "Available";
var filterWords = []
function updateRecipeDOM() {
    let availableRecipes = ""
    let userFilter = null
    let totalRecipeCount = 0
    let availableRecipeCount = 0




    document.getElementById("filter-words").innerHTML = ""
    if (filtering) {
        userFilter = document.getElementById("filter-recipe-input").value.toLowerCase()
        if (userFilter == ' ') {
            document.getElementById("filter-recipe-input").value = ""
            userFilter = ""
        }
        if (userFilter.slice(-1) == ' ') {
            filterWords.push(userFilter.slice(0,-1))
            document.getElementById("filter-recipe-input").value = ""
            userFilter = ""
        }

        let filterWordsHTML = ""
        for (word in filterWords) {
            filterWordsHTML += "<span class='tag filter-word' onclick='removeFilterWord(" + word + ")'>" + filterWords[word] + "</span>"
        }
        document.getElementById("filter-words").innerHTML = filterWordsHTML
    }
    
    
    for (r in recipes) { // check all recipes
        // filter favorites
        let filterFavorites = true
        if (filterFavoriteRecipesBool) {
            if (!recipeFavorites.includes(recipes[parseInt(r)].name)) {
                filterFavorites = false
            }
        }


        let recipeIngredients = recipes[r].ingredients

        let missingIngredient = false;
        for (i in recipeIngredients) { // check if recipe ingredient in pantry       
            let ingredientFound = false;
            for (p in pantry) {
                if (recipeIngredients[i] == pantry[p].name) {      
                    ingredientFound = true;
                    break;
                }
            }
            if (ingredientFound == false) {
                missingIngredient = true;
                break;
            }
        }

        let matchesFilter = true
        // check if recipe equals filter
        if (filtering && ((userFilter != "") || (filterWords.length > 0))) {
            let listOfAllFilterables = [] 
            for (tag in recipes[r].tags) { // tags
                listOfAllFilterables.push(recipes[r].tags[tag])
            }
            listOfAllFilterables = listOfAllFilterables.concat(recipes[r].name.split(" ")) // title
            for (aIngredient in recipes[r].ingredients){
                listOfAllFilterables.push(recipes[r].ingredients[aIngredient])
            }

            // check if something in recipe matches filter
            
            let filterWordsPlusInput = filterWords
            if (userFilter != ""){
                filterWordsPlusInput = filterWords.concat(userFilter)
            } 
            matchesFilter = true
            for (i_2 in filterWordsPlusInput) {
                let copyList = listOfAllFilterables
                for (searchableWordIndex in copyList) { // trim list
                    copyList[searchableWordIndex] = copyList[searchableWordIndex].toLowerCase()
                    copyList[searchableWordIndex] = copyList[searchableWordIndex].substring(0, filterWordsPlusInput[i_2].length)
                }
                let checkIfFound = copyList.includes(filterWordsPlusInput[i_2])
                if(!checkIfFound) {
                    matchesFilter = false
                }
            } 
        }


        // all ingredients
        totalRecipeCount += 1
        if (!missingIngredient && matchesFilter && filterFavorites) {
            availableRecipes += "<div class='ingredient' onclick='selectRecipeDOM(" + r + ")'><span>" + recipes[r].name 
            if (recipeFavorites.includes(recipes[parseInt(r)].name)) {
                availableRecipes += " <i class='fas fa-star'></i>"
            }
            availableRecipes += "</span></div>"
            availableRecipeCount += 1
        } 
        else if ((showType == "All") && matchesFilter && filterFavorites) {
            availableRecipes += "<div class='ingredient' onclick='selectRecipeDOM(" + r + ")' style='color:" + cs.missing + ";'><span>" + recipes[r].name 
            if (recipeFavorites.includes(recipes[parseInt(r)].name)) {
                availableRecipes += " <i class='fas fa-star'></i>"
            }
            availableRecipes += "</span></div>"
        }
    }
    
    document.getElementById("recipe-results").innerHTML = availableRecipes;
    document.getElementById("recipe-title").innerHTML = "Recipes (" + availableRecipeCount + "/" + totalRecipeCount + ")";
}

//#################################################################################
// R E C I P E S
//#################################################################################

function addRemoveRecipeFromFavorites(recipeID) {
    let recipeName = recipes[recipeID].name
    let index = recipeFavorites.indexOf(recipeName);
    if (index > -1) { // if favorite
        recipeFavorites.splice(index, 1)
    } else { // if not favorite
        recipeFavorites.push(recipes[recipeID].name)
    }
    localStorage.setItem('recipeFavorites', JSON.stringify(recipeFavorites));
    selectRecipeDOM(recipeID)
}

let currentRecipe = 0
let missingIngredients = []
function selectRecipeDOM(recipeID) {
    currentRecipe = recipeID
    document.getElementById("container-recipe-instructions").style.display = "block"
    document.getElementById("container-recipes").style.display = "none"

    // Title
    recipeBackButton = "<i class='fas fa-arrow-left back-arrow' onclick='viewRecipes()'></i> "
    recipeTitle = recipes[recipeID].name
    recipeFavorite =  " <i class='far fa-star' onclick='addRemoveRecipeFromFavorites(" + recipeID + ")'></i>"
    if (recipeFavorites.includes(recipeTitle)) {
        recipeFavorite =  " <i class='fas fa-star' onclick='addRemoveRecipeFromFavorites(" + recipeID + ")'></i>"
    }
    document.getElementById("recipe-selected-title").innerHTML =  recipeBackButton + recipeTitle + recipeFavorite


    // Recipe Source
    document.getElementById("recipe-source").style.display = "none"
    if (recipes[recipeID].source) {
        document.getElementById("recipe-source").style.display = "block"
        document.getElementById("recipe-source").innerHTML = "<i style='font-size: 14px;'>Source: " + recipes[recipeID].source + "</i>"
        
    }

    // Required Ingredients
    document.getElementById("recipe-selected-ingredients-title").innerHTML = "Required Ingredients:";

    missingIngredients = []
    let recipeIngredients = ""
    for (i in recipes[recipeID].ingredients) {

        let itemName = recipes[recipeID].ingredients[i]
        
        let inPantry = checkIfInPantry(itemName)
        let inShoppingList = false;
        if (!inPantry) {
            inShoppingList = checkIfInShoppingList(itemName)
        }

        if (!inPantry) { // get item id if missing.
            itemID = getItemID(itemName)
        }

        recipeIngredients += "<div class='ingredient'"
        if (inPantry) {
            recipeIngredients += 'style="color:' + cs.inPantry + ';" onclick="removeFromPantryByName(\'' + itemName + '\')">'
        } else if (inShoppingList) {
            recipeIngredients += 'style="color:' + cs.inCart + ';" onclick="removeFromShoppingListByName(\'' + itemName + '\')">' 
        } else {
            recipeIngredients += "style='color:" + cs.missing + ";'  onclick='addToShoppingListFromRecipe(" + itemID + ")'>"
            missingIngredients.push(itemID)
        }


        if (recipes[recipeID].pre) { // add pre
            recipeIngredients += recipes[recipeID].pre[i] + " "
        }
        
        recipeIngredients += recipes[recipeID].ingredients[i]  
        if (inPantry) {
            recipeIngredients += "<span>In Pantry</span>"
        } else if (inShoppingList) {
            recipeIngredients += "<span>On Shopping List</span>"
        } else {
            recipeIngredients += "<span>Missing</span>"
            // missingIngredients.push(itemID) 
        }
        recipeIngredients += "</div>"
    }
    
    if (missingIngredients.length > 0) { // Add all missing ingredients button
        recipeIngredients = "<button onclick='addMissingIngredientsToShoppingCart()'>Add missing ingredients to shopping list</button>" + recipeIngredients
    }
    document.getElementById("recipe-selected-ingredients").innerHTML = recipeIngredients;

    // Instructions
    document.getElementById("recipe-selected-instructions-title").innerHTML = "";
    document.getElementById("recipe-selected-instructions").innerHTML = "";
    if (recipes[recipeID].instructions) {
        document.getElementById("recipe-selected-instructions-title").innerHTML = "Instructions:";
        document.getElementById("recipe-selected-instructions").innerHTML = recipes[recipeID].instructions;
    }
    

    // Optional Ingredients
    let recipeOptional = ""
    let recipeOptionalTitle = ""
    if (recipes[recipeID].optional) {
        recipeOptionalTitle = "Optional:";
        for (i in recipes[recipeID].optional) {

            let itemName = recipes[recipeID].optional[i]
            let inPantry = checkIfInPantry(itemName)
            let inShoppingList = false;
            if (!inPantry) {
                inShoppingList = checkIfInShoppingList(itemName)
            }

            if (!inPantry) { // get item id if missing.
                itemID = getItemID(itemName)
            }

            recipeOptional += "<div class='ingredient'"

            if (inPantry) {
                recipeOptional += 'style="color:' + cs.inPantry + ';" onclick="removeFromPantryByName(\'' + itemName + '\')">'
            } else if (inShoppingList) {
                recipeOptional += 'style="color:' + cs.inCart + ';" onclick="removeFromShoppingListByName(\'' + itemName + '\')">' 
            } else {
                recipeOptional += "style='color:" + cs.missing + ";'  onclick='addToShoppingListFromRecipe(" + itemID + ")'>"
            }

            recipeOptional += recipes[recipeID].optional[i] 
            if (inPantry) {
                recipeOptional += "<span>In Pantry</span>"
            } else if (inShoppingList) {
                recipeOptional += "<span>On Shopping List</span>"
            } else {
                recipeOptional += "<span>Missing</span>"
                // missingIngredients.push(itemID) // Add optional ingredients to shopping cart
            }

            recipeOptional += "</div>"
        }
    } 
    document.getElementById("recipe-selected-ingredients-optional-title").innerHTML = recipeOptionalTitle;
    document.getElementById("recipe-selected-ingredients-optional").innerHTML = recipeOptional;

    // Tags
    let recipeTagTitle = ""
    let recipeTags = ""
    if (recipes[recipeID].tags) {
        recipeTagTitle = "Tags:"
        for (i in recipes[recipeID].tags) {
            recipeTags += '<span class="tag" onclick="searchByTag(\'' + recipes[recipeID].tags[i] + '\')">' 
            // 'style="color:' + cs.inPantry + ';" onclick="removeFromPantryByName(\'' + itemName + '\')">'
            recipeTags += recipes[recipeID].tags[i] + "</span>"
        }
    }

    document.getElementById("recipe-selected-tags-title").innerHTML = recipeTagTitle;
    document.getElementById("recipe-selected-tags").innerHTML = recipeTags;
   
}

function searchByTag(searchedTag) {
    filterWords = [searchedTag]
    filtering = true;
    document.getElementById("filter-recipe-input").style.display = "block"
    document.getElementById("filter-recipe-input").value = ""
    viewRecipes()
}

function addMissingIngredientsToShoppingCart() {
    for (missingItem in missingIngredients) {
        ingredientID = missingIngredients[missingItem]
        itemToAdd = ingredients[ingredientID]
        let itemFound = false;
        for (i_1 in shoppingList) { // check if item already in pantry
            if (itemToAdd.name == shoppingList[i_1].name) {
                shoppingList[i_1].quantity += 1
                itemFound = true;
                break;
            }
        }
        if (!itemFound) {
            itemToAdd.quantity = 1
            shoppingList.push(itemToAdd)
        }
    }
    selectRecipeDOM(currentRecipe)
}

//#################################################################################
// C U S T O M   R E C I P E 
//#################################################################################


function addCustomRecipe() {
    customSourceInput = document.getElementById("custom-source-input").value
    customRecipeName = document.getElementById("custom-name-input").value
    // check if title taken
    // let titleAlreadyExists = false
    // for (let aRecipeI in recipes) {
    //     if (customRecipeName == )
    // }

    customIngredients = customApprovedIngredients
    customInstructions = document.getElementById("custom-instructions-input").value


    newRecipe = {
        name: customRecipeName,
        ingredients: customIngredients,
        instructions: customInstructions,
        source: customSourceInput,
    }
    customRecipes.push(newRecipe)
    recipes = recipes.concat(newRecipe)
    localStorage.setItem('customRecipes', JSON.stringify(customRecipes));
    viewRecipes()
}

var customApprovedIngredients = []

function addIngredientToCustomRecipe(theIndex) {
    let theIngredientName = ingredients[theIndex].name
    document.getElementById("custom-ingredients-input").value = ""
    if (!customApprovedIngredients.includes(theIngredientName)) {
        customApprovedIngredients.push(theIngredientName)
    }
    updateCustomIngredientsDOM()
}

function addIngredientToCustomRecipeByName(theName) {

    let theIngredientName = theName
    document.getElementById("custom-ingredients-input").value = ""
    if (!customApprovedIngredients.includes(theIngredientName)) {
        customApprovedIngredients.push(theIngredientName)
    }
    updateCustomIngredientsDOM()
}


function removeCustomIngredient(theIndex){
    customApprovedIngredients.splice(customApprovedIngredients.indexOf(theIndex), 1)
    updateCustomIngredientsDOM()
}

function updateCustomIngredientsDOM() {
    let ingredientTags = ""
    for (let index in customApprovedIngredients) {
        ingredientTags += '<span class="tag filter-word" onclick="removeCustomIngredient(\'' + customApprovedIngredients[index] + '\')">' + customApprovedIngredients[index] + '</span>'
    }
    document.getElementById("recipe-added-ingredients").innerHTML = ingredientTags
}

function suggestCustomIngredient() {
    let customIngredientName = document.getElementById("custom-ingredients-input").value.toLowerCase()
    
    let ingredientSearchResults = ""
    let counter = 0
    for (let i in ingredients) { 
        // If Match
        
        if (customIngredientName == ingredients[i].name.substring(0, customIngredientName.length)) { // if input matches start of ingredient
            ingredientSearchResults += "<div class='ingredient' onclick='addIngredientToCustomRecipe"
            
            ingredientSearchResults += "(" + i + ")'><span> + " + ingredients[i].name 
            ingredientSearchResults += "</div>";
            counter += 1;
        }
        if (counter == 4) {
            break;
        }
    }
    
    // if no results
    if (ingredientSearchResults == '') {
        ingredientSearchResults = '<button id="add-custom-ingredient-button" onclick="addCustomIngredientFromCustomRecipe()">Add as Custom Ingredient</button><br>'
    }

    document.getElementById("recipe-ingredients-custom-results").innerHTML = ingredientSearchResults
}

function addCustomIngredientFromCustomRecipe() {
    let customIngredientName = document.getElementById("custom-ingredients-input").value.toLowerCase()
    let newIngredient = {name:customIngredientName}
    customIngredients.push(newIngredient)
    ingredients.push(newIngredient)
    localStorage.setItem('customIngredients', JSON.stringify(customIngredients));
    document.getElementById("custom-ingredients-input").value = ""
    // console.log(ingredients)
    // console.log(ingredients.indexOf(newIngredient.name))
    addIngredientToCustomRecipeByName(newIngredient.name)

    
}

//#################################################################################
// R E C I P E   F I L T E R
//#################################################################################
var filtering = false;
function filterRecipes() {
    filtering = !filtering
    if (filtering) {
        document.getElementById("filter-recipe-input").style.display = "block"
        document.getElementById("filter-recipe-input").value = ""
        document.getElementById("show-filter").style.backgroundColor = cs.activeButton
    } else {
        document.getElementById("filter-recipe-input").style.display = "none"
        document.getElementById("show-filter").style.backgroundColor = cs.inactiveButton
    }
    updateRecipeDOM()
    
}

function removeFilterWord(filterWordID) {
    filterWords.splice(filterWordID, 1)
    updateRecipeDOM()
}



//#################################################################################
// P A G E   C O N T R O L L E R
//#################################################################################

document.getElementById("show-available-recipes").style.backgroundColor = cs.activeButton
function showAvailableRecipes() {
    showType = "Available"
    document.getElementById("show-available-recipes").style.backgroundColor = cs.activeButton
    document.getElementById("show-all-recipes").style.backgroundColor = cs.inactiveButton
    updateRecipeDOM() 
}

function showAllRecipes() {
    showType = "All"
    document.getElementById("show-available-recipes").style.backgroundColor = cs.inactiveButton
    document.getElementById("show-all-recipes").style.backgroundColor = cs.activeButton
    updateRecipeDOM() 
}

function ingredientToShoppingList() {
    previousPage = currentPage
    ingredientWhere = "shoppingList";
    document.getElementById("container-add-ingredient").style.display = "block"
    document.getElementById("container-pantry").style.display = "none"
    document.getElementById("container-shopping").style.display = "none"
    document.getElementById("container-recipe-instructions").style.display = "none"
    document.getElementById("container-recipes").style.display = "none" 
    userAddFood()
}

function ingredientToPantry() {
    previousPage = currentPage
    ingredientWhere = "pantry"
    document.getElementById("container-add-ingredient").style.display = "block"
    document.getElementById("container-pantry").style.display = "none"
    document.getElementById("container-shopping").style.display = "none"
    document.getElementById("container-recipe-instructions").style.display = "none"
    document.getElementById("container-recipes").style.display = "none" 
    userAddFood()

}

function viewCustomRecipe() {
    previousPage = currentPage
    currentPage = "customRecipe"
    document.getElementById("container-add-ingredient").style.display = "none"
    document.getElementById("container-pantry").style.display = "none"
    document.getElementById("container-shopping").style.display = "none"
    document.getElementById("container-recipe-instructions").style.display = "none"
    document.getElementById("container-recipes").style.display = "none" 
    document.getElementById("container-custom-recipe").style.display = "block"
    document.getElementById("container-help").style.display = "none"
}

function viewHelp() {
    previousPage = currentPage
    currentPage = "customRecipe"
    document.getElementById("container-add-ingredient").style.display = "none"
    document.getElementById("container-pantry").style.display = "none"
    document.getElementById("container-shopping").style.display = "none"
    document.getElementById("container-recipe-instructions").style.display = "none"
    document.getElementById("container-recipes").style.display = "none" 
    document.getElementById("container-custom-recipe").style.display = "none"
    document.getElementById("container-help").style.display = "block"
}

function viewPantry() {
    previousPage = currentPage
    currentPage = "pantry"
    updatePantryDOM()
    document.getElementById("container-add-ingredient").style.display = "none"
    document.getElementById("container-pantry").style.display = "block"
    document.getElementById("container-shopping").style.display = "none"
    document.getElementById("container-recipe-instructions").style.display = "none"
    document.getElementById("container-recipes").style.display = "none" 
    document.getElementById("container-custom-recipe").style.display = "none"
    document.getElementById("container-help").style.display = "none"

    document.getElementById("view-recipe").style.textShadow = cs.none
    document.getElementById("view-recipe").style.color = cs.normalNavTextColor
    document.getElementById("view-recipe").style.backgroundColor = cs.normalBackgroundColor
    document.getElementById("view-shopping-list").style.textShadow = cs.none
    document.getElementById("view-shopping-list").style.color = cs.normalNavTextColor
    document.getElementById("view-shopping-list").style.backgroundColor = cs.normalBackgroundColor

    document.getElementById("view-pantry").style.textShadow = cs.selectedNavTextShadow
    document.getElementById("view-pantry").style.color = cs.selectedNavTextColor
    document.getElementById("view-pantry").style.backgroundColor = cs.selectedBackgroundColor
}

function viewShoppingList() {
    previousPage = currentPage
    currentPage = "shoppingList"
    updateShoppingListDOM()
    document.getElementById("container-add-ingredient").style.display = "none"
    document.getElementById("container-pantry").style.display = "none"
    document.getElementById("container-shopping").style.display = "block"
    document.getElementById("container-recipe-instructions").style.display = "none"
    document.getElementById("container-recipes").style.display = "none" 
    document.getElementById("container-custom-recipe").style.display = "none"
    document.getElementById("container-help").style.display = "none"

    document.getElementById("view-recipe").style.textShadow = cs.none
    document.getElementById("view-recipe").style.color = cs.normalNavTextColor
    document.getElementById("view-recipe").style.backgroundColor = cs.normalBackgroundColor
    document.getElementById("view-pantry").style.textShadow = cs.none
    document.getElementById("view-pantry").style.color = cs.normalNavTextColor
    document.getElementById("view-pantry").style.backgroundColor = cs.normalBackgroundColor

    document.getElementById("view-shopping-list").style.textShadow = cs.selectedNavTextShadow
    document.getElementById("view-shopping-list").style.color = cs.selectedNavTextColor
    document.getElementById("view-shopping-list").style.backgroundColor = cs.selectedBackgroundColor
}

function viewRecipes() {
    previousPage = currentPage
    currentPage = "recipes"
    updateRecipeDOM()
    document.getElementById("container-add-ingredient").style.display = "none"
    document.getElementById("container-pantry").style.display = "none"
    document.getElementById("container-shopping").style.display = "none"
    document.getElementById("container-recipe-instructions").style.display = "none"
    document.getElementById("container-recipes").style.display = "block" 
    document.getElementById("container-custom-recipe").style.display = "none"
    document.getElementById("container-help").style.display = "none"
    

    document.getElementById("view-shopping-list").style.textShadow = cs.none
    document.getElementById("view-shopping-list").style.color = cs.normalNavTextColor
    document.getElementById("view-shopping-list").style.backgroundColor = cs.normalBackgroundColor
    document.getElementById("view-pantry").style.textShadow = cs.none
    document.getElementById("view-pantry").style.color = cs.normalNavTextColor
    document.getElementById("view-pantry").style.backgroundColor = cs.normalBackgroundColor

    document.getElementById("view-recipe").style.textShadow = cs.selectedNavTextShadow
    document.getElementById("view-recipe").style.color = cs.selectedNavTextColor
    document.getElementById("view-recipe").style.backgroundColor = cs.selectedBackgroundColor
}




var previousPage = ""
var currentPage = ""
function goToPreviousPage() {
    currentPage = previousPage
    if (previousPage == "recipes") {
        viewRecipes()
    } else if (previousPage == "pantry") {
        viewPantry()
    } else if (previousPage == "shoppingList") {
        viewShoppingList()
    } else if (previousPage == "customRecipe") {
        viewCustomRecipe()
    }
}

function loadStartPage() {
    document.getElementById("tutorial-start").style.display = "flex"
}

function skipTutorial() {
    localStorage.setItem('firstTime', "true");
    document.getElementById("tutorial-start").style.display = "none"
    document.getElementById("tutorial-step1").style.display = "none"
    document.getElementById("tutorial-step2").style.display = "none"
    document.getElementById("tutorial-step3").style.display = "none"
    document.getElementById("tutorial-step4").style.display = "none"
    document.getElementById("tutorial-step5").style.display = "none"
    document.getElementById("tutorial-step6").style.display = "none"
    document.getElementById("tutorial-step7").style.display = "none"
    document.getElementById("tutorial-step8").style.display = "none"
}

function tutorialStep1() {
    document.getElementById("tutorial-start").style.display = "none"
    document.getElementById("tutorial-step1").style.display = "flex"
}

function startTutorialRecipe() {
    document.getElementById("tutorial-step1").style.display = "none"
    document.getElementById("tutorial-step2").style.display = "flex"
}

function tutorialStep3() {
    showAllRecipes()
    updateRecipeDOM() 
    document.getElementById("tutorial-step2").style.display = "none"
    document.getElementById("tutorial-step3").style.display = "flex"
}

function tutorialStep4() {
    selectRecipeDOM(0)
    document.getElementById("tutorial-step3").style.display = "none"
    document.getElementById("tutorial-step4").style.display = "flex"
}

function tutorialStep5() {
    viewPantry()
    document.getElementById("tutorial-step4").style.display = "none"
    document.getElementById("tutorial-step5").style.display = "flex"
}

function tutorialStep6() {
    viewShoppingList()
    document.getElementById("tutorial-step5").style.display = "none"
    document.getElementById("tutorial-step6").style.display = "flex"
}

function tutorialStep7() {
    viewRecipes()
    document.getElementById("tutorial-step6").style.display = "none"
    document.getElementById("tutorial-step7").style.display = "flex"
}

function tutorialStep8() {
    document.getElementById("tutorial-step7").style.display = "none"
    document.getElementById("tutorial-step8").style.display = "flex"
}