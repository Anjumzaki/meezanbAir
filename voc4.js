function incrementValue(val)
{
    var value = parseInt(document.getElementById(val).innerHTML);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(val).innerHTML = value;
}
function decrementValue()
{
    var value = parseInt(document.getElementById(val).innerHTML);
    if(value<=0){
        return
    }else{
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById(val).innerHTML = value;
}}

$(".js-range-slider").ionRangeSlider({
    skin: "round"
});

$(".js-range-slider").on("change", function () {
    var $inp = $(this);
    var from = $inp.prop("value"); // reading input value
    var from2 = $inp.data("from"); // reading input data-from attribute
    var new_from = from.replace(";", " to ");
   document.getElementById('fromofdays').innerHTML= new_from
   
});
$(".js-range-slider1").ionRangeSlider({
    skin: "round"
});

$(".js-range-slider1").on("change", function () {
    var $inp = $(this);
    var from = $inp.prop("value"); // reading input value
    var from2 = $inp.data("from"); // reading input data-from attribute
    var new_from = from.replace(";", " to ");
   document.getElementById('fromofdollars').innerHTML= new_from
   
});

