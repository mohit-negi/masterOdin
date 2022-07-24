/*
    
    For DOM manipulation
    --------------------
    //00 - For selection of elements

    const varName = document.querySelector(Name);   //to select only one of many
    const varName = document.querySelectorAll(Name); //to select all
    const varName = document.getElementbyId(idName)'
    const varName = document.getElementbyClassName(className);


    const title = document.querySelector('.main-heading');

    //01 - inline styling 

    title.style.color = 'red';
    title.style.fontSize = '60px';

    //02 - To select all the items of a array and apply styling to them

    const listItems = document.querySelectorAll('.list-item');
    console.log(listItems);
    for(let i=0;i<listItems.length;i++)
    {
        listItems[i].style.fontSize = '48px';
        listItems[i].style.color = 'midnightblue';
    }

    //03 - Creating new elements

    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    //04 - adding elements
    
    ul.append(li);

    //05 - modifying the text

    li.innerText = "Deadpool";

    //06 - modifying the attributes

    li.setAttribute("class",'list-item');
    li.removeAttribute('class')

    const title = document.querySelector('.main-heading');
    console.log(title.getAttribute('class'));

    //07 - modifying class

    const li = document.querySelector('li');

    li.classList.add('lois');

    console.log(li.classList.contains('lois'));

    //08 - Removing a element

    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    ul.append(li);
    li.innerText = 'DeadPool'; 
    li.setAttribute("class",'list-item');
        //li.remove();
*/


/* 
    To navigate the DOM

    01 - Traverse the DOM
    --------------------

    Parent node traversal

    const li = document.querySelector('li');
    const ul = document.querySelector('ul');
    
    console.log(ul.parentNode);
    console.log(li.parentElement);
*/

