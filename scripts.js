for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	
	var $template = $('<div class="quoteContainer">' +
				'<div class="mainQuote">'+rowData.mainQuote+'</div>' +
				'<div class="readMore">Read More</div>'+
				
				'<div class="moreInfo">'+
					'<div class="wholeQuote">'+rowData.wholeQuote+'</div>' +
				'</div>'+
			'</div>');
			
			$template.find(".readMore").on("click", toggleContent); 
			
			
			
			function toggleContent(e) {
				$quoteContainer = $(this).parent();
				
				if ($quoteContainer.hasClass("expanded")) { //quoteContainer has class .expanded (you can see content), so remove content
					$quoteContainer.removeClass("expanded");
					
				} else { //quoteContainer does not have class expanded (you can't see content), so show content!
					$quoteContainer.addClass("expanded");
				}
			}
			
			$('#dataContainer').append($template); 
}