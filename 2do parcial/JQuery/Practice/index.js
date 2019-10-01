let cont = 1;

$("#clickBtn").on('click', function(e) {
	e.preventDefault();
	console.log(cont);
	$("list").append(`<li class="new">
						click # ${cont}
					  </li>`);
	cont++;
});

$(".list").on("click", function(e) {
	e.preventDefault();
	console.log("Clicked on new li");
});