'use strict';

function createWrap() {
  const BODY = document.querySelector('body');
  const WRAPPER = document.createElement('div');
  
  WRAPPER.classList.add('wrapper');
  BODY.prepend(WRAPPER);
}

function createTextarea() {
  const WRAPPER = document.querySelector('.wrapper');
  const TEXTAREA = document.createElement('textarea');
  
  WRAPPER.append(TEXTAREA);
}

function createKeyboard() {
  const WRAPPER = document.querySelector('.wrapper');
  const KEYBOARD = document.createElement('div');
  
  const keyboardElem = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift'],
    ['Ctr', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctr']
  ];
  
  KEYBOARD.classList.add('keyboard');
  WRAPPER.append(KEYBOARD);
  
  keyboardElem.forEach(itemRow => {
    const ROW = document.createElement('div');
    
    ROW.classList.add('row');
    KEYBOARD.append(ROW);
    
    itemRow.forEach(item => {
      const BTN = document.createElement('button');
      
      BTN.textContent = item;
      BTN.classList.add('key');
      ROW.append(BTN);
    });
  });
}

function createExtraInfo() {
  const WRAPPER = document.querySelector('.wrapper');
  const INFO = document.createElement('p');
  
  INFO.classList.add('info');
  INFO.textContent = 'Клавиатура создана в операционной системе Windows';
  WRAPPER.append(INFO);
}

document.addEventListener('DOMContentLoaded', () => {
  createWrap();
  createTextarea();
  createKeyboard();
  createExtraInfo();
});