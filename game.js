const moleElements = document.querySelectorAll('.mole');
const MAX_SCORE = 10;
let score = 0;

class Mole {
    constructor(imgElement) {
        this.imgElement = imgElement;
        this.isHungry = false;
        this.occupied = false;
    }
    cycle() {
        console.log('Hi');
    }
};

const moles = new Array(10);

for (let i = 0; i < 10; i++) {
    moles[i] = new Mole(moleElements[i]);
}

moles.forEach((mole) => {
    setTimeout(() => {mole.imgElement.src = 'images/mole-leaving.png';}, 300);
    setTimeout(() => {mole.imgElement.classList.add('hidden');}, 600);
    
});

// let nextCall = Date.now();
// function update(aMole) {
//     if (Date.now() > nextCall) {
//         // if (Math.random > 0.7 && !aMole.occupied) {
            
//         // }
//         aMole.cycle();
//         nextCall = Date.now() + 1000;
//     }
//     requestAnimationFrame(update(aMole));
// }

// requestAnimationFrame(update(moles[0]));

function click() {
    
}