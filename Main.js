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
setTimeout(location.reload, 60 * 60 * 1000);