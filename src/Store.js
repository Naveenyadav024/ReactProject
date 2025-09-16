import { configureStore, createSlice } from "@reduxjs/toolkit";

// ✅ Product slice
const productSlice = createSlice({
  name: "products",
  initialState: {

     vegItems: [
  {
    productId: 201,
    productName: "Palak Paneer",
    productDescription: "A rich curry made with paneer cubes cooked in a smooth spinach gravy.",
    imageUrl: "/Images/Vegcurrys/Palak Paneer Recipe (Indian Cheese & Spinach).jpg",
    productPrice: 180,
  },
  {
    productId: 202,
    productName: "Paneer Butter Masala",
    productDescription: "Creamy and buttery tomato-based curry with paneer cubes.",
    imageUrl: "/Images/Vegcurrys/paneer-butter-masala.jpg",
    productPrice: 200,
  },
  {
    productId: 203,
    productName: "Matar Paneer",
    productDescription: "Paneer and green peas cooked in a spiced tomato curry.",
    imageUrl: "/Images/Vegcurrys/Matar Paneer Recipe (Punjabi Style Mutter Paneer Curry).jpg",
    productPrice: 170,
  },
  {
    productId: 204,
    productName: "Poori with Chole",
    productDescription: "Deep-fried bread served with spicy chickpea curry.",
    imageUrl: "/Images/Vegcurrys/img 1.jpg",
    productPrice: 120,
  },
  {
    productId: 205,
    productName: "Palak Paneer with Naan",
    productDescription: "Classic spinach-paneer curry served with soft naan bread.",
    imageUrl: "/Images/Vegcurrys/img 2.jpg",
    productPrice: 220,
  },
  {
    productId: 206,
    productName: "Khichdi with Pickle",
    productDescription: "Comforting rice-lentil dish served with tangy pickle.",
    imageUrl: "/Images/Vegcurrys/img 3.jpg",
    productPrice: 100,
  },
  {
    productId: 207,
    productName: "Gutti Vankaya Kura with Rice",
    productDescription: "Andhra-style stuffed brinjal curry served with steamed rice.",
    imageUrl: "/Images/Vegcurrys/img 4.jpg",
    productPrice: 150,
  },
  {
    productId: 208,
    productName: "Kala Chana with Puri",
    productDescription: "Black chickpea curry served with puffed puris.",
    imageUrl: "/Images/Vegcurrys/img 5.jpg",
    productPrice: 130,
  },
  {
    productId: 209,
    productName: "Shahi Paneer",
    productDescription: "Royal Mughlai curry made with paneer in a rich cashew gravy.",
    imageUrl: "/Images/Vegcurrys/img 6.jpg",
    productPrice: 220,
  },
  {
    productId: 210,
    productName: "Gutti Vankaya Kura",
    productDescription: "Traditional Andhra-style stuffed brinjal curry cooked with spices.",
    imageUrl: "/Images/Vegcurrys/img 7.jpg",
    productPrice: 160,
  },
  {
    productId: 211,
    productName: "Andhra-style Dondakaya Fry",
    productDescription: "Crispy stir-fried ivy gourd with aromatic spices.",
    imageUrl: "/Images/Vegcurrys/img 8.jpg",
    productPrice: 140,
  },
  {
    productId: 212,
    productName: "Chana Masala",
    productDescription: "Spicy and tangy chickpea curry cooked with onion-tomato gravy.",
    imageUrl: "/Images/Vegcurrys/img 9.jpg",
    productPrice: 150,
  },
  {
    productId: 213,
    productName: "Stuffed Paratha",
    productDescription: "Indian flatbread stuffed with spiced potato filling, served hot with curd or pickle.",
    imageUrl: "/Images/Vegcurrys/img 10.jpg",
    productPrice: 100,
  },
  {
    productId: 214,
    productName: "Vegetable Biryani",
    productDescription: "Aromatic basmati rice layered with fresh vegetables and spices, slow-cooked to perfection.",
    imageUrl: "/Images/Vegcurrys/img 11.jpg",
    productPrice: 200,
  },
  {
    productId: 215,
    productName: "Punugulu",
    productDescription: "Crispy Andhra snack made with fermented dosa batter, served with chutney.",
    imageUrl: "/Images/tiffines/bonda.avif",
    productPrice: 80,
  },
  {
    productId: 216,
    productName: "Curd Rice",
    productDescription: "Refreshing South Indian dish made with rice and curd, tempered with curry leaves and mustard seeds.",
    imageUrl: "/Images/tiffines/curd rice.avif",
    productPrice: 90,
  },
  {
    productId: 217,
    productName: "Idli",
    productDescription: "Soft and fluffy steamed rice cakes, a staple South Indian breakfast item.",
    imageUrl: "/Images/tiffines/idly.avif",
    productPrice: 70,
  },

  {
    productId: 218,
    productName: "Veg Pulao",
    productDescription: "Fragrant rice cooked with mixed vegetables and spices.",
    imageUrl: "/Images/tiffines/tomato rice.jpg",
    productPrice: 150,
  },
  {
    productId: 219,
    productName: "Medu Vada",
    productDescription: "South Indian crispy lentil fritters served with chutney and sambar.",
    imageUrl: "/Images/tiffines/vada.avif",
    productPrice: 90,
  },
  {
    productId: 220,
    productName: "Vegetable Dum Biryani",
    productDescription: "Slow-cooked biryani layered with basmati rice and vegetables.",
    imageUrl: "/Images/tiffines/veg biryani.avif",
    productPrice: 200,
  }
],


      
     nonVegItems : [
  {
    productId: 301,
    productName: "Chicken Curry",
    productDescription:
      "Spicy and flavorful chicken curry cooked with traditional Indian spices.",
    imageUrl: "/Images/tiffines/img1.jpg",
    productPrice: 220,
  },
  {
    productId: 302,
    productName: "Mutton Biryani",
    productDescription:
      "Aromatic basmati rice cooked with tender mutton pieces and rich spices.",
    imageUrl: "/Images/nonVeg/mutton biryani.jpg",
    productPrice: 350,
  },
  {
    productId: 303,
    productName: "Fish Curry",
    productDescription:
      "Crispy fried fish marinated with tangy and spicy masala.",
    imageUrl: "/Images/nonVeg/frish.jpg",
    productPrice: 180,
  },
  {
    productId: 304,
    productName: "Prawn Masala",
    productDescription:
      "Juicy prawns cooked in a thick, spicy masala gravy.",
    imageUrl: "/Images/nonVeg/frons.jpg",
    productPrice: 280,
  },
  {
    productId: 305,
    productName: "Egg Curry",
    productDescription:
      "Boiled eggs simmered in a rich onion-tomato based curry.",
    imageUrl: "/Images/nonVeg/egg.jpg",
    productPrice: 120,
  },
  {
    productId: 306,
    productName: "Butter Chicken",
    productDescription:
      "Creamy and mildly spiced tomato-based curry with tender chicken pieces.",
    imageUrl:"/Images/tiffines/img2.jpg",
    productPrice: 300,
  },
  {
    productId: 307,
    productName: "Chicken 65",
    productDescription:
      "Deep-fried spicy chicken appetizer with South Indian flavors.",
    imageUrl: "/Images/nonVeg/chicken 65.jpg",
    productPrice: 200,
  },
  {
    productId: 308,
    productName: "Tandoori Chicken",
    productDescription:
      "Char-grilled chicken marinated in yogurt and spices.",
    imageUrl: "/Images/nonVeg/chicken legs.jpg",
    productPrice: 280,
  },
  {
    productId: 309,
    productName: "Mutton Rogan Josh",
    productDescription:
      "Kashmiri style rich and aromatic lamb curry.",
    imageUrl: "/Images/nonVeg/mutton jucie.jpg",
    productPrice: 360,
  },
  {
    productId: 310,
    productName: "chicken fry",
    productDescription:
      "fry was cooked in a spicy coastal curry base.",
    imageUrl: "/Images/nonVeg/chaines-bravareges.avif",
    productPrice: 400,
  },
  {
    productId: 311,
    productName: "Fish Curry",
    productDescription:
      "Tangy and spicy fish curry made with tamarind and ground masala.",
    imageUrl: "/Images/nonVeg/frish fry.jpg",
    productPrice: 220,
  },
  {
    productId: 312,
    productName: "Chicken Biryani",
    productDescription:
      "Hyderabadi style biryani with layers of rice and chicken.",
    imageUrl: "/Images/nonVeg/Chicken-Biryani.avif",
    productPrice: 280,
  },
  {
    productId: 313,
    productName: "Keema Curry",
    productDescription:
      "Minced mutton cooked with onions, tomatoes, and spices.",
    imageUrl: "/Images/nonVeg/chiken cimma.jpg",
    productPrice: 250,
  },
  {
    productId: 314,
    productName: "Prawn Biryani",
    productDescription:
      "Delicious rice dish with prawns and aromatic spices.",
    imageUrl: "/Images/nonVeg/frones.jpg",
    productPrice: 320,
  },
  {
    productId: 315,
    productName: "Grilled Fish",
    productDescription:
      "Perfectly grilled fish with lemon and herbs.",
    imageUrl: "/Images/nonVeg/frish anthor.jpg",
    productPrice: 260,
  },
  {
    productId: 316,
    productName: "Egg Biryani",
    productDescription:
      "Fragrant rice layered with masala eggs and spices.",
    imageUrl: "/Images/tiffines/img15.jpg",
    productPrice: 180,
  },
  {
    productId: 317,
    productName: "Chicken Kebab",
    productDescription:
      "Juicy skewered chicken grilled with spices.",
    imageUrl: "/Images/nonVeg/chicken kabeb.jpg",
    productPrice: 220,
  },
  {
    productId: 318,
    productName: "Mutton Curry",
    productDescription:
      "Slow-cooked tender mutton in a spicy curry base.",
    imageUrl: "/Images/nonVeg/muttton curry.jpg",
    productPrice: 340,
  },
  {
    productId: 319,
    productName: "Fish Biryani",
    productDescription:
      "Unique biryani made with marinated fish and basmati rice.",
    imageUrl: "/Images/tiffines/img18.jpg",
    productPrice: 300,
  },
  {
    productId: 320,
    productName: "Chicken Manchurian",
    productDescription:
      "Indo-Chinese style chicken cooked in spicy tangy sauce.",
    imageUrl: "/Images/nonVeg/chicken manchrya.jpg",
    productPrice: 240,
  },
],
   snacksProducts: [
 
  {
    productId: 602,
    productName: "Veg Roll",
    productDescription: "Delicious roll filled with sautéed vegetables and spices.",
    imageUrl: "/Images/nonVeg/veg rool.jpg",
    productPrice: 40,
  },
  {
    productId: 603,
    productName: "Chicken Roll",
    productDescription: "Juicy chicken wrapped in soft paratha with chutney.",
    imageUrl: "/Images/chickenroll.jpg",
    productPrice: 70,
  },
  {
    productId: 604,
    productName: "Pani Puri",
    productDescription: "Crispy puris filled with tangy & spicy water.",
    imageUrl: "/Images/panipuri1.jpg",
    productPrice: 30,
  },
  {
    productId: 605,
    productName: "Pasta",
    productDescription: "Creamy pasta cooked with vegetables and Italian spices.",
    imageUrl: "/Images/pasta.jpg",
    productPrice: 120,
  },
  {
    productId: 606,
    productName: "Pizza Slice",
    productDescription: "Cheesy pizza slice topped with fresh veggies.",
    imageUrl: "/Images/nonVeg/pizza (1).jpg",
    productPrice: 150,
  },
  {
    productId: 607,
    productName: "Burger",
    productDescription: "Soft bun loaded with patty, lettuce, and sauces.",
    imageUrl: "/Images/nonVeg/burger.jpg",
    productPrice: 80,
  },
  {
    productId: 608,
    productName: "Sandwich",
    productDescription: "Grilled sandwich stuffed with cheese and veggies.",
    imageUrl: "/Images/nonVeg/sandwich.jpg",
    productPrice: 60,
  },
  {
    productId: 609,
    productName: "Cutlet",
    productDescription: "Crispy fried cutlet made with mashed potatoes & peas.",
    imageUrl: "/Images/cutlet.jpg",
    productPrice: 25,
  },
  {
    productId: 610,
    productName: "Pav Bhaji",
    productDescription: "Mumbai street-style spicy mashed veggies served with pav.",
    imageUrl: "/Images/pavbhaji.jpg",
    productPrice: 100,
  },
  {
    productId: 611,
    productName: "Idli",
    productDescription: "Steamed South Indian rice cakes served with chutney & sambar.",
    imageUrl: "/Images/idli.jpg",
    productPrice: 40,
  },
  {
    productId: 612,
    productName: "Vada Pav",
    productDescription: "Mumbai’s iconic snack – spicy vada in a pav bun.",
    imageUrl: "/Images/vadapav.jpg",
    productPrice: 25,
  },
  {
    productId: 613,
    productName: "Bhel Puri",
    productDescription: "Tangy puffed rice mixture with chutneys and sev.",
    imageUrl: "/Images/bhelpuri.jpg",
    productPrice: 35,
  },
  {
    productId: 614,
    productName: "Dhokla",
    productDescription: "Soft & spongy Gujarati steamed snack made of gram flour.",
    imageUrl: "/Images/dhokla.jpg",
    productPrice: 50,
  },
  {
    productId: 615,
    productName: "Pakora",
    productDescription: "Crispy deep-fried fritters made with onions & gram flour.",
    imageUrl: "/Images/pakora.jpg",
    productPrice: 30,
  },
  {
    productId: 616,
    productName: "French Fries",
    productDescription: "Golden fried potato fries sprinkled with salt & masala.",
    imageUrl: "/Images/nonVeg/french fries.jpg",
    productPrice: 70,
  },
  {
    productId: 617,
    productName: "Spring Roll",
    productDescription: "Crispy rolls stuffed with spiced noodles & veggies.",
    imageUrl: "/Images/nonVeg/spring rool.jpg",
    productPrice: 60,
  },
  {
    productId: 618,
    productName: "Paneer Tikka",
    productDescription: "Marinated paneer cubes grilled with veggies.",
    imageUrl: "/Images/paneertikka.jpg",
    productPrice: 150,
  },
  {
    productId: 619,
    productName: "Chole Bhature",
    productDescription: "Fluffy bhature served with spicy chole curry.",
    imageUrl: "/Images/cholebhature.jpg",
    productPrice: 120,
  },
  {
    productId: 620,
    productName: "Dosa",
    productDescription: "South Indian crispy dosa served with chutney & sambar.",
    imageUrl: "/Images/dosa.jpg",
    productPrice: 80,
  },
],

 softDrinks: [
  
  {
    productId: 602,
    productName: "Chocolate Milkshake",
    productDescription: "Thick and rich chocolate shake with choco chips.",
    imageUrl: "/Images/nonVeg/d6.jpg",
    productPrice: 100,
  },
  {
    productId: 603,
    productName: "Strawberry Milkshake",
    productDescription: "Fresh strawberry puree blended into creamy shake.",
    imageUrl: "/Images/nonVeg/d7.jpg",
    productPrice: 95,
  },
  {
    productId: 604,
    productName: "Oreo Milkshake",
    productDescription: "Blend of Oreo cookies, ice cream, and chocolate syrup.",
    imageUrl: "/Images/nonVeg/d8 oreo.jpg",
    productPrice: 110,
  },
  {
    productId: 605,
    productName: "Cold Coffee",
    productDescription: "Chilled coffee with a hint of vanilla and cream.",
    imageUrl: "/Images/nonVeg/d9 cold coffe.jpg",
    productPrice: 80,
  },
   {
    productId: 617,
    productName: "KitKat Shake",
    productDescription: "Crunchy KitKat blended into rich milkshake.",
    imageUrl: "/Images/nonVeg/d13 kit.jpg",
    productPrice: 130,
  },
  {
    productId: 607,
    productName: "Berry Blast Mocktail",
    productDescription: "Coconut and pineapple blend, served chilled.",
    imageUrl: "/Images/nonVeg/d1.jpg",
    productPrice: 130,
  },
  {
    productId: 608,
    productName: "fancy mocktail",
    productDescription: "Refreshing citrus mocktail with a tropical vibe.",
    imageUrl: "/Images/nonVeg/d3.jpg",
    productPrice: 135,
  },
  {
    productId: 609,
    productName: "Mint Mojito",
    productDescription: "Fresh mint, lemon, and soda mocktail.",
    imageUrl: "/Images/nonVeg/d4.jpg",
    productPrice: 85,
  },
  {
    productId: 610,
    productName: "Minty Crimson Chill",
    productDescription: "Energy drink to boost stamina and alertness.",
    imageUrl: "/Images/nonVeg/d5.jpg",
    productPrice: 150,
  },
  {
    productId: 611,
    productName: "Tonic Water",
    productDescription: "Premium carbonated tonic water with citrus hints.",
    imageUrl: "/Images/nonVeg/d5.jpg",
    productPrice: 95,
  },
  {
    productId: 612,
    productName: "Sparkling Water",
    productDescription: "Chilled and lightly carbonated premium water.",
    imageUrl: "/Images/drinks/m12.jpg",
    productPrice: 70,
  },
  {
    productId: 613,
    productName: "Saffron Badam Milk",
    productDescription: "Traditional Indian drink with saffron and almonds.",
    imageUrl: "/Images/drinks/m13.jpg",
    productPrice: 140,
  },
  {
    productId: 614,
    productName: "Mango Lassi",
    productDescription: "Sweet mango yogurt drink, served chilled.",
    imageUrl: "/Images/nonVeg/d14 banana.jpg",
    productPrice: 90,
  },
  {
    productId: 615,
    productName: "Rose Milk",
    productDescription: "Chilled milk with fragrant rose syrup.",
    imageUrl: "/Images/drinks/m15.jpg",
    productPrice: 80,
  },
  {
    productId: 616,
    productName: " PineApple Shake",
    productDescription: "Luxury milkshake with Ferrero Rocher chocolate.",
    imageUrl: "/Images/nonVeg/d11 pineapple.jpg",
    productPrice: 150,
  },
  {
    productId: 606,
    productName: "Iced Mocha",
    productDescription: "Espresso, chocolate, and milk served over ice.",
    imageUrl: "/Images/nonVeg/d10 ice mo.jpg",
    productPrice: 120,
  },

  {
    productId: 618,
    productName: "Dry Fruit Milkshake",
    productDescription: "Loaded with almonds, cashews, and dates.",
    imageUrl: "/Images/nonVeg/d12 fruit.jpg",
    productPrice: 145,
  },
  {
    productId: 619,
    productName: "Avocado Smoothie",
    productDescription: "Creamy smoothie with avocado, honey, and banana.",
    imageUrl: "/Images/drinks/m19.jpg",
    productPrice: 160,
  },
  {
    productId: 620,
    productName: "Chocolate Frappe",
    productDescription: "Icy blend of coffee, chocolate, and milk.",
    imageUrl: "/Images/drinks/m20.jpg",
    productPrice: 125,
  },
]

  },
  reducers: {},
});

   const initialState= JSON.parse(localStorage.getItem("cart"))

// ✅ Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = state.find(
        (item) => item.product.productId === action.payload.productId
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(
        (item) => item.product.productId !== action.payload.productId
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.find(
        (item) => item.product.productId === action.payload.productId
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(
        (item) => item.product.productId === action.payload.productId
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter(
            (i) => i.product.productId !== action.payload.productId
          );
        }
      }
    },
    // ✅ Added missing clearCart
    clearCart: () => {
      return [];
    },
  },
});

// ✅ Orders slice
const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    clearOrders: () => {
      return [];
    },
  },
});

// ✅ Store
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
  },
});

   store.subscribe(()=>{
    localStorage.setItem("cart",JSON.stringify(store.getState().cart));
   });


export default store;

// ✅ Cart actions
export const {
  addCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

// ✅ Order actions
export const { addOrder, clearOrders } = orderSlice.actions;

// Optional exports
export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
export const cartActions = cartSlice.actions;
