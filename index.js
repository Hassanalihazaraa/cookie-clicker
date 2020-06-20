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
let bonusTime = parseInt(document.querySelector("#bonus-time").innerHTML);

let counter = 1;
cookie.addEventListener("click", () => {
    score += counter;
    cookieScore.innerHTML = score;
    console.log(score);
})

multiplierButton.addEventListener("click", () => {
    if (score >= multiplierPrice) {
        score -= multiplierPrice;
        cookieScore.innerHTML = score;
        counter *= 5;
        multiplierPrice += 100;
        multiplierPoints.innerHTML = multiplierPrice + " Points";
        console.log(multiplierPrice);
    } else {
        alert("You don't have enough points to buy this item");
    }
})

autoClickButton.addEventListener("click", () => {
    if (score >= autoClickPrice) {
        score -= autoClickPrice;
        autoClickPrice *= 2;
        autoClickPoints.innerHTML = autoClickPrice + " Points";
        cookieScore.innerHTML = score;
        setInterval(() => {
            score += counter;
            cookieScore.innerHTML = score;

        }, 5000)
    } else {
        alert("You don't have enough points to buy this item");
    }
})


bonusButton.addEventListener("click", () => {
    if (score >= bonusPrice) {
        score -= bonusPrice;
        cookieScore.innerHTML = score;
        bonusPrice *= 2;
        bonusPoints.innerHTML = bonusPrice + " Points";
        counter += 200;
        counter = score;
        let bonusCounter = setInterval(timer, 1000);

        function timer() {
            if (bonusTime <= bonusTime) {
                bonusTime -= 1;
                document.querySelector("#bonus-time").innerHTML = bonusTime;
                counter += 200;
                cookieScore.innerHTML = counter;
                if (bonusTime === 0) {
                    clearInterval(bonusCounter);
                    document.querySelector("#bonus-time").innerHTML = "30";
                }
            }
        }
    } else {
        alert("You don't have enough points to buy this item");
    }
})
