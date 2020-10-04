// $(document).ready(function () { all script between here});
console.log("Script linked");
$(document).ready(function () {
  function updateTime() {
    var realTime = moment().format("MMMM Do YYYY, h:mm:ss a");

    $("#currentDay").text("Today is: " + realTime);
  }
  setInterval(updateTime, 1000);
});

$(".saveBtn").on("click", function () {
  event.preventDefault();
  console.log("test of save button");

  var dayPlan = $(this).siblings(".description").val();
  console.log("test: ", dayPlan);
  var currentHour = $(this).siblings(".hour").text();
  console.log("current hour: ", currentHour);
  localStorage.setItem(currentHour, dayPlan);
});

var t8 = localStorage.getItem("8AM");
$("#eight-am").text(t8);

var t9 = localStorage.getItem("9AM");
$("#nine-am").text(t9);

var t10 = localStorage.getItem("10AM");
$("#ten-am").text(t10);

var t11 = localStorage.getItem("11AM");
$("#eleven-am").text(t11);

var t12 = localStorage.getItem("12PM");
$("#tweleve-pm").text(t12);

var t13 = localStorage.getItem("1PM");
$("#one-pm").text(t13);

var t14 = localStorage.getItem("2PM");
$("#two-pm").text(t14);

var t15 = localStorage.getItem("3PM");
$("#three-pm").text(t15);

var t16 = localStorage.getItem("4PM");
$("#four-pm").text(t16);

var t17 = localStorage.getItem("5PM");
$("#five-pm").text(t17);

var t18 = localStorage.getItem("6PM");
$("#six-pm").text(t18);

var colorCode = $(".time-block");
console.log("colorCode:", colorCode);
var date = new Date();
console.log("current date:", date);
var hour = date.getHours();
console.log("current hour:", hour);

for (i = 0; i < colorCode.length; i++) {
  var timeBlock = parseInt(colorCode[i].getAttribute("data-hour"));
  console.log("timeBlock:", timeBlock);

  if (hour < timeBlock) {
    colorCode[i].classList.add("future");
    colorCode[i].classList.remove("past");
    colorCode[i].classList.remove("present");
  } else if (hour > timeBlock) {
    colorCode[i].classList.add("past");
    colorCode[i].classList.remove("present");
    colorCode[i].classList.remove("future");
  } else if (hour === timeBlock) {
    colorCode[i].classList.add("present");
    colorCode[i].classList.remove("past");
    colorCode[i].classList.remove("future");
  } else {
    colorCode[i].classList.remove("past");
    colorCode[i].classList.remove("present");
    colorCode[i].classList.remove("future");
  }
}
