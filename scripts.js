for (var i=0; i<guardianHeroinData.length; i++) { 
	/*
	 * Start at object 0 and for every object in the data, pull out the mainQuote and wholeQuote 
	 */
	var rowData = guardianHeroinData[i];
	
	var $template = $('<div class="quoteContainer">' +
				'<div class="mainQuote">'+rowData.mainQuote+'</div>' + //mainQuote and readMore are in siblings in a parent div
				'<div class="readMore">Read More</div>'+
				
				'<div class="moreInfo">'+
					'<div class="wholeQuote">'+rowData.wholeQuote+'</div>' + //wholeQuote is separate but still in the same parent div as mainQuote and readMore
				'</div>'+
			'</div>');
			
			$template.find(".readMore").on("click", toggleContent); //When you click the readMore button, display the content
			
			
			
			function toggleContent(e) {
				$quoteContainer = $(this).parent();
				
				if ($quoteContainer.hasClass("expanded")) { //if you can see the content in the quoteContainer (i.e. the mainQuote, readMore, and wholeQuote), then remove content
					$quoteContainer.removeClass("expanded");
					
				} else { //otherwise show content the content 
					$quoteContainer.addClass("expanded");
				}
			}
			
			$('#dataContainer').append($template); 
}