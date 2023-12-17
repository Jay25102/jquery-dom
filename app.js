$("body").on("submit", function(e) {
    e.preventDefault();
    // console.log($("#movie-rating").val());
    $("#movies-list").append($("<li>").text("name: " + $("#movie-name").val() + " rating: " + $("#movie-rating").val()).append($("<input type='button' value='remove' class='remove-button'/>"))); 
});

$("ul").on("click", ".remove-button", function(e) {
    e.target.parentElement.remove();
});