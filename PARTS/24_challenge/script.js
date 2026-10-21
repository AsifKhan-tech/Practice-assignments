const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);

  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);

  return arr;
}

function removeLastLunch(arr) {
  const removedEle = arr.pop();

  if (removedEle) {
    console.log(`${removedEle} removed from the end of the lunch menu.`);
  }

  if (arr.length === 0) {
    console.log(`No lunches to remove.`);
  }

  return arr;
}

function removeFirstLunch(arr) {
  const removedEle = arr.shift();

  if (removedEle) {
    console.log(`${removedEle} removed from the start of the lunch menu.`);
  }

  if (arr.length === 0) {
    console.log(`No lunches to remove.`);
  }

  return arr;
}

function getRandomLunch(arr) {
  const selectRandomEle = arr[Math.floor(Math.random() * arr.length)];

  if (selectRandomEle) {
    console.log(`Randomly selected lunch: ${selectRandomEle}`);
  }

  if (arr.length === 0) {
    console.log(`No lunches available.`);
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
  if (arr.length === 0) {
    console.log(`The menu is empty.`);
  }
}
