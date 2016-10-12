var originalText = "Republican leaders began to abandon Donald J. Trump by the dozens on Saturday after the release of a video showing him speaking of women in vulgar sexual terms, delivering a punishing blow to his campaign and plunging the party into crisis a month before the election.Fearing that his candidacy was on the verge of undermining the entire Republican ticket next month, a group of senators and House members withdrew support for him, with some demanding that he step aside. Mr. Trump, however, vowed to stay in the race.";
var thetext;
var ritatestPOS;
var words = [];
var theRitaTextArray = [];

var text = [];

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
	//replaceterms();
}



$('document').ready(function(){
	nlp();
});