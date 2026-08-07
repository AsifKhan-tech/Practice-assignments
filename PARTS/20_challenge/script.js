let count = 0;

function cardCounter(card) {
  if (typeof card === "number" || typeof card === "string") {
    if (card >= 2 && card <= 6) {
      count++;
    } else if (
      card === 10 ||
      card === "J" ||
      card === "Q" ||
      card === "K" ||
      card === "A"
    ) {
      count--;
    }
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cardCounter("J"));
