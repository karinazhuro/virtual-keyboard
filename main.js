'use strict';

const state = {
  langs: {
    en: {
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
    },
    ru: {
      row1: {
        Backquote: 'ё',
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
        KeyQ: 'й',
        KeyW: 'ц',
        KeyE: 'у',
        KeyR: 'к',
        KeyT: 'е',
        KeyY: 'н',
        KeyU: 'г',
        KeyI: 'ш',
        KeyO: 'щ',
        KeyP: 'з',
        BracketLeft: 'х',
        BracketRight: 'ъ',
        Backslash: '\\',
        Delete: 'Delete',
      },
      row3: {
        CapsLock: 'CapsLock',
        KeyA: 'ф',
        KeyS: 'ы',
        KeyD: 'в',
        KeyF: 'а',
        KeyG: 'п',
        KeyH: 'р',
        KeyJ: 'о',
        KeyK: 'л',
        KeyL: 'д',
        Semicolon: 'ж',
        Quote: 'э',
        Enter: 'Enter'
      },
      row4: {
        ShiftLeft: 'Shift',
        KeyZ: 'я',
        KeyX: 'ч',
        KeyC: 'с',
        KeyV: 'м',
        KeyB: 'и',
        KeyN: 'т',
        KeyM: 'ь',
        Comma: 'б',
        Period: 'ю',
        Slash: '.',
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
    }
  },
  currLeng: null,
  getCode: [],
  combinationChangingLang: ['ShiftLeft', 'AltLeft'].sort().toString(),
}

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

function createKeyboardWrap() {
  const WRAPPER = document.querySelector('.wrapper');
  const KEYBOARD = document.createElement('div');
  
  KEYBOARD.classList.add('keyboard-wrap');
  WRAPPER.append(KEYBOARD);
}

function createKeyboard(keyboard) {
  clearKeyboard();
  drawKeyboard(keyboard);
}

function clearKeyboard() {
  document.querySelectorAll('.row').forEach(item => item.remove());
}

function drawKeyboard(keyboard) {
  const KEYBOARD_WRAP = document.querySelector('.keyboard-wrap');
  
  for (let key in keyboard) {
    const ROW = document.createElement('div');
    
    ROW.classList.add('row');
    KEYBOARD_WRAP.append(ROW);
    
    for (let item in keyboard[key]) {
      const BTN = document.createElement('button');
      
      BTN.textContent = keyboard[key][item];
      BTN.classList.add('key');
      BTN.classList.add(item);
      ROW.append(BTN);
    }
  }
}

function createExtraInfo() {
  const WRAPPER = document.querySelector('.wrapper');
  const EXTRA_INFO = document.createElement('div');
  const OC = document.createElement('p');
  const CHANGE_LANG = document.createElement('p');
  
  EXTRA_INFO.classList.add('extra-info');
  WRAPPER.append(EXTRA_INFO);
  
  OC.classList.add('info');
  OC.textContent = 'Клавиатура создана в операционной системе Windows';
  EXTRA_INFO.append(OC);
  
  CHANGE_LANG.classList.add('change-lang');
  CHANGE_LANG.textContent = 'Для переключения языка комбинация: левыe shift + alt';
  EXTRA_INFO.append(CHANGE_LANG);
}

function setHighlightsBtn(e) {
  const BTN = document.querySelector(`.${e.code}`);
  BTN.classList.add('key-highlight');
}

function unSetHighlightsBtn(e) {
  const BTN = document.querySelector(`.${e.code}`);
  BTN.classList.remove('key-highlight');
}

function changeLang() {
  const {getCode, combinationChangingLang} = state;
  
  if (getCode.length === 2 && getCode.sort().toString() === combinationChangingLang) {
    state.currLeng = state.currLeng === 'en' ? 'ru' : 'en';
    state.getCode = [];
    
    createKeyboard(state.langs[state.currLeng]);
  }
}

function addCombination(e) {
  if (e.code === 'ShiftLeft' || e.code === 'AltLeft') {
    state.getCode.push(e.code);
  }
}

function saveLang(currentLang) {
  localStorage.setItem('lang', currentLang);
}

function setLang() {
  state.currLeng = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
}

setLang();

document.addEventListener('DOMContentLoaded', () => {
  const {langs, currLeng} = state;
  
  createWrap();
  createTextarea();
  createKeyboardWrap();
  createKeyboard(langs[currLeng]);
  createExtraInfo();
});

document.addEventListener('keydown', setHighlightsBtn);
document.addEventListener('keyup', unSetHighlightsBtn);

document.addEventListener('keyup', (e) => {
  addCombination(e);
  changeLang();
  saveLang(state.currLeng);
});