var ingredients = [
    {name:"almond extract"},
    {name:"almonds"},
    {name:"almond milk"},
    {name:"anchovies"},
    {name:"aniseed"},
    {name:"apple"},
    {name:"apple juice"},
    {name:"apricot"},
    {name:"artichoke"},
    {name:"artichoke hearts"},
    {name:"asparagus"},
    {name:"avocado"},
    {name:"bacon"},
    {name:"baking powder"},
    {name:"baking soda"},
    {name:"balsamic"},
    {name:"banana"},
    {name:"barbecue sauce"},
    {name:"basil"},
    {name:"beans"},
    {name:"beef"},
    {name:"beets"},
    {name:"bell pepper"},
    {name:"berries"},
    {name:"blackberries"},
    {name:"blueberries"},
    {name:"black beans"},
    {name:"black pepper"},
    {name:"bouillon"},
    {name:"bread"},
    {name:"broccoli"},
    {name:"brown rice"},
    {name:"brown sugar"},
    {name:"brussels sprouts"},
    {name:"butter"},
    {name:"butterbeer"},
    {name:"buttermilk"},
    {name:"cabbage"},
    {name:"cake mix"},
    {name:"cajun spice"},
    {name:"cantaloupe"},
    {name:"cardamom"},
    {name:"carrots"},
    {name:"cauliflower"},
    {name:"cayenne pepper"},
    {name:"celery"},
    {name:"cereal"},
    {name:"cheese"},
    {name:"cherries"},
    {name:"chicken"},
    {name:"chickpeas"},
    {name:"chili powder"},
    {name:"chips"},
    {name:"chives"},
    {name:"chocolate"},
    {name:"chocolate chips"},
    {name:"chorus fruit"},
    {name:"cilantro"},
    {name:"cinnamon"},
    {name:"clams"},
    {name:"cloves"},
    {name:"cocoa powder"},
    {name:"coconut"},
    {name:"coconut milk"},
    {name:"coconut oil"},
    {name:"coffee"},
    {name:"coriander"},
    {name:"corn"},
    {name:"cornmeal"},
    {name:"corn starch"},
    {name:"corn syrup"},
    {name:"couscous"},
    {name:"cranberries"},
    {name:"cream"},
    {name:"cream cheese"},
    {name:"cream of mushroom soup"},
    {name:"cream of tartar"},
    {name:"cucumber"},
    {name:"cumin"},
    {name:"curry paste"},
    {name:"curry powder"},
    {name:"dill"},
    {name:"duck"},
    {name:"egg"},
    {name:"eggplant"},
    {name:"evaporated milk"},
    {name:"fig"},
    {name:"flour"},
    {name:"food coloring"},
    {name:"french bread"},
    {name:"fruit snacks"},
    {name:"garlic"},
    {name:"garlic powder"},
    {name:"gillyweed"},
    {name:"ginger"},
    {name:"gold"},
    {name:"grapes"},
    {name:"grape juice"},
    {name:"grapefruit"},
    {name:"green beans"},
    {name:"green olive"},
    {name:"ground beef"},
    {name:"habenero peppers"},
    {name:"ham"},
    {name:"hazelnut"},
    {name:"hersheys kisses"},
    {name:"heavy cream"},
    {name:"hoisin"},
    {name:"honey"},
    {name:"hot dog"},
    {name:"ice cream"},
    {name:"jam"},
    {name:"jalapeno peppers"},
    {name:"jelly"},
    {name:"kale"},
    {name:"ketchup"},
    {name:"kiwi"},
    {name:"kidney beans"},
    {name:"leeks"},
    {name:"lembas bread"},
    {name:"lemon"},
    {name:"lemon juice"},
    {name:"lentils"},
    {name:"lettuce"},
    {name:"lime juice"},
    {name:"mango"},
    {name:"maple syrup"},
    {name:"marinara"},
    {name:"marshmallows"},
    {name:"mayonnaise"},
    {name:"milk"},
    {name:"mint"},
    {name:"mixed vegetables"},
    {name:"molasses"},
    {name:"moo pop"},
    {name:"mozzarella"},
    {name:"mushrooms"},
    {name:"mustard"},
    {name:"nutmeg"},
    {name:"nuts"},
    {name:"oats"},
    {name:"oil"},
    {name:"okra"},
    {name:"olive oil"},
    {name:"olives"},
    {name:"onion"},
    {name:"onion powder"},
    {name:"orange"},
    {name:"oregano"},
    {name:"paprika"},
    {name:"parmesan"},
    {name:"parsley"},
    {name:"pasta"},
    {name:"peach"},
    {name:"peanut butter"},
    {name:"peanuts"},
    {name:"pear"},
    {name:"peas"},
    {name:"pecans"},
    {name:"pepper"},
    {name:"pesto"},
    {name:"pineapple"},
    {name:"pinto beans"},
    {name:"pork"},
    {name:"potatoes"},
    {name:"powdered sugar"},
    {name:"protein powder"},
    {name:"pumpkin"},
    {name:"quinoa"},
    {name:"radish"},
    {name:"raisins"},
    {name:"ramen"},
    {name:"ranch"},
    {name:"raspberries"},
    {name:"refried beans"},
    {name:"rice"},
    {name:"ricotta"},
    {name:"rhubarb"},
    {name:"romaine lettuce"},
    {name:"rosemary"},
    {name:"salmon"},
    {name:"salsa"},
    {name:"salt"},
    {name:"sausage"},
    {name:"sea weed"},
    {name:"serrano pepper"},
    {name:"sesame oil"},
    {name:"shortening"},
    {name:"shrimp"},
    {name:"snap peas"},
    {name:"snozzcumbers"},
    {name:"sour cream"},
    {name:"soy sauce"},
    {name:"spinach"},
    {name:"sprinkles"},
    {name:"squash"},
    {name:"steel cut oats"},
    {name:"strawberries"},
    {name:"sugar"},
    {name:"sunflower seeds"},
    {name:"sweetened condensed milk"},
    {name:"sweet potatoes"},
    {name:"syrup"},
    {name:"tea"},
    {name:"thyme"},
    {name:"tilapia"},
    {name:"tofu"},
    {name:"tomatillos"},
    {name:"tomatoes"},
    {name:"tomato paste"},
    {name:"tomato sauce"},
    {name:"tomato soup"},
    {name:"tortillas"},
    {name:"tortilla chips"},
    {name:"tuna fish"},
    {name:"turkey"},
    {name:"turnips"},
    {name:"vanilla"},
    {name:"vegetable oil"},
    {name:"vinegar"},
    {name:"walnuts"},
    {name:"water"},
    {name:"watermelon"},
    {name:"wine"},
    {name:"whipped cream"},
    {name:"worcestershire"},
    {name:"yeast"},
    {name:"yogurt"},
    {name:"zucchini"},
]

