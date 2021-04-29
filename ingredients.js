var ingredients = [
    {name:"baking powder"},
    {name:"baking soda"},
    {name:"basil"},
    {name:"black beans"},
    {name:"black pepper"},
    {name:"broth"},
    {name:"brown sugar"},
    {name:"butter"},
    {name:"cayenne pepper"},
    {name:"cheese"},
    {name:"chicken"},
    {name:"chili powder"},
    {name:"chocolate chips"},
    {name:"cinnamon"},
    {name:"cloves"},
    {name:"cocoa powder"},
    {name:"coconut"},
    {name:"corn"},
    {name:"cornstarch"},
    {name:"corn syrup"},
    {name:"cream"},
    {name:"cream cheese"},
    {name:"cream of tartar"},
    {name:"cumin"},
    {name:"egg"},
    {name:"flour"},
    {name:"food coloring"},
    {name:"garlic"},
    {name:"garlic powder"},
    {name:"ginger"},
    {name:"green beans"},
    {name:"ground beef"},
    {name:"hoisin sauce"},
    {name:"honey"},
    {name:"ketchup"},
    {name:"lemon juice"},
    {name:"lettuce"},
    {name:"lime juice"},
    {name:"margarine"},
    {name:"milk"},
    {name:"nutmeg"},
    {name:"oats"},
    {name:"oil"},
    {name:"olive oil"},
    {name:"onion"},
    {name:"oregano"},
    {name:"peanut butter"},
    {name:"pecans"},
    {name:"pepper"},
    {name:"paprika"},
    {name:"potatoes"},
    {name:"powdered sugar"},
    {name:"pumpkin"},
    {name:"rice"},
    {name:"salt"},
    {name:"sausage"},
    {name:"shortening"},
    {name:"soy sauce"},
    {name:"sugar"},
    {name:"sunflower seeds"},
    {name:"sweet potatoes"},
    {name:"tomatoes"},
    {name:"tomato sauce"},
    {name:"tomato soup"},
    {name:"vanilla"},
    {name:"vegetable oil"},
    {name:"vinegar"},
    {name:"water"},
    {name:"yeast"},
]

var recipes = [
    {
        name:"Beans (Black) & Rice", 
        ingredients:["black beans", "rice"],
        pre:["", ""], 
        instructions:"Cook both and serve with desired toppings",
        optional:["salt", "tomatoes", "cheese", "lettuce"],
        tags:["easy"],
    },
    {
        name:"Crepes (easy)", 
        ingredients:["flour", "milk", "egg", "oil"],
        pre:["1 Cup", "1 1/2 Cup", "2", "1 T"], 
        instructions:"Blend in blender. Pour 1/4 cup or so onto a buttered frying pan.",
        tags:["breakfast"],
    },
    {
        name:"Crepes (fancy)", 
        ingredients:["milk", "oil", "egg", "flour", "sugar", "baking powder", "salt"],
        pre:["2 Cups", "2 T", "2", "1 1/2 Cups", "1 T", "1/2 tsp.", "1/2 tsp."],
        instructions:"Blend in blender. Pour 1/4 cup or so onto a buttered frying pan.",
        tags:["breakfast"],
    },
    {
        name:"German Pancakes", 
        ingredients:["flour", "milk", "butter", "egg"],
        pre:["1/2 Cup", "1/2 Cup", "2 T", "3"],
        instructions:"Preheat oven to 400. Place butter in 9x13 and melt in oven. Mix well and pour into the hot buttered pan. Bake for about 25 minutes or until brown.",
        optional:["salt"],
        tags:["breakfast"],
    },
    {
        name:"Pancakes", 
        ingredients:["flour", "milk", "sugar", "baking powder", "egg", "oil"], 
        pre:["1 Cup", "1 Cup", "1 T", "2 tsp.", "2", "1"],
        instructions:"Mix & cook.",
        optional:["vanilla", "salt"],
        tags:["breakfast"],
    },
    {
        name:"Rolls", 
        ingredients:["yeast", "shortening", "sugar", "flour", "egg", "water", "salt"]
    },
    {
        name:"Sheepherder Pie", 
        ingredients:["ground beef", "tomato soup", "tomato sauce", "garlic", "onion", "green beans", "potatoes", "cheese"], 
        pre:["1 lb", "1 Can", "2 Small Cans", "", "1/2 Cup Diced", "2 Cans", "5 lbs.", ""],
        instructions:"Brown hamburger, onions, and garlic. Drain. Add sauce and soup. Pour into 9x13 baking dish. Spread a layer of beans, potatoes, and then cheese. Bake at 350 for 20 minutes.",
        optional:["butter", "salt"],
        tags:["dinner"],
    },
    {
        name:"Sweet Potato Fries", 
        ingredients:["sweet potatoes", "olive oil", "garlic powder", "paprika"], 
        pre:["", "2 T", "1 tsp", "1 tsp"],
        instructions:"Heat the over to 400. Peel and slice the sweet potatoes. Mix potatoes with oil and spices and lay on tray. Cook for about 10 minutes on each side or until done.",
        optional:["salt", "ketchup", "black pepper", "oil"],
        tags:["dinner", "side"],
    },
]