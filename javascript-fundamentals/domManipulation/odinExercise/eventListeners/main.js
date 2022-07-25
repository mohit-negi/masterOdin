
// first method of adding an event listener is to add inline 
// onclick attribute to the desired element

// Second method is adding an event listener with the querySelector

// onclick eventListener

const button = document.querySelector('.button')

button.addEventListener('click',() =>{
    alert('Button clicked');
});

//Mouseover eventListener

const changeBackground = document.querySelector('#btn-3');

changeBackground.addEventListener('mouseover',() =>{
    changeBackground.style.backgroundColor = 'blue';
});