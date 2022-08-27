var myLibrary = [];

function book()
{
    
}

function addBook()
{
    const container = document.querySelector('.container');
    const addButton = container.querySelector('.addBook');
    const addBookSection = document.querySelector('.addBookSection');
    addButton.addEventListener('click',()=>{
        addBookSection.classList.toggle('clicked');
    });

    // var numBooks = prompt("Enter the number of the books:");

    // for(var it=0;it<numBooks;it++)
    // {
    //     myLibrary[it] = prompt("Enter the name of book :");
    // }
}
addBook();
//const outerContainer = document.querySelector(".container");
//const container = document.getElementById("grid");
