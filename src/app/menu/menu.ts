import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, NgClass,NgIf,NgFor],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  appetizers = [
    { name: "Bruschetta", price: 5.5, desc: "Tomato, garlic, olive oil", image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg" },
    { name: "Soup of the day", price: 4.5, desc: "Fresh seasonal soup", image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg" },
    { name: "Stuffed mushrooms", price: 6.0, desc: "Cheese & herbs", image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
    { name: "Chicken wings", price: 7.0, desc: "Spicy or BBQ", image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg" },
    { name: "Fried calamari", price: 8.0, desc: "With lemon dip", image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg" },
  ];

  mains = [
    { name: "Grilled chicken", price: 12.5, desc: "With vegetables", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" },
    { name: "Beef steak", price: 18.0, desc: "Medium grilled", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" },
    { name: "Pizza Margherita", price: 9.5, desc: "Classic Italian", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" },
    { name: "Salmon fillet", price: 16.0, desc: "With lemon butter", image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg" },
    { name: "Chicken curry", price: 13.0, desc: "Spicy & creamy", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg" },
    { name: "Vegetarian bowl", price: 10.0, desc: "Healthy mix", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
  ];

  sides = [
    { name: "Fries", price: 3.5, desc: "Crispy golden", image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg" },
    { name: "Salad", price: 4.0, desc: "Fresh greens", image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg" },
    { name: "Grilled veggies", price: 4.5, desc: "Seasonal", image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" },
    { name: "Onion rings", price: 4.0, desc: "Crispy", image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg" },
    { name: "Bread basket", price: 2.5, desc: "Fresh baked", image: "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg" },
  ];

  desserts = [
    { name: "Chocolate cake", price: 5.5, desc: "Rich & moist", image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" },
    { name: "Ice cream", price: 4.0, desc: "3 scoops", image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg" },
    { name: "Apple pie", price: 4.5, desc: "With cinnamon", image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg" },
    { name: "Waffles", price: 5.0, desc: "With fruits", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" },
    { name: "Fruit salad", price: 4.0, desc: "Fresh mix", image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg" },
  ];

  drinks = [
    { name: "Coca Cola", price: 3.0, desc: "Cold", image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg" },
    { name: "Coffee", price: 2.5, desc: "Espresso / Latte", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
    { name: "Beer", price: 4.0, desc: "Local draft", image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg" },
    { name: "Smoothie", price: 4.5, desc: "Fruit mix", image: "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg" },
    { name: "Lemonade", price: 3.5, desc: "Homemade", image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg" },
  ];
}

