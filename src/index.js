module.exports = function check(str, bracketsConfig) {
	let stack = [], currOpen, result;
	let arr = str.split('');
	if (arr.length % 2 !== 0) return false;

	result = arr.every((item) => {
		if (findOpening(item, bracketsConfig)) {
			stack.push(item);
		} else {
			currOpen = findClosing(item, bracketsConfig);
			if (stack.pop() !== currOpen) {
				return false;
			} 
		}
		return true;

	})

	return !checkEqual(stack) || result === false ? false : true;
	
}

function findClosing(bracket, config) {
	let result;
	config.forEach((item) => {
		if (item[1] === bracket) result = item[0];
	})

	return result;
}

function findOpening(bracket, config) {
	return config.some((item) => {
		if (item[0] === bracket) return true;
	});
}

function checkEqual(arr) {
	return arr.length % 2 === 0 ? true : false;
}
