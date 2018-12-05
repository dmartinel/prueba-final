$(document).ready(function)() {
$('#select').on('change', function() {

$.ajax({
		url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/535de0714be39fe3242f509910e3daac/31.9685988,-99.90181310000003',
		type: 'GET',
		data: {},
		success: function (data) {
			data
			console.log(data);
		}
	});



});
}











// $.ajax({
// 	url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/535de0714be39fe3242f509910e3daac/31.9685988,-99.90181310000003',
// 	type: 'GET',
// }),then(function(data) {
// 	console.log(data);
// });