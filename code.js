let toolBtn = document.querySelector('.tool-btn');
let insertPoint = document.querySelector('.first-background')

toolBtn.addEventListener('click', function () {
    let divOne = document.createElement('div');
    let textOne = document.createTextNode('Notes')
    divOne.appendChild(textOne);
    divOne.classList.add('divOne');
    document.body.appendChild(divOne);

    let divTwo = document.createElement('div');
    let textTwo = document.createTextNode('Cool')
    divTwo.appendChild(textTwo);
    divTwo.classList.add('divTwo');
    document.body.appendChild(divTwo);

    let divThree = document.createElement('div');
    let textThree = document.createTextNode('Cool')
    divThree.appendChild(textThree);
    divThree.classList.add('divThree');
    document.body.appendChild(divThree);
});