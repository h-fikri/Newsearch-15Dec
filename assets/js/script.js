$('form').on('submit', function (event) {
	event.preventDefault();

	let searchParameter = $('#search-term').val();
	let NumberOfRecords = $('#number-of-records').val();
	let startYear = $('#start').val();
	let endYear = $('#end').val();

	let searchButton = $('#search');
});
