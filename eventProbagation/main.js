//Dom manipulation

//Event probagation


window.addEventListener('click',()=>{
    console.log("window");
},true);

document.addEventListener('click',()=>
{
    console.log('document');
},true);

document.querySelector('.container').addEventListener('click',function(){
    console.log('container');
},true);
document.querySelector('.outer-container').addEventListener('click',()=>{
    console.log('outer-container');
},true);
document.querySelector('.inner-container').addEventListener('click',()=>{
    console.log('inner-container');
},true);
document.querySelector('.button').addEventListener('click',function(e){
    console.log(e.target.innerText = 'clicked');
},{once: true});

//changing the boolean value from true to false results in capturing to bubbling

//{once: true} adding this to the eventlistener will make it trigger only once

//eventobject.stopProbagation(); //to stop the bubbling/capturing at that
                                //specific element
//eventobject.preventDefault(); //used to prevent the behavior from going
                                //to default (used in anchor tags)