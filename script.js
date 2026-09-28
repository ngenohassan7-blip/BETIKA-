let userBalance = 10000;

function updateBalanceDisplay() {
    document.getElementById("user-balance").innerText = userBalance.toLocaleString();
}

function placeBet(matchSelection, odds) {
    let stake = 500; 

    if (userBalance < stake) {
        alert("Not enough V-Cash left in your virtual wallet!");
        return;
    }

    userBalance -= stake;
    updateBalanceDisplay();

    let potentialWin = (stake * odds).toFixed(2);
    let historyContainer = document.getElementById("bet-history");
    
    if (historyContainer.querySelector(".no-bets")) {
        historyContainer.innerHTML = "";
    }

    let betCard = document.createElement("div");
    betCard.className = "bet-item";
    betCard.innerHTML = `
        <strong>Selection:</strong> ${matchSelection} <br>
        <strong>Odds:</strong> ${odds} | <strong>Stake:</strong> ${stake} V-Cash <br>
        <strong>Potential Payout:</strong> <span style="color: #2ecc71;">${potentialWin} V-Cash</span>
    `;

    historyContainer.prepend(betCard);
}
  
