
function validateNumber(number: number): void {
	if (number > 2) {
		throw new Error('ERROR')
	}
}

validateNumber(0);