const change1 = document.querySelector('.one');
function buttonClick() {
    if(change1.classList.contains('change')) {
        change1.classList.remove('change');
    } else {
        change1.classList.add('change');
    }
}
change1.addEventListener('click', buttonClick);


const change2 = document.querySelector('.two');
function buttonClick2() {
    if(change2.classList.contains('change')) {
        change2.classList.remove('change');
    } else {
        change2.classList.add('change');
    }
}
change2.addEventListener('click', buttonClick2);


const change3 = document.querySelector('.three');
function buttonClick3() {
    if(change3.classList.contains('change')) {
        change3.classList.remove('change');
    } else {
        change3.classList.add('change');
    }
}
change3.addEventListener('click', buttonClick3);


const change4 = document.querySelector('.four');
function buttonClick4() {
    if(change4.classList.contains('change')) {
        change4.classList.remove('change');
    } else {
        change4.classList.add('change');
    }
}
change4.addEventListener('click', buttonClick4);


const change5 = document.querySelector('.five');
function buttonClick5() {
    if(change5.classList.contains('change')) {
        change5.classList.remove('change');
    } else {
        change5.classList.add('change');
    }
}
change5.addEventListener('click', buttonClick5);