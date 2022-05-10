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
      const TEXT = ['Backquote', 'Digit', 'Minus', 'Equal', 'Key', 'Bracket', 'Backslash', 'Semicolon', 'Quote',
        'Comma', 'Period', 'Slash', 'Space'];
      const BTN = document.createElement('button');
      
      switch (item) {
        case 'ArrowUp':
          BTN.style.backgroundImage = 'url(assets/svg/arrow_drop_up_black_24dp.svg)';
          break;
        
        case 'ArrowDown':
          BTN.style.backgroundImage = 'url(assets/svg/arrow_drop_down_black_24dp.svg)';
          break;
        
        case 'ArrowLeft':
          BTN.style.backgroundImage = 'url(assets/svg/arrow_left_black_24dp.svg)';
          break;
        
        case 'ArrowRight':
          BTN.style.backgroundImage = 'url(assets/svg/arrow_right_black_24dp.svg)';
          break;
        
        case 'ControlLeft':
        case 'ControlRight':
          BTN.textContent = 'Ctrl';
          break;
        
        case 'MetaRight':
          BTN.textContent = 'Win';
          break;
        
        default:
          BTN.textContent = keyboard[key][item];
      }
      
      BTN.classList.add('key');
      BTN.classList.add(item);
      
      if (item === 'Space') BTN.classList.add('space');
      
      TEXT.forEach(letter => {
        if (item.startsWith(letter)) BTN.classList.add('text')
      });
      
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
  document.querySelector(`.${e.code}`).classList.add('key-highlight');
}

function unSetHighlightsBtn(e) {
  document.querySelector(`.${e.code}`).classList.remove('key-highlight');
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

function typingText() {
  const TEXTAREA = document.querySelector('textarea');
  
  document.querySelector('.keyboard-wrap').addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
      TEXTAREA.focus();
      
      if (e.target.classList.contains('text')) {
        TEXTAREA.textContent += e.target.textContent;
      } else {
        switch (e.target.classList[1]) {
          case 'Tab':
            TEXTAREA.textContent += '    ';
            break;
          
          case 'Delete':
            const start = TEXTAREA.textContent.slice(0, getCursorPosition(TEXTAREA));
            const end = TEXTAREA.textContent.slice(getCursorPosition(TEXTAREA) + 1);
            
            TEXTAREA.textContent = start + end;
        }
      }
    }
  });
}

function getCursorPosition(textarea) {
  let currPos = 0;
  
  if (document.selection) {
    const sel = document.selection.createRange();
    
    textarea.focus();
    currPos = sel.text.length;
  } else if (textarea.selectionStart || textarea.selectionStart === '0') {
    currPos = textarea.selectionStart;
  }
  
  return currPos;
}

setLang();

document.addEventListener('DOMContentLoaded', () => {
  const {langs, currLeng} = state;
  
  createWrap();
  createTextarea();
  createKeyboardWrap();
  createKeyboard(langs[currLeng]);
  createExtraInfo();
  typingText();
});

document.addEventListener('keydown', setHighlightsBtn);
document.addEventListener('keyup', unSetHighlightsBtn);

document.addEventListener('keyup', (e) => {
  addCombination(e);
  changeLang();
  saveLang(state.currLeng);
});