let userID = null;
let nextActivationDate = null;
let nextPageReloadDate = null;
let activationIntervalId = null;

function reloadPage() {
    // If the next card activation is going to happen in the next 30 seconds
    // hold off on reloading the page for another minute, otherwise do it now
    if (nextActivationDate.getTime() > Date.now() - 30 * 1000) {
        location.reload();
    } else {
        setTimeout(reloadPage, 60 * 1000);
        nextPageReloadDate = new Date(Date.now() + 60 * 1000);
    }
}

function setup() {
    updateTriviaCrackUserId(() => {
        if (userID == null) {
            setTimeout(setup, 5000);
        } else {
            activationIntervalId = setInterval(checkAndActivateCards, 1000);

            // Reload the page in an hour.
            // This is an attempt to fight the out of memory errors we get when we leave the tab
            // open for a really long time.
            setTimeout(reloadPage, 60 * 60 * 1000);
            nextPageReloadDate = new Date(Date.now() + 60 * 60 * 1000);
        }
    });
}

function reSetup() {
    clearInterval(activationIntervalId);
    activationIntervalId = null;
    setup();
}

function checkAndActivateCards() {
    if (userID == null) {
        reSetup();
        return;
    }
    if (nextActivationDate != null && nextActivationDate.getTime() > Date.now()) {
        tryDisplayNextActivationDate();
        return;
    }
    console.log("Starting card activation check...");
    TriviaCrackApi.getDashboard(userID, Date.now(), (err, response) => {
        const dash = response.response;
        let anySlotsActivated = false;
        let nextCardIsReadyMs = Number.MAX_SAFE_INTEGER;

        for (let slot of dash.gacha_display_panel.slots) {
            if (slot.status != "EQUIPPED") {
                continue;
            }
            if (slot.time_remaining > 0) {
                nextCardIsReadyMs = Math.min(nextCardIsReadyMs, slot.time_remaining * 1000);
            } else {
                anySlotsActivated = true;
                setTimeout(() => {
                    console.log("Activating card in slot " + slot.id);
                    TriviaCrackApi.activateCardInSlot(slot.id, userID, () => {});
                }, 50);
            }
        }

        // Add a second of buffer to next card-is-ready time just to make sure our next
        // check happens after the card is actually ready to activate.
        let nextCheckMs = nextCardIsReadyMs + 1000;

        if (anySlotsActivated) {
            // If we activated a card, check back in a minute to make sure it worked
            // unless the next card will be ready in less than a minute.
            const oneMinuteMs = 1 * 1000 * 60;
            nextCheckMs = Math.min(nextCheckMs, oneMinuteMs);
        }

        nextActivationDate = new Date(Date.now() + nextCheckMs);
        tryDisplayNextActivationDate();
    });
}

function tryDisplayNextActivationDate() {
    if (nextActivationDate == null) {
        return;
    }
    let cardsGroup = $(".cards-group");
    if (cardsGroup.length == 0) {
        return;
    }
    let nextActivationDateStr = formatDate(nextActivationDate);
    let nextPageReloadDateStr = formatDate(nextPageReloadDate);
    let dateSpan = $("#next-activate-date");
    let reloadSpan = $("#next-reload-date");
    if (dateSpan.length == 0) {
        let div = $("<div></div>");

        let activationDateElement = $(`<p>Next card activation: <span id="next-activate-date">${nextActivationDateStr}</span></p>`);
        activationDateElement.css("color", "#33c1ae");
        activationDateElement.css("text-align", "center");
        div.append(activationDateElement);

        let pageReloadElement = $(`<p>Next page reload: <span id="next-page-reload">${nextPageReloadDateStr}</span></p>`);
        pageReloadElement.css("color", "#33c1ae");
        pageReloadElement.css("text-align", "center");
        div.append(pageReloadElement);

        cardsGroup.after(div);
    } else {
        dateSpan.html(nextActivationDateStr);
        reloadSpan.html(nextPageReloadDateStr);
    }
}

function formatDate(d) {
    const MONTHS = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const mm = MONTHS[d.getMonth()];
    const dd = d.getDate();
    let h = d.getHours() % 12;
    if (h == 0) {
        h = 12;
    }
    const zpad = n => n > 9 ? "" + n : "0" + n;
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ampm = d.getHours() < 12 ? "AM" : "PM";
    return `${mm} ${dd} ${zpad(h)}:${zpad(m)}:${zpad(s)} ${ampm}`
}

function updateTriviaCrackUserId(callback) {
    let dbOpenRequest = window.indexedDB.open("localforage", 2);

    dbOpenRequest.onerror = console.log;

    dbOpenRequest.onsuccess = e => {
        let db = e.target.result;
        let transaction = db.transaction(["keyvaluepairs"]);
        let objectStore = transaction.objectStore("keyvaluepairs");
        let sessionDataRequest = objectStore.get("session_data");
        
        sessionDataRequest.onerror = console.log;
        
        sessionDataRequest.onsuccess = e => {
            userID = sessionDataRequest.result.id;
            callback();
        };
    };
}

function round(n, r) {
    let factor = Math.pow(10, r);
    return Math.round(n * factor) / factor;
}

function millisToString(ms) {
    let pluralize = n => n != 1 ? "s" : "";
    const units = [
        { ms: 31536000000, name: "year" },
        { ms: 86400000, name: "day" },
        { ms: 3600000, name: "hour" },
        { ms: 60000, name: "minute" },
        { ms: 1000, name: "second" }
    ];
    for (let unit of units) {
        if (ms >= unit.ms) {
            let amount = round(ms / unit.ms, 1);
            return amount + ' ' + unit.name + pluralize(amount);
        }
    }
    return ms + ' millisecond' + pluralize(ms);
}

setup();