const start = document.querySelector('#Start');
const pause = document.querySelector('#Pause');
const restart = document.querySelector('#Restart');
const clock = document.querySelector('.clock');

let boolvalue = false;
let hrs = 0;
let min = 0;
let sec = 0;
let id;

function updateClockDisplay() {
    clock.textContent = `${String(hrs).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

const startwatch = () => {
    if (!boolvalue) {
        boolvalue = true;
        id = setInterval(() => {
            sec++;
            if (sec == 60) {
                sec = 0;
                min++;
            }
            if (min == 60) {
                min = 0;
                hrs++;
            }
            updateClockDisplay();
        }, 1000);
    }
}

start.addEventListener('click', startwatch);
pause.addEventListener('click', () => {
    clearInterval(id);
    boolvalue = false;
});
restart.addEventListener('click', () => {
    clearInterval(id);
    boolvalue = false;
    hrs = 0;
    min = 0;
    sec = 0;
    updateClockDisplay(); 
});


updateClockDisplay();
