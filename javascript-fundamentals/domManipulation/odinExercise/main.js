const container = document.querySelector('main');
const div = document.createElement('div');
container.appendChild(div);

//task1
const para = document.createElement('p');

para.textContent = "Hey i'm red!";
para.style.color = 'red';

div.appendChild(para);

//task2
const heading = document.createElement('h3');

heading.textContent = "I'm a blue h3!";
heading.style.color = 'blue';
div.appendChild(heading);

//task 3
const div2 = document.createElement('div');

const h1 = document.createElement('h1');
const p = document.createElement('p');

h1.textContent = "I'm in a div";
p.textContent = "Me Too";

div2.append(h1);
div2.append(p);

div2.style.backgroundColor = 'Pink';
div2.style.border = 'black';
div2.style.padding = '10px';
container.append(div2);
