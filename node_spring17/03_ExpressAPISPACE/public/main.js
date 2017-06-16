
//Function to get data via the server's JSON route
function getAPIData(term){
	$.ajax({
		url: '/api/',
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log(data);
			alert("Oh No! Try a refresh?");
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data['number']);
			$('#number').append(data['number']);
		}
	});
}

$(document).ready(function(){
	getAPIData();
});