// Lista  de recetas
const recipes = [
    { name: "Arroz con Pollo", ingredients: ["arroz", "pollo", "cebolla", "ajo", "pimiento"] },
    { name: "Sopa de Verduras", ingredients: ["zanahoria", "papa", "calabaza", "apio", "cebolla"] },
    { name: "Tacos de Carne", ingredients: ["tortilla", "carne", "cebolla", "cilantro", "limón"] },
    { name: "Ensalada Mixta", ingredients: ["lechuga", "tomate", "zanahoria", "aceite", "vinagre"] },
    { name: "Pizza Casera", ingredients: ["harina", "queso", "salsa de tomate", "levadura", "aceitunas"] },
    { name: "Panqueques", ingredients: ["harina", "huevos", "leche", "azúcar", "mantequilla"] },
    { name: "Guacamole", ingredients: ["palta", "cebolla", "tomate", "limón", "cilantro"] },
    { name: "Pasta Alfredo", ingredients: ["pasta", "crema", "queso", "ajo", "mantequilla"] },
    { name: "Churrasco a la Parrilla", ingredients: ["carne", "sal", "ajo", "orégano", "limón"] },
    { name: "Omelette de Verduras", ingredients: ["huevos", "cebolla", "pimiento", "queso", "aceite"] },
    { name: "Empanadas de Carne", ingredients: ["masa", "carne", "cebolla", "pimiento", "aceitunas"] },
    { name: "Churros Caseros", ingredients: ["harina", "azúcar", "agua", "mantequilla", "canela"] },
    { name: "Pescado al Horno", ingredients: ["pescado", "limón", "ajo", "perejil", "aceite"] },
    { name: "Burritos Vegetarianos", ingredients: ["tortilla", "frijoles", "lechuga", "queso", "salsa"] },
    { name: "Risotto de Champiñones", ingredients: ["arroz", "champiñones", "caldo", "queso", "mantequilla"] },
    { name: "Helado Casero", ingredients: ["leche", "crema", "azúcar", "vainilla", "frutas"] },
    { name: "Croquetas de Papa", ingredients: ["papa", "queso", "pan rallado", "huevos", "aceite"] },
    { name: "Sushi Básico", ingredients: ["arroz", "alga nori", "salmón", "aguacate", "salsa de soja"] },
    { name: "Milanesa", ingredients: ["carne", "huevos", "pan rallado", "ajo", "perejil"] },
    {
        name: "Ensalada César",
        ingredients: ["lechuga", "crutones", "queso parmesano", "pollo", "aderezo César"]
    },
    {
        name: "Spaghetti a la Boloñesa",
        ingredients: ["pasta", "carne molida", "tomate", "cebolla", "ajo", "zanahoria"]
    },
    {
        name: "Tacos de Pollo",
        ingredients: ["tortillas", "pollo", "lechuga", "salsa", "queso rallado"]
    },
    {
        name: "Pizza Margarita",
        ingredients: ["masa de pizza", "salsa de tomate", "queso mozzarella", "albahaca"]
    },
    {
        name: "Hamburguesa Clásica",
        ingredients: ["pan de hamburguesa", "carne molida", "lechuga", "tomate", "queso", "salsa"]
    },
    {
        name: "Sopa de Verduras",
        ingredients: ["zanahoria", "papa", "apio", "cebolla", "caldo"]
    },
    {
        name: "Panqueques con Dulce de Leche",
        ingredients: ["harina", "huevo", "leche", "manteca", "dulce de leche"]
    },
    {
        name: "Risotto de Hongos",
        ingredients: ["arroz", "hongos", "cebolla", "vino blanco", "caldo", "queso parmesano"]
    },
    {
        name: "Lasaña de Carne",
        ingredients: ["placas de lasaña", "carne molida", "queso ricotta", "salsa de tomate", "queso mozzarella"]
    },
    {
        name: "Tarta de Espinaca y Queso",
        ingredients: ["masa de tarta", "espinaca", "huevo", "queso rallado", "cebolla"]
    },
    {
        name: "Empanadas de Carne",
        ingredients: ["masa de empanadas", "carne molida", "cebolla", "pimiento", "huevo duro"]
    },
    {
        name: "Pollo al Curry",
        ingredients: ["pollo", "curry", "leche de coco", "arroz", "cebolla"]
    },
    {
        name: "Guiso de Lentejas",
        ingredients: ["lentejas", "carne", "chorizo", "papa", "zanahoria", "cebolla"]
    },
    {
        name: "Wraps de Vegetales",
        ingredients: ["tortillas", "zanahoria", "lechuga", "pepino", "salsa de yogur"]
    },
    {
        name: "Chili con Carne",
        ingredients: ["carne molida", "porotos rojos", "tomate", "cebolla", "ají", "especias"]
    },
    {
        name: "Ceviche de Pescado",
        ingredients: ["pescado blanco", "limón", "cebolla morada", "cilantro", "ají", "maíz"]
    },
    {
        name: "Papas al Horno con Romero",
        ingredients: ["papa", "romero", "aceite de oliva", "sal", "pimienta"]
    },
    {
        name: "Budín de Chocolate",
        ingredients: ["harina", "cacao", "huevo", "manteca", "azúcar", "leche"]
    },
    {
        name: "Ensalada Caprese",
        ingredients: ["tomate", "queso mozzarella", "albahaca", "aceite de oliva", "sal"]
    },
    {
        name: "Pollo al Horno con Papas",
        ingredients: ["pollo", "papa", "ajo", "limón", "aceite de oliva"]
    },
    {
        name: "Tarta de Manzana",
        ingredients: ["manzana", "masa de tarta", "azúcar", "manteca", "canela"]
    },
    {
        name: "Canelones de Espinaca",
        ingredients: ["placas de canelones", "espinaca", "queso ricotta", "queso rallado", "salsa blanca"]
    },
    {
        name: "Croquetas de Papa",
        ingredients: ["papa", "huevo", "pan rallado", "queso", "manteca"]
    }
];

// Función para buscar recetas
function findRecipes(userIngredients) {
    const inputIngredients = userIngredients.split(",").map(ing => ing.trim().toLowerCase());
    const matchingRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => inputIngredients.includes(ingredient))
    );

    return matchingRecipes.length > 0
        ? matchingRecipes.map(recipe => recipe.name)
        : ["No se encontraron recetas con esos ingredientes"];
}

// Manejo del botón
document.getElementById("generateBtn").addEventListener("click", () => {
    const userIngredients = document.getElementById("ingredients").value;
    const recipeOutput = document.getElementById("recipeOutput");
    
    if (userIngredients.trim() === "") {
        recipeOutput.textContent = "Por favor, introduce al menos un ingrediente.";
        recipeOutput.classList.add("visible");
        return;
    }

    const recipesFound = findRecipes(userIngredients);
    recipeOutput.innerHTML = recipesFound.join("<br>");
    recipeOutput.classList.add("visible");

    // Reinicia la animación si ya estaba visible
    recipeOutput.style.animation = "none";
    setTimeout(() => recipeOutput.style.animation = "", 10);
});
