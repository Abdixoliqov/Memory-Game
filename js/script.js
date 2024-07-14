const containerEl = document.getElementById('container');
const cards_length = 16;
const cards = [];

let previousShownCard = undefined;
console.log(!previousShownCard, 'prev');

const icons = [
    "bxl-flask",
    "bxl-java",
    "bxl-netlify",
    "bxl-tiktok",
    "bxl-docker",
    "bxl-upwork",
    "bxl-facebook",
    "bxl-instagram",
]

icons.push(...icons);

for(let i=0; i<100; i++) {
    const idx1 = Math.floor(Math.random()*icons.length);
    const idx2 = Math.floor(Math.random()*icons.length);

    const temp = icons[idx1];
    // console.log(temp, 'temp');
    icons[idx1] = icons[idx2];
    icons[idx2] = temp
}

for(let i=0; i<cards_length; i++){
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    cardEl.innerHTML=`
        <div class="front">
            <i class="bx ${icons[i]}"></i>
        </div>
        <div class="back">
            <small> Click me </small>
        </div>

    `
    cardEl.addEventListener('click', ()=>{
        if(!cardEl.classList.contains('show')){
            cardEl.classList.add('show')
        }

        if(!previousShownCard) {
            previousShownCard = cardEl;
            // console.log(previousShownCard, 'last prev');
        } else {
            const iconOne = previousShownCard.querySelector('i').classList[1];

            const iconTwo = cardEl.querySelector('i').classList[1];
            console.log(iconOne, iconTwo);

            if(iconOne !== iconTwo) {
                const temp = previousShownCard;
                setTimeout(() => {
                    temp.classList.remove('show');
                    cardEl.classList.remove('show');
                }, 1000);
            }
            previousShownCard=undefined;
        }
    })

    cards.push(cardEl);

    containerEl.appendChild(cardEl)
}