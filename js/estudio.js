(function() {
	$(function() {
		$("select").on("change", function() {
			var song = $(this).val();
			$(".cifra").load(song + ".html");
		});
	});
}());