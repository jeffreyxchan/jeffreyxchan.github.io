const ReadMoreText = "Read more..."
const ReadLessText = "Read less..."

$(() => {
	// Attach click event onto "show more" button that toggles the
	// display of certain elements
	$("p#show-more-button").click(function() {
		let dots = $(this)
			.parent()
			.find("span#dots")

		let moreText = $(this)
			.parent()
			.find("div.text")

		if (dots.css("display") === "none") {
			$(this).text(ReadMoreText)
		} else {
			$(this).text(ReadLessText)
		}

		moreText.toggle(300)
		dots.toggle()
	})
})
