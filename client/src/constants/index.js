
// import { chair, controller, keyboard, monitor } from "../assets/productPhotos";

import chair from '../assets/productPhotos/chair.png'
import controller from '../assets/productPhotos/controller.png'
import keyboard from '../assets/productPhotos/keyboard.png'
import monitor from '../assets/productPhotos/monitor.png'


export const products = [
    {
        id: 1,
        imgURL: controller,
        name: 'HAVIT HV-G92 Gamepad',
        prevPrice: 160,
        newPrice: 1200,
        starNumber: 5,
        reviewNumber: 88,
        category: 'Electronics',
        subCategory: "Gaming",
        colors: []
    },
    {
        id: 2,
        imgURL: keyboard,
        name: 'AK-900 Wired Keyboard',
        prevPrice: 35,
        newPrice: 280,
        starNumber: 5,
        reviewNumber: 18,
        category: 'Electronics',
        subCategory: "Gaming",
        colors: []
    },
    {
        id: 3,
        imgURL: monitor,
        name: 'IPS LCD Gaming Monitor',
        prevPrice: 60,
        newPrice: 480,
        starNumber: 3,
        reviewNumber: 30,
        category: 'Electronics',
        subCategory: "Keyboard",
        colors: []
    },
    {
        id: 4,
        imgURL: chair,
        name: 'S-Series Comfort Chair ',
        prevPrice: 45,
        newPrice: 360,
        starNumber: 4,
        reviewNumber: 42,
        category: 'Home & Lifestyle',
        subCategory: "House",
        colors: []
    },
    {
        id: 5,
        imgURL: chair,
        name: 'S-Series Comfort Chair ',
        prevPrice: 45,
        newPrice: 360,
        starNumber: 4,
        reviewNumber: 42,
        category: 'Home & Lifestyle',
        subCategory: "House",
        colors: []
    },
    {
        id: 6,
        imgURL: chair,
        name: 'S-Series Comfort Chair ',
        prevPrice: 45,
        newPrice: 365,
        starNumber: 4,
        reviewNumber: 42,
        category: 'Home & Lifestyle',
        subCategory: "House",
        colors: []
    },
    {
        id: 7,
        imgURL: chair,
        name: 'S-Series Comfort Chair ',
        prevPrice: 45,
        newPrice: 334,
        starNumber: 4,
        reviewNumber: 42,
        category: 'Home & Lifestyle',
        subCategory: "Gaming",
        colors: []
    },
    {
        id: 8,
        imgURL: chair,
        name: 'Mans Jacket ',
        prevPrice: 45,
        newPrice: 555,
        starNumber: 4,
        reviewNumber: 42,
        category: "Man's Fashion",
        subCategory: "Clothing",
        colors: []
    },
    {
        id: 9,
        imgURL: chair,
        name: 'Womans Jacket',
        prevPrice: 45,
        newPrice: 777,
        starNumber: 4,
        reviewNumber: 42,
        category: "Woman's Fashion",
        subCategory: "Woman",
        colors: []
    },
    {
        id: 10,
        imgURL: chair,
        name: 'Mans Shoes ',
        prevPrice: 45,
        newPrice: 555,
        starNumber: 4,
        reviewNumber: 42,
        category: "Man's Fashion",
        subCategory: "Shoes",
        colors: []
    },
];


export const arrayOfCategories = [
    // { text: "All", value: "All", name: 'Category' },
    { text: "Woman's Fashion", value: "Woman's Fashion", name: 'Category' },
    { text: "Man's Fashion", value: "Man's Fashion", name: 'Category' },
    { text: 'Electronics', value: 'Electronics', name: 'Category' },
    { text: 'Home & Lifestyle', value: 'Home & Lifestyle', name: 'Category' },
    { text: 'Medicine', value: 'Medicine', name: 'Category' },
    { text: 'Sports & Outdoor', value: 'Sports & Outdoor', name: 'Category' },
    { text: 'Baby & Toys', value: 'Baby & Toys', name: 'Category' },
    { text: 'Groceries & Pets', value: 'Groceries & Pets', name: 'Category' },
    { text: 'Health & Beauty', value: 'Health & Beauty', name: 'Category' },

];


export const arrayOfPrices = [
    // { text: "All", value: 1000000, name: 'Price' },
    { text: "$0 - $100", value: '100', name: 'Price' },
    { text: "$100 - $1000", value: '1000', name: 'Price' },
    { text: "$1000 - $5000", value: '5000', name: 'Price' },
    { text: "over $5000", value: '10000', name: 'Price' },
];

export const categories = [
    "Woman's Fashion", "Man's Fashion", 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby & Toys', 'Groceries & Pets', 'Health & Beauty'
]