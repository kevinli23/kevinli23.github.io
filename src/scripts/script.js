var color = [
  "white",
  "#d36e3f",
  "#533fd3",
  "#3fd364",
  "#d3933f",
  "#d3493f",
  "#d36e3f",
  "#d3b83f",
  "#9d3fd3"
];

var index = 0;

$(document).ready(function() {
  $("#portfolio").click(function() {
    index++;
    if (index > color.length - 1) {
      index = 0;
    }
    $("body").css("color", color[index]);
    $("a.icon-link").css("color", color[index]);
  });
});
