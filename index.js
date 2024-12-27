let show = document.querySelector(".show");
let message = document.querySelector(" .message");
// console.log(message);
let errMessage = document.querySelector('.errorMessage');
let userChoice = document.querySelector('.user-choice');
let computerChoice = document.querySelector('.computer-choice');
let userPrevChoice;
let rndNumber;
let tries = 0;

show.addEventListener('click', () => {
    let userNumber = Math.floor(document.querySelector("input").value);

    if (userNumber === 0) {
        errMessage.classList.remove("d-none");
    } else {
        // calling randomNummber function 
        if (tries === 0) {
            rndNumber = randomNummber(1, 100);

        } else if (userNumber > rndNumber) {
            rndNumber = randomNummber(rndNumber, userPrevChoice);

        } else if (userNumber < rndNumber) {
            rndNumber = randomNummber(userPrevChoice, rndNumber);

        }

        if (userNumber === rndNumber) {
            message.classList.remove("d-none");
            // message.classList.add('bg-danger');

        }

        // colsoling numbers 
        console.log('User Choice : ', userNumber, typeof (userNumber));
        console.log('computer choice : ', rndNumber, typeof (rndNumber));

        // displaying both user and computer choices on screen 
        errMessage.classList.add("d-none");
        document.querySelector(".result").classList.remove("d-none");
        userChoice.innerHTML = 'You Choose : ' + userNumber;
        computerChoice.innerHTML = 'Computer Choose : ' + rndNumber;


        // increating Node. of tries 
        tries = tries + 1;
        document.querySelector('.tries').innerHTML = 'Total no. of tries : ' + tries;

        // setting userPrevChoice 
        userPrevChoice = userNumber;

        // seting input to null again 
        document.querySelector("input").value = '';

    }
})

function randomNummber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}