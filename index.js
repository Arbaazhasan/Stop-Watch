const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");


//converting seconds, minutes , hours, days in milisecons

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const timerFunction = () => {

    // Generatiing Current Date In mm/dd/yyy

    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth()).padStart(2, "0");
    let yyyy = now.getFullYear();



    //Taking Target Date from User 

    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");

    now = `${mm}/${dd}/${yyyy}`;

    console.log(`${enteredMonth}/${enteredDay}/${yyyy}`)

    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;


    // Cheacking if target date is for next year 

    if (now > targetDate) {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`
    }




    const intervalID = setInterval(() => {

        // converting target date in miliseconds
        const timer = new Date(targetDate).getTime();

        const today = new Date().getTime();

        const difference = timer - today;

        // finding left days days , hours, minutes, year

        const leftDay = Math.floor(difference / day);
        const leftHours = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);


        // showig timer in DOM

        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHours;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;

        console.log(`${leftDay}:${leftHours}:${leftMinute}:${leftSecond}`);


        // stop set interval after reaching the target time 

        if (difference < 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Time's Up";
            clearInterval(intervalID);

        }

    }, 0);

};


timerFunction();