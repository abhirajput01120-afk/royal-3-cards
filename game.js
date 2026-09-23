let coins = Number(localStorage.getItem("royalCoins")) || 1000;

const coinsText = document.getElementById("coins");
const result = document.getElementById("result");

function updateCoins() {
  coinsText.textContent = coins;
  localStorage.setItem("royalCoins", coins);
}

function randomCard() {
  const cards = ["A", "K", "Q", "J", "10", "9", "8", "7"];
  return cards[Math.floor(Math.random() * cards.length)];
}

function playGame() {
  if (coins < 10) {
    result.textContent = "😔 Coins खत्म हो गए!";
    return;
  }

  coins -= 10;

  const c1 = randomCard();
  const c2 = randomCard();
  const c3 = randomCard();

  document.getElementById("card1").textContent = c1;
  document.getElementById("card2").textContent = c2;
  document.getElementById("card3").textContent = c3;

  if (c1 === c2 && c2 === c3) {
    coins += 100;
    result.textContent = "🎉 तीनों Cards Same! +100 Coins";
  } else if (c1 === c2 || c2 === c3 || c1 === c3) {
    coins += 30;
    result.textContent = "🔥 Pair मिला! +30 Coins";
  } else {
    result.textContent = "😅 इस बार नहीं जीते!";
  }

  updateCoins();
}

updateCoins();
