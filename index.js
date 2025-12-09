const recipes = [
        {
          title: "French Onion Soup",
          img: "../image/photo-1546069901-eacef0df6022.avif",
          description: "Rich caramelized onion soup.",
          prepTime: 60,
          level: "Intermediate",      
          cuisine: "Mediterranean",
          ingredients: [
            "4 large onions",
            "1/2 cup white wine",
            "1 liter beef broth", 
            "4 tbsp butter",
          ],
          instruction: [
            "Caramelize onions.",
            "Add wine.",
            "Add broth.",
            "Serve with toasted bread.",
          ],
          nutrition: {
            calories: "380",
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg",
          },
        },

        {
          title: "Chicken Alfredo Pasta",
          img: "../image/photo-1546069901-eacef0df6022.avif",
          description: "Creamy parmesan chicken pasta.",
          prepTime: 40,
          level: "Easy",
          cuisine: "Italian",
          ingredients: [
            "250g pasta",
            "2 chicken breasts",
            "1 cup cream",
            "1 cup parmesan",
          ],
          instruction: [
            "Cook pasta.",
            "Cook chicken.",
            "Prepare Alfredo sauce.",
            "Mix together.",
          ],
          nutrition: {
            calories: "520",
            protein: "32g",
            carbs: "45g",
            fat: "22g",
            fiber: "3g",
            sodium: "640mg",
          },
        },

        {
          title: "Beef Tacos",
          img: "../image/photo-1546069901-eacef0df6022.avif",
          description: "Mexican style crispy tacos.",
          prepTime: 50,
          level: "Easy",
          cuisine: "Mexican",
          ingredients: [
            "500g beef",
            "1 taco seasoning",
            "8 tortillas",
            "Cheese",
          ],
          instruction: ["Cook beef.", "Warm tortillas.", "Assemble tacos."],
          nutrition: {
            calories: "290",
            protein: "20g",
            carbs: "28g",
            fat: "12g",
            fiber: "2g",
            sodium: "760mg",
          },
        },
      ];

      function loadRecipe(recipe) {
        document.getElementById("recipeImage").src = recipe.img;
        document.getElementById("recipeTitle").textContent = recipe.title;
        document.getElementById("recipeDesc").textContent = recipe.description;
        document.getElementById("recipeLevel").textContent = recipe.level;
        document.getElementById("recipeCuisine").textContent = recipe.cuisine;

        document.getElementById("recipeWarning").style.display =
          recipe.prepTime > 45 ? "flex" : "none";

        document.getElementById("recipeIngredients").innerHTML =
          recipe.ingredients
            .map(
              (i, index) => `
          <div class="ingred d-flex gap-2 mb-3">
            <div class="num-i"><span>${index + 1}</span></div>
            <div class="in-t"><span>${i}</span></div>
          </div>
        `
            )
            .join("");

        document.getElementById("recipeInstructions").innerHTML =
          recipe.instruction
            .map(
              (st, index) => `
          <div class="Instruct d-flex gap-2 mb-3">
            <div class="num-in"><span>${index + 1}</span></div>
            <div class="intr-t"><span>${st}</span></div>
          </div>
        `
            )
            .join("");

        document.getElementById("nutCalories").textContent =
          recipe.nutrition.calories;
        document.getElementById("nutProtein").textContent =
          recipe.nutrition.protein;
        document.getElementById("nutCarbs").textContent =
          recipe.nutrition.carbs;
        document.getElementById("nutFat").textContent = recipe.nutrition.fat;
        document.getElementById("nutFiber").textContent =
          recipe.nutrition.fiber;
        document.getElementById("nutSodium").textContent =
          recipe.nutrition.sodium;
      }

      document
        .getElementById("randomRecipeBtn")
        .addEventListener("click", () => {
          const randomIndex = Math.floor(Math.random() * recipes.length);
          loadRecipe(recipes[randomIndex]);
        });

      loadRecipe(recipes[0]);