// $(document).ready(function () { all script between here});
console.log("Script linked");
$(document).ready(function () {
  function updateTime() {
    var realTime = moment().format("MMMM Do YYYY, h:mm:ss a");

    $("#currentDay").text("Today is: " + realTime);
  }
  setInterval(updateTime, 1000);
});
