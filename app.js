function sum (a, b) {
	return a + b;
}

function delta (a, b) {
	return a - b;
}

function product (a, b) {
	return a * b;
}

function portion (a, b) {
	return a / b;
}

const remainValue = (a, b) => {
	return a % b;
}

console.log("Sum: ", sum(10, 20));

console.log("Difference: ", delta(20,30));

console.log("Product: ", product(13, 3));

console.log("Division: ", portion(12, 3));

console.log("Remainder: ", remainValue(45, 9));

/*
 * i :- puts you in edit mode so you can edit/type the file
 * esc :- take you out of the edit mode
 * :w :- save the file
 * :q :- quit the editor
 * :q! :- quit the ediotr without saving the file
 * */
