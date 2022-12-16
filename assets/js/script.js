$('form').on('submit', function (event) {
	event.preventDefault();

	// Array containing the set of elements from the form
	let serializeArr = $('form').serializeArray();

	let searchParameter = serializeArr[0].value;
	let numberOfRecords = serializeArr[1].value;
	let startYear = serializeArr[2].value;
	let endYear = serializeArr[3].value;
});
