const prompt = require('prompt-sync')();

console.log(`Exercise 1: Remove all even numbers from array`);
const getRandom = (max = 10, min = 1) => {
	return Math.floor(Math.random() * max) + min;
}, populate = (arr, max = 10, min = 1) => {
	for (let i = 0; i < arr.length; i++) arr[i] = getRandom(max, min);
	return arr;
}, removeEven = (arr) => {
	return arr.filter(element => element % 2 === 1);
}, arr1 = populate(new Array(getRandom()));
console.log(`Input:`, arr1);
console.log(`Output:`, removeEven(arr1));

console.log(`\nExercise 2: Remove duplicate values from array`);
const removeDupes = (arr) => {
	return Array.from(new Set(arr));
}, arr2 = populate(new Array(getRandom()));
console.log(`Input:`, arr2);
console.log(`Output:`, removeDupes(arr2));

console.log(`\nExercise 3: Check for specific number in array`);
const check = (arr, max = 10, min = 1) => {
	do var input = Math.floor(Number(prompt(`Enter number to check (` + min + `-` + max + `): `)));
	while (isNaN(input) || input < min || input > max);
	if (arr.indexOf(input) === -1) return false;
	return true;
}, arr3 = populate(new Array(getRandom()));
console.log(`Input:`, arr3);
console.log(`Output:`, check(arr3));

// Exercise says to create objects, but we're out of order, so we haven't learned those yet
console.log(`\nExercise 4: Find ASCII values of array numbers`);
const getAscii = (arr) => {
	const map = new Map();
	arr.forEach(element => { map.set(element, String.fromCharCode(element)); });
	return Array.from(map);
}, arr4 = populate(new Array(getRandom()));
console.log(`Input:`, arr4);
console.log(`Output:`, getAscii(arr4));