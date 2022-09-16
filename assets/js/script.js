//add current day and time to scheduler
var rightNow = moment().format("MMMM Do YYYY");
$("#currentDay").text(rightNow);

var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

// highlight time based on past, present, future
$.each(timeBlock, function () {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});

$(".saveBtn").on("click", function (event) {
  var eventItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, eventItem);
});

function getInfo() {
  return localStorage.getItem(event.target.attributes[0].value, eventItem);
};
 



