$(function () {

	$(".img-thumbnail").click(function(){

		//$(".item").removeClass("active");
		//$("[data-slide-to]").removeClass("active");

		var objetivo = $(this).attr("objetivo");
		$(objetivo).addClass("active");

	});
	// body...
});