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
  $("h1").fadeIn(2000);
  $("h3")
    .delay(2000)
    .fadeIn(2000);
  $(".icon-link")
    .delay(4000)
    .fadeIn(2000);

  $('[data-toggle="tooltip"]').tooltip();

  $("#portfolio").click(function() {
    index++;
    if (index > color.length - 1) {
      index = 0;
    }
    $("body").css("color", color[index]);
    $("a.icon-link").css("color", color[index]);
    $("#portfolio").css("color", color[index]);
  });

  $(".section-link").click(function() {
    if (this.hash != "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
