var originalText = "Republican leaders began to abandon Donald J. Trump by the dozens on Saturday after the release of a video showing him speaking of women in vulgar sexual terms, delivering a punishing blow to his campaign and plunging the party into crisis a month before the election.Fearing that his candidacy was on the verge of undermining the entire Republican ticket next month, a group of senators and House members withdrew support for him, with some demanding that he step aside. Mr. Trump, however, vowed to stay in the race.";
var thetext;
function replaceterms(){
	console.log(originalText);

	var thetext = originalText;
	for (var i = 0; i < terms.length; i++){
		var LookFor = terms[i][0];
		var Replacement = terms[i][1];
		thetext = thetext.replace(LookFor, Replacement);
	}

	console.log(thetext);
}


$('document').ready(function(){
	replaceterms();
});