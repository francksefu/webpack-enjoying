import {arr} from './array-feature.js';
const completer = () => {
   const inputCheck = document.querySelectorAll('.checky');
   const long = inputCheck.length;
   for(let i = 0; i < long; i += 1) {
    inputCheck[i].addEventListener('change', () => {
        if(inputCheck[i].checked) {
            
            inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'line-through';
            inputCheck[i].parentNode.childNodes[1].style.color = '#ddd';
            arr[i].completed = true;
            localStorage.setItem('toDoList', JSON.stringify(arr));
        } else {
            inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'none';
            inputCheck[i].parentNode.childNodes[1].style.color = '#000';
            arr[i].completed = false;
            localStorage.setItem('toDoList', JSON.stringify(arr));
        }
       
    });
   }
}

const checker = () => {
        const inputCheck = document.querySelectorAll('.checky');
        const long = inputCheck.length;
        for(let i = 0; i < long; i += 1) {
        if(arr[i].completed === true) {
            
            inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'line-through';
            inputCheck[i].parentNode.childNodes[1].style.color = '#ddd';
            inputCheck[i].checked = true;
        } else {
            inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'none';
            inputCheck[i].parentNode.childNodes[1].style.color = '#000';
        }
        
    }
   }

   const checkerL = () => {
    const inputCheck = document.querySelectorAll('.checky-left');
    const li = document.querySelectorAll('li');
    const long = li.length;
    for(let i = 0; i < long; i += 1) {
        if(arr[i].completed === true) {
            inputCheck[i].checked = true;
        } else {
            inputCheck[i].checked = false;
        }
    }
}

export {completer, checker, checkerL};