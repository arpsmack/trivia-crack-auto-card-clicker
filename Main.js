// Scheduled to run every second
function runLoop() {
    closeTopAd();
    checkAndActivateCards();
}

function closeTopAd() {
    $(".close").trigger("click");
}

function checkAndActivateCards() {
    $(".gacha-container").find(".gacha-card").each((index, element) => {
        let timerText = $(element).find(".timer").text();
        if (!/\d\d:\d\d:\d\d/.test(timerText)) {
            $(element).find("img.svg").trigger("click");
        }
    });
}

function displayActivationMessage() {
    let cardsGroup = $(".cards-group");
    if (cardsGroup.length == 0) {
        setTimeout(displayActivationMessage, 1000);
        return;
    }
    let msgP = $("<p>Auto Clicker Activated</p>");
    msgP.css("color", "#33c1ae");
    msgP.css("text-align", "center");
    cardsGroup.after(msgP);
}

setInterval(runLoop, 1000);
setTimeout(displayActivationMessage, 1000);

// Reload the page in 30 minutes
// Trivia Crack tries to load so much crap in the background the browser tab runs out of memory and locks up
// This helps to keep the clicker running reliably
setTimeout(() => location.reload(), 30 * 60 * 1000);