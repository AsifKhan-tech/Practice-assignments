function confirmEnding(str, target) {
  const targetLength = target.length;
  const targetPortion = str.slice(-targetLength);
  if (targetPortion === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("I am string", "string"));
