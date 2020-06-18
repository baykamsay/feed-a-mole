const moleElements = document.querySelectorAll('.mole');
const MAX_SCORE = 10;
let score = 0;

class Mole {
    constructor(imgElement) {
        this.imgElement = imgElement;
        this.isHungry = false;
    }
};

const moles = new Array(10);

for (let i = 0; i < 10; i++) {
    moles[i] = new Mole(moleElements[i]);
}

moles.forEach((e) => {
    console.log(e.isHungry);
})

function update() {

}

function click() {
    
}

moles.forEach((mole) => {
    setTimeout(() => {mole.imgElement.src = 'images/mole-leaving.png';}, 300);
    setTimeout(() => {mole.imgElement.classList.add('hidden');}, 600);
});