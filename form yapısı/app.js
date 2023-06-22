//FORM SUBMİT
//inputta name bilgisi muhakkak olmalı!
 
// let formDOM=document.querySelector("#userForm");

// formDOM.addEventListener('submit',formSubmit);

// function formSubmit(event){
//     event.preventDefault(); //default işlemini engelledik.
//     console.log("işlem gerçekleşti");

//     let scoreInputDOM=document.querySelector("#score");
//     console.log(scoreInputDOM.value);

//     localStorage.setItem('score',scoreInputDOM.value);
// }

let userFormDOM=document.querySelector('#userForm');

userFormDOM.addEventListener('submit',formHandler);

function formHandler(event){
    event.preventDefault();
    const USER_NAME=document.querySelector('#username');
    const SCORE=document.querySelector('#score');

    addItem(USER_NAME.value,SCORE.value);
}

let userListDOM=document.querySelector('#userList')

const addItem = (userName,score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML=`${userName} ${score}`;
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM);
}