var originalText = "Republican leaders began to abandon Donald J. Trump by the dozens on Saturday.";
var thetext;
var ritatestPOS;
var words = [];
var theRitaTextArray = [];
var text = [];

function saveData(obj){
	$.ajax({
		url: '/save',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(obj),
		error: function(resp){
			console.log("Oh no...");
			console.log(resp);
		},
		success: function(resp){
			console.log(obj);
			console.log(resp);
			//var htmlString = '<li>' + obj.user + ' : ' + obj.word + '</li>';
			//$('ol').append(htmlString);
		}
	});

	setTimeout(function () {
		window.location.reload();
	}, 300000);
	
}

function nlp(){
	ritatestPOS = RiTa.getPosTags(originalText); //analize each sentence and indicate the part of speech of each word
	words = RiTa.tokenize(originalText); //separate the sentence into words
	for (var y = 0; y < words.length; y++){
		theRitaTextArray.push([words[y], ritatestPOS[y]]); //populate the array with arrays made of each word and its part of speech
		}
	//console.log(theRitaTextArray);
	for (var x = 0; x < theRitaTextArray.length; x++){
		if (theRitaTextArray[x][1] == "nn" || theRitaTextArray[x][1] == "nns" || theRitaTextArray[x][1] == "nnp" || theRitaTextArray[x][1] == "nnps" || theRitaTextArray[x][1] == "prp" || theRitaTextArray[x][1] == "prp$") {
			theRitaTextArray [x][0] = 'cat';
		}
		text.push(theRitaTextArray[x][0]);
	}

	thetext = RiTa.untokenize(text); 

	console.log(thetext);
	var data = {
		body: thetext
	};
	saveData(data);
	console.log(data);
}



$('document').ready(function(){
	nlp();
});