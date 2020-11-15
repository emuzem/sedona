'use strict'

const image = document.querySelector('.menu-image');
const menu = document.querySelector('.showHide');
const btnModal = document.querySelector('#searchHotel');
const modal = document.querySelector('.modal');
const m1 = document.querySelector('.m1');
const m2 = document.querySelector('.m2');
const v1 = document.querySelector('.v1');
const v2 = document.querySelector('.v2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

function showHideElem (trigger, element) {
    trigger.addEventListener('click', () => {
        element.style.display = 'flex';

        trigger.addEventListener('click', () => {
            element.style.display = 'none';
            showHideElem(image, menu);
        })
    })
}
function showHideModal (trigger, element) {
    trigger.addEventListener('click', () => {
        element.style.display = 'grid';
        trigger.addEventListener('click', () => {
            element.style.display = 'none';
            showHideModal(btnModal, modal);
        })
    })
}
function plusMinusValue (plus, minus, value, valueNumber){
    let counter = valueNumber;
    plus.addEventListener('click', () => {
        counter ++;
        value.innerHTML = `${counter}`;
    })
    minus.addEventListener('click', () => {
        counter --;
        if(counter < 0){
            counter++;
        }
            value.innerHTML = `${counter}`;

    })
}
plusMinusValue(p1, m1, v1, 2);
plusMinusValue(p2, m2, v2, 0);
showHideElem(image, menu);
showHideModal(btnModal, modal);