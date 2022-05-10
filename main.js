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
  
  const keyboardElems = {
    row1: {
      Backquote: '`',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: 'Backspace',
    },
    row2: {
      Tab: 'Tab',
      KeyQ: 'q',
      KeyW: 'w',
      KeyE: 'e',
      KeyR: 'r',
      KeyT: 't',
      KeyY: 'y',
      KeyU: 'u',
      KeyI: 'i',
      KeyO: 'o',
      KeyP: 'p',
      BracketLeft: '[',
      BracketRight: ']',
      Backslash: '\\',
      Delete: 'Delete',
    },
    row3: {
      CapsLock: 'CapsLock',
      KeyA: 'a',
      KeyS: 's',
      KeyD: 'd',
      KeyF: 'f',
      KeyG: 'g',
      KeyH: 'h',
      KeyJ: 'j',
      KeyK: 'k',
      KeyL: 'l',
      Semicolon: ';',
      Quote: "'",
      Enter: 'Enter'
    },
    row4: {
      ShiftLeft: 'Shift',
      KeyZ: 'z',
      KeyX: 'x',
      KeyC: 'c',
      KeyV: 'v',
      KeyB: 'b',
      KeyN: 'n',
      KeyM: 'm',
      Comma: ',',
      Period: '.',
      Slash: '/',
      ArrowUp: 'ArrowUp',
      ShiftRight: 'Shift',
    },
    row5: {
      ControlLeft: 'Control',
      MetaRight: 'Meta',
      AltLeft: 'Alt',
      Space: ' ',
      AltRight: 'Alt',
      ArrowLeft: 'ArrowLeft',
      ArrowDown: 'ArrowDown',
      ArrowRight: 'ArrowRight',
      ControlRight: 'Control',
    }
  };
  
  KEYBOARD.classList.add('keyboard');
  WRAPPER.append(KEYBOARD);
  
  for (let key in keyboardElems) {
    const ROW = document.createElement('div');
    
    ROW.classList.add('row');
    KEYBOARD.append(ROW);
    
    for (let item in keyboardElems[key]) {
      const BTN = document.createElement('button');
      
      BTN.textContent = keyboardElems[key][item];
      BTN.classList.add('key');
      BTN.classList.add(item);
      ROW.append(BTN);
    }
  }
}

function createExtraInfo() {
  const WRAPPER = document.querySelector('.wrapper');
  const INFO = document.createElement('p');
  
  INFO.classList.add('info');
  INFO.textContent = 'Клавиатура создана в операционной системе Windows';
  WRAPPER.append(INFO);
}

function setHighlightsBtn(e) {
  const BTN = document.querySelector(`.${e.code}`);
  BTN.classList.add('key-highlight');
}

function unSetHighlightsBtn(e) {
  const BTN = document.querySelector(`.${e.code}`);
  BTN.classList.remove('key-highlight');
}

document.addEventListener('DOMContentLoaded', () => {
  createWrap();
  createTextarea();
  createKeyboard();
  createExtraInfo();
});

document.addEventListener('keydown', setHighlightsBtn);
document.addEventListener('keyup', unSetHighlightsBtn);