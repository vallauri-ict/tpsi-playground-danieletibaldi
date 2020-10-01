"use strict";
let itemsArray = []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

if (localStorage.getItem("items")){
    itemsArray = JSON.parse(localStorage.getItem('items'));
}

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    liMaker(input.value);
    input.value = '';

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
})

data.forEach((item) => {
    liMaker(item)
})