const ingredientsIndex = []
for (let i in ingredients) {
    ingredientsIndex.push(ingredients[i].name)
}


var recipes = [
    {
        name:"Autumn Soup", 
        ingredients:["ground beef", "onion", "carrots", "potatoes", "black pepper", "basil", "tomatoes", "bouillon"],
        pre:["1 lb.", "1 Cup chopped", "1 Cup", "1 Cup cubed", "1/4 tsp.", "1/4 tsp", "28 oz.", "1 tsp."], 
        instructions:"Cook onions and ground beef. Mix in everything else as well as 3 Cups of water.",
        optional:["salt", "celery","sweet potatoes"],
        tags:["dinner", "soup", "savory"],
        image: ["https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/93/68/4/picWe1dYJ.jpg"]
    },
     {
        name:"Banana Bread", 
        ingredients:["sugar", "shortening", "egg", "flour", "salt", "baking soda", "banana"], 
        pre:[ "1 cup", "1/2 cup", "2", "2 cups", "1/2 tsp.", "1 tsp.", "4 mashed"],
        instructions:"Cream sugar and shortening, add eggs, drys, bananas, and optional nuts. Bake 1 hour at 325 degrees in a 13x14 loaf pan, or less in two smaller pans",
        optional:["nuts"],
        tags:["sweet", "baking"],
        image: ["https://upload.wikimedia.org/wikipedia/commons/d/d8/Banankaka.jpg"],
    },
    // {
    //     name:"Beans (Black) & Rice", 
    //     ingredients:["black beans", "rice"],
    //     pre:["", ""], 
    //     instructions:"Cook both and serve with desired toppings",
    //     optional:["salt", "tomatoes", "cheese", "lettuce"],
    //     tags:["easy", "savory"],
    // },
     {
        name:"Biscuits", 
        ingredients:["flour", "salt", "baking soda", "baking powder", "butter", "milk", "vinegar"], 
        pre:[ "2 cups", "1/2 teaspoon", "1/2 teaspoon", "1 1/2 teaspoon", "1/2 cups", "1/2 cup", "1 Tablespoon"],
        instructions:"Combine dry ingredients, then cut butter in. Add vinegar to milk -can substitute lemon juice for vinegar- mix in. Knead 10 times, shape and place on cookie sheet. Bake at 450 degrees until golden.",
        tags:["baking", "bread"],
        image: ["https://sugarspunrun.com/wp-content/uploads/2018/04/Easy-homemade-biscuit-recipe-1-of-1-5.jpg","https://upload.wikimedia.org/wikipedia/commons/9/90/Biscuit_which_has_been_broken_open.jpg"],
    },
    //  {
    //     name:"Bread", 
    //     ingredients:["yeast", "brown sugar", "shortening", "salt", "flour"], 
    //     pre:[ "1 Tablespoon", "1/2 cup", "1/3 cup", "1 Tablespoon", "6-8 Cups"],
    //     instructions:"Soften yeast in 3/4 cups water, heat remaining 2 cups of water shortening sugar and salt. Add to 3 cups flour and yeast with water, then add remaining flour incrementally as needed, knead, rise until double, shape, let rise, then bake at 350 degrees for 50 minutes.",
    //     tags:["baking"],
    // },
    //  {
    //     name:"Bread Sticks", 
    //     ingredients:["yeast", "milk", "honey", "salt", "flour"], 
    //     pre:[ "1 T.", "1/4 cup", "1 T.", "1 tsp.", "4- 4 1/2 cups"],
    //     instructions:"Dissolve yeast in 1 1/4 cups warm water, stir in everything but flour, mix well. Gradually add flour until dough forms a ball, then knead lightly and shape into desired breadsticks. Place on greased cookie sheet, sprinkle with melted butter and seasonings if desired. allow to rise for 15-20 minutes, then bake at 400 degrees for 15 minutes",
    //     optional:["garlic", "parmesan", "butter", "onion powder"],
    //     tags:["bread", "baking"],
    // },
    //  {
    //     name:"Brownie Pudding Cake", 
    //     ingredients:["flour", "baking powder", "sugar", "salt", "cocoa powder", "milk", "vegetable oil", "vanilla", "brown sugar", "cocoa powder"], 
    //     pre:[ "2 cups", "4 tsp.", "1 1/2 cup", "1 tsp.", "4 T.", "1 cup", "4 T.", "2 tsp.", "1 1/4 cup", "1/3 cup"],
    //     instructions:"Mix together the flour, baking powder, sugar, salt, cocoa powder, milk, oil, and vanilla, pour into a greased 10x14 pan. Then mix together brown sugar and 1/3 cup cocoa powder, sprinkle over top of batter in pan. Pour 3 1/2 cups boiling water over the top- DO NOT MIX! Bake at 350 degrees about 45 minutes.",
    //     optional:["nuts"],
    //     tags:["dessert", "baking", "sweet"],
    //     source:"Grandma Deanna Slade"
    // },
    {
        name:"Crepes (easy)", 
        ingredients:["flour", "milk", "egg", "oil"],
        pre:["1 Cup", "1 1/2 Cup", "2", "1 T"], 
        instructions:"Blend in blender. Pour 1/4 cup or so onto a buttered frying pan.",
        tags:["breakfast", "easy"],
        image:["https://www.melskitchencafe.com/wp-content/uploads/rollup-pancakes3-480x270.jpg"]
    },
    {
        name:"Crepes (fancy)", 
        ingredients:["milk", "oil", "egg", "flour", "sugar", "baking powder", "salt"],
        pre:["2 Cups", "2 T", "2", "1 1/2 Cups", "1 T", "1/2 tsp.", "1/2 tsp."],
        instructions:"Blend in blender. Pour 1/4 cup or so onto a buttered frying pan.",
        tags:["breakfast"],
        image:["https://www.melskitchencafe.com/wp-content/uploads/rollup-pancakes3-480x270.jpg"]
    },
     {
        name:"Chicken Divan", 
        ingredients:["chicken", "rice", "broccoli", "mayonnaise", "cream of mushroom soup", "cheese", "lemon juice", "curry powder", "parmesan"], 
        pre:[ "2-3 lb, cooked and cubed", "4 cups cooked", "3 cups cooked", "1/2 cup", "1 can", "1/2 cup grated", "3-4 T.", "2 T", "1/4 cup grated"],
        instructions:"lay rice in 9x13 pan, cover with chicken and brocoli. Mix together sauce and spread next, with grated cheese on top. Bake at 350 degrees for 30 min or until bubbly",
        tags:["dinner", "casserole", "savory"],
        image:["https://www.westviamidwest.com/wp-content/uploads/2020/10/Chicken-Divan-SQUARE-West-Via-Midwest-1-735x735.jpg"]
    },
    {
        name:"Curry (Thai)", 
        ingredients:["curry paste", "coconut milk", "carrots", "potatoes", "chicken", "onion", "rice"],
        pre:["1 can", "2 cans", "4", "3", "2 breasts", "1/2 diced", ""],
        instructions:"Cook onions and chicken together then add coconut milk and 4 cups of water. Add everything and boil. Once cooked serve with rice.",
        optional:["salt", "broccoli", "pineapple"],
        tags:["dinner", "savory"],
        image:["https://www.indianhealthyrecipes.com/wp-content/uploads/2015/01/potato-curry-recipe-2-480x270.jpg"]
    },
     {
        name:"Frosting", 
        ingredients:["butter", "powdered sugar", "vanilla", "milk"], 
        pre:[ "1/2 cup", "4 cups", "1 teaspoon", "3-5 T."],
        instructions:"Whip everything together",
        optional:["food coloring", "salt"],
        tags:["dessert"],
        image: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/12/12/3/0170936_vanilla-frosting_s4x3.jpg.rend.hgtvcom.616.462.suffix/1599170546993.jpeg"]
    },
    {
        name:"German Pancakes", 
        ingredients:["flour", "milk", "butter", "egg"],
        pre:["1/2 Cup", "1/2 Cup", "2 T", "3"],
        instructions:"Preheat oven to 400. Place butter in 9x13 and melt in oven. Mix well and pour into the hot buttered pan. Bake for about 25 minutes or until brown.",
        optional:["salt"],
        tags:["breakfast", "baking"],
        image:["https://www.theidearoom.net/wp-content/uploads/2018/12/german-pancakes-theidearoom-4.jpg"]
    },
    {
        name:"Emma Noodle Sauce", 
        ingredients:["peanut butter", "soy sauce", "honey", "garlic", "ginger", "vinegar", "cayenne pepper", "hoisin"],
        pre:["1 Cup", "1/2 Cup", "1/2 Cup", "4 cloves", "1 tsp.", "2 T", "1/2 tsp.", "2 T"],
        instructions:"Mix and cook together. Server with noodles or stir fry.",
        optional:["rice", "pasta", "chicken", "mixed vegetables", "peanuts"],
        tags:["dinner", "savory"],
        image: ["https://cdn-bjfkp.nitrocdn.com/vJdkmGCvomZUjxHaZVqunmXKCtkNukwq/assets/static/source/rev-ae874ab/thekelliekitchen.com/wp-content/uploads/2018/09/41d9e170bfbeb100b3e32bf7fe266e2b.sweet-spicy-peanut-sauce.jpg"]
    },
    {
        name:"Potato Soup", 
        ingredients:["onion", "carrots", "potatoes", "bouillon", "flour", "milk", "heavy cream"], 
        pre:[ "1 diced", "5 diced", "10 diced", "12 tsp.", "5 T", "1 Cup", "2 Cups"],
        instructions:"Fry bacon until crisp, remove bacon and pour out most of the grease. Add onions carrots and celery and stir fry in remaining bacon grease for 5 min. In soup pot add broth, potatoes, onions, carrots, and celery. Cook until potatoes are getting soft. Whisk together flour and milk and pour into the soup. Cook for another 5 minutes. Blend about 1/2 of the soup and mix back in. Stir in cream. Add in cheese, parsley, and spices to taste.",
        optional:["bacon", "parsley","chives","cheese", "celery", "salt", "black pepper", "cajun spice", "sour cream"],
        tags:["dinner", "soup", "savory"],
        source:"Pioneer Women (Adapted)",
        image: ["https://houseofyumm.com/wp-content/uploads/2018/10/Potato-Soup-4.jpg"]
    },
    {
        name:"Pancakes", 
        ingredients:["flour", "milk", "sugar", "baking powder", "egg", "oil"], 
        pre:["1 Cup", "1 Cup", "1 T", "2 tsp.", "2", "1"],
        instructions:"Mix & cook.",
        optional:["vanilla", "salt"],
        tags:["breakfast"],
        image:["https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg"]
    },
     {
        name:"Pizza Dough", 
        ingredients:["milk", "yeast", "sugar", "salt", "shortening", "flour"], 
        pre:[ "2 cups", "1 T.", "1/4 cup", "2 tsp.", "1/4 cup", "6 cups"],
        instructions:"Mix together drys, knead in wets. Can substitute 1/4 cup olive oil for butter if decrease milk.",
        tags:["baking"],
        image:["https://tastesbetterfromscratch.com/wp-content/uploads/2013/03/Pizza-Dough-6.jpg"]
    },
    {
        name:"Rolls", 
        ingredients:["yeast", "shortening", "sugar", "flour", "egg", "salt"],
        pre: ["1 Tablespoon", "1/4 cup", "1/2 cup", "6 1/2 - 7 cups", "1, beaten", "1 1/2 teaspoon"],
        instructions: "Soften yeast in 2 cups of warm water. Mix remaining ingredients, add yeast, and knead. Let rise, shape, let rise again. Bake at 350 degrees.",
        tags:["baking"],
        image: ["https://i2.wp.com/www.eazypeazymealz.com/wp-content/uploads/2016/06/Moms-Dinner-Rolls-13.jpg?fit=700%2C1050&ssl=1"]
    },
    {
        name:"Sheepherder Pie", 
        ingredients:["ground beef", "tomato soup", "tomato sauce", "garlic", "onion", "green beans", "potatoes", "cheese"], 
        pre:["1 lb", "1 Can", "2 Small Cans", "", "1/2 Cup Diced", "2 Cans", "5 lbs.", ""],
        instructions:"Brown hamburger, onions, and garlic. Drain. Add sauce and soup. Pour into 9x13 baking dish. Spread a layer of beans, potatoes, and then cheese. Bake at 350 for 20 minutes.",
        optional:["butter", "salt"],
        tags:["dinner", "baking", "casserole"],
        image:["https://makinglifeblissful.com/wp-content/uploads/2015/12/simple-shepherds-pie-427x450.jpg"]
    },
    //  {
    //     name:"Stake Visitors Cake", 
    //     ingredients:["oats", "butter", "cocoa powder", "egg", "flour", "brown sugar", "baking soda", "chocolate chips", "sugar", "salt"], 
    //     pre:[ "1 cup", "1/2 cup", "1 T.", "2 beaten", "1 1/2 cups", "1 cup", "1 tsp.", "1 cup", "1 cup", "1/2 tsp."],
    //     instructions:"Pour 1 1/2 cup boiling water over oats and butter, let rest 10 minutes. Add sugar and eggs, beat together, then add dry ingredients and half the chocolate chips. Pour into greased 9x13, sprinkle remaining chocloate chips and optional nuts on top. Bake at 350 degrees for 30-40 minutes",
    //     optional:["nuts"],
    //     tags:["dessert", "cake", "baking"],
    //     source:"Grandma Deanna Slade"
    // },
     {
        name:"Sugar Cookies", 
        ingredients:["butter", "sugar", "vegetable oil", "egg", "sour cream", "vanilla", "almond extract", "baking soda", "salt", "flour"], 
        pre:[ "1 cup softened", "2 cups", "3/4 cup", "2", "1/4 cups", "1 tsp.", "1/2 tsp.", "1/2 tsp.", "1 tsp.", "5-6 cups"],
        instructions:"Cream butter and sugar, add oil, eggs and sour cream, mix well. Add vanilla, almond extract, baking soda and salt, combine completely. add flour slowly until not longer sticky. Shape cookies and place on ungreased baking sheet, bake at 350 degrees",
        tags:["cookies", "dessert", "baking"],
        source:"Brilynn Ellsworth",
        image:["https://www.livewellbakeoften.com/wp-content/uploads/2019/12/Soft-and-Chewy-Sugar-Cookies-7.jpg"]
    },
    {
        name:"Sweet Potato Fries", 
        ingredients:["sweet potatoes", "olive oil", "garlic powder", "paprika"], 
        pre:["", "2 T", "1 tsp", "1 tsp"],
        instructions:"Heat the over to 400. Peel and slice the sweet potatoes. Mix potatoes with oil and spices and lay on tray. Cook for about 10 minutes on each side or until done.",
        optional:["salt", "ketchup", "black pepper", "oil"],
        tags:["dinner", "side", "baking", "savory"],
        image: ["https://healthyhappylife.com/wp-content/uploads/2016/08/2016_08_04_bychloe_9999_24sweet-potato-fries-cream-cashew2000kathy-patalskyvegan-dip.png"]
    },
]



var tips = [
    {message:"FACT: You have a 3% chance of reading this message."},

    {message:"TIP: Do you love handwritten shopping lists? Great, Keep using it! After shopping you can manually add items directly into your pantry."},
    {message:"TIP: If you buy an ingredient every week you can pin it to your shopping list."},
    {message:"TIP: If you buy an ingredient every week you can pin it to your shopping list."},
    {message:"TIP: You can see all of your favorite recipes that use egg by searching 'egg' and selecting the favorite star."},
    {message:"If you haven't tried dark mode you definitely should!"},
    {message:"TIP: To speed up entering a custom recipe you can use the 'TAB' button to select the next input field."},
    {message:"TIP: Make sure you add your own recipes!"},
    {message:"TIP: Even if someone doesn't use Pantry you can easily send a custom recipe to them!"},
    {message:"Pantry has no log in or sign up. Everything is stored locally on your device. Even if we did get hacked they would have none of your information!"},
    {message:"Your shopping list and custom recipes can only be viewed by you unless you share them. Even we can't see them!"},
    {message:"TIP: Different members of your family can add things to their own shopping list. Just make sure they share that list with you before you go shopping!"},
    {message:"When you feel like you have nothing to cook, 'Pantry' will suggest meals using the ingredients you have."},
    {message:"TIP: That green circle in the bottom right corner contains information and settings."},
    {message:"TIP: If you shop at different stores you can categorize your ingredients to correspond with different stores."},
    {message:"\"Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume\" - u/ergotpoisoning"},
    {message:"If you have a great idea for this website please suggest it using a form in the settings menu!"},
    {message:"Not all of the ingredients in our ingredient list are real..."},
    {message:"\"It's sad that having real ingredients in food products is a selling point.\" - u/LaFerrari2305"},
    {message:"\"We eat a pizza from the inside out\" - u/Polarbear58"},
    {message:"\"One of the great things about cooking your own food is the sweet certainty that any hair in it is yours.\" - u/pherman2"},
    {message:"If you have a classic recipe that you think everyone will love please submit it in the settings menu!"},
    {message:"TIP: When adding a custom recipe try to keep the ingredient list simple. For example you can leave off salt and water from the ingredient list and just mention them in your cooking instructions."},
    {message:"TIP: You can pin recipes you are planning to cooking this week to the top of your recipe list. That way you can find them easily!"},
    {message:"TIP: If you have a lot of recipes to enter have a friend help you add them on their phone or computer. They can then easily share those recipes with you!"},
    {message:"TIP: You should only have pantry open in one tab on your device. Close all other tabs otherwise you could loose your recent data."},
    {message:"If something doesn't seem to be working please contact us immediately using the form in the settings menu."},
    {message:"TIP: Lots of ingredients can be substituted for other ingredients. For example if a recipe calls for lime juice you could probably also use lemon juice."},

]