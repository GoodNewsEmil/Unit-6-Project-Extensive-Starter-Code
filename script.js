$(".Part-Two-Yes").hide();
$(".Part-Two-No").hide();
$(".Story-Ending-Yes").hide();
$(".Story-Ending-No").hide();


$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".Part-Two-No").hide();
    $(".Story-Ending-Yes").hide();
    $(".Story-Ending-No").hide();
});

$(".no-button").click(function() {
    $(".Part-Two-Yes").hide();
    $(".Part-Two-No").show();
    $(".Story-Ending-Yes").hide();
    $(".Story-Ending-No").hide();

});