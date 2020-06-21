const cookie = document.querySelector("#cookie-button");
const cookieScore = document.querySelector("#display-counter");
let score = parseInt(cookieScore.innerHTML);
const multiplierButton = document.querySelector("#btn-multiplier");
const multiplierPoints = document.querySelector("#multiplier-points");
let multiplierPrice = parseInt(multiplierPoints.innerHTML);
const autoClickButton = document.querySelector("#btn-autoclick");
const autoClickPoints = document.querySelector("#autoclick-points");
let autoClickPrice = parseInt(autoClickPoints.innerHTML);
const bonusButton = document.querySelector("#btn-bonus");
const bonusPoints = document.querySelector("#bonus-points");
let bonusPrice = parseInt(bonusPoints.innerHTML);
let bonusTime = document.querySelector("#bonus-time");
let bonusTimer = parseInt(bonusTime.innerHTML);

let counter = 1;
cookie.addEventListener("click", () => {
    score += counter;
    cookieScore.innerHTML = score;
    console.log(score);
})


//multiplier button
if (score < multiplierPrice) {
    multiplierButton.disabled = true;
} else if (score >= multiplierPrice) {
    multiplierButton.disabled = false;
    multiplierButton.addEventListener("click", () => {
        if (score >= multiplierPrice) {
            score -= multiplierPrice;
            cookieScore.innerHTML = score;
            counter *= 2;
            multiplierPrice *= 5;
            multiplierPoints.innerHTML = multiplierPrice + " Points";
        }
    })
}


//autoclick after 1 second
if (score < autoClickPrice) {
    autoClickButton.disabled = true;
} else {
    autoClickButton.disabled = false;
    autoClickButton.addEventListener("click", () => {
        if (score >= autoClickPrice) {
            score -= autoClickPrice;
            autoClickPrice *= 2;
            autoClickPoints.innerHTML = autoClickPrice + " Points";
            cookieScore.innerHTML = score;
            setInterval(() => {
                score += 1;
                cookieScore.innerHTML = score;
                console.log(score);
            }, 1000)

        }
    })
}


//200% bonus button
if (score < bonusPrice) {
    bonusButton.disabled = true;
} else {
    bonusButton.disabled = false;
    bonusButton.addEventListener("click", () => {
        if (score >= bonusPrice) {
            score -= bonusPrice;
            cookieScore.innerHTML = score;
            bonusPrice *= 2;
            bonusPoints.innerHTML = bonusPrice + " Points";
            counter *= 2;
            console.log(counter)
            let bonusCounter = setInterval(timer, 1000);
            console.log(bonusCounter);

            function timer() {
                if (bonusTimer > 0) {
                    bonusTimer -= 1;
                    bonusTime.innerHTML = bonusTimer;
                } else {
                    clearInterval(bonusCounter);
                    bonusTimer = "30";
                    bonusTime.innerHTML = bonusTimer;
                    counter /= 2;
                }
            }
        }
    })
}