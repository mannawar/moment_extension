//DOM Elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

//options
const showAmPm = true;

//Show Time
function showTime() {
    //let today = new Date(2020, 06, 26, 24, 00, 00);
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    //Set AM or PM
    const amPm = hour >= 12  ? 'PM' : 'AM';

    //12 hour format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm: ''}`;

    //set time out
    setTimeout(showTime, 1000);
}

//add zero infront of min and sec
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set Background
function setBgGreet() {
    //let today = new Date(2020, 06, 26, 24, 00, 00);
    let today = new Date(),
        hour = today.getHours();
    
    //Check if it is morning, afterNoon, or evening
    if(hour < 04) {
        //Night
        document.body.style.backgroundImage = "URL('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = "Time to sleep";
    }
    else if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "URL('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = "Good Morning";
    }
    else if(hour < 18) {
        //After Noon
        document.body.style.backgroundImage = "URL('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = "Good AfterNoon";
    }

    else{
        //Evening
        document.body.style.backgroundImage = "URL('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'white';
    }

}

//Get Name
function getName() {
    //check if there is any name stored in localstorage
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }
    else {
        name.textContent = localStorage.getItem('name');
    }
}

//setName
function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
        else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

//Get Focus
function getFocus() {
    //check if there is any name stored in localstorage
    //let today = new Date(2020, 06, 26, 24, 00, 00);
    let today = new Date(),
        hour = today.getHours();
    if(localStorage.getItem('focus') === null && hour > 4) {
        focus.textContent = '[Enter Focus]';
    }
    else if(hour < 4) {
        focus.innerHTML = 'sleep';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//setFocus
function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
        else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

//Event listener for saving in local storage
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//Run
showTime();
setBgGreet();
getName();
getFocus();
