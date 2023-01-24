(function($) {
	var $form = $('#ajax-search-form'),
		$input = $form.find(':text');
    var chunk = 10, // search result per page
        startIndex = 1; // cache the `start-index` value
	$form.append('<div id="search-result"></div>');
	var $result_container = $('#search-result');
	$form.on("submit", function() {
		var keyword = $input.val();
		$result_container.show().html('Loading...');
		$.ajax({
			url: '//www.almaftuch.in/feeds/posts/summary?alt=json-in-script&q=' + keyword + '&start-index=' + (startIndex === 1 ? startIndex : ((startIndex - 1) * chunk) + 1) + '&max-results=' + chunk,
			type: 'get',
			dataType: 'jsonp',
			success: function(json) {
var entry = json.feed.entry,
link, summary, thumbnail, skeleton = "";
if (entry !== undefined) {
skeleton = '<h4>Search results for keyword &#8220;' + keyword + '&#8221;</h4>';
skeleton += '<a class="close" href="#">X</a><ol>';
for (var i = 0; i < entry.length; i++) {
for (var j = 0; j < entry[i].link.length; j++) {
if (entry[i].link[j].rel == "alternate") {
link = entry[i].link[j].href;
}
}
thumbnail = ("media$thumbnail" in entry[i]) ? '<img alt="" src="' + entry[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s40-c") + '" width="40" height="40">' : "";
summary = ("summary" in entry[i]) ? entry[i].summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "";
summary = summary.length > 0 ? summary.substring(0, 0) + '&hellip;' : summary;
skeleton += '<li>' + thumbnail + '<a href="' + link + '">' + entry[i].title.$t + '</a><br>' + summary + '</li>';
}
skeleton += '</ol><div class="navigasi-result" align="center">' + (startIndex > 1 ? '<a class="prevresult" href="#prev">< Prev</a> ' : "") + '<a class="nextresult" href="#next">Next ></a></div>';
$result_container.html(skeleton);
} else {
// If the JSON is empty ... (entry === undefined)
	
// Show the `not found` or `no result` message
$result_container.html('<a class="close" href="/">&times;</a><strong>No result!</strong>');
}
},
error: function() {
				$result_container.html('<a class="close" href="#">X</a><strong>Error loading feed.</strong>');
                startIndex = 1; // reset `start-index` value
			}
		});
		return false;
	});
	$form.on("click", ".close", function() {
		$result_container.fadeOut();
		return false;
	});
    $form.on("click", ".nextresult", function() {
        startIndex++;
        $form.trigger("submit");
        return false;
    });
    $form.on("click", ".prevresult", function() {
        startIndex--;
        $form.trigger("submit");
        return false;
    });
})(jQuery);
