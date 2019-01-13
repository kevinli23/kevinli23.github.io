var color = [
  "white",
  "dodgerblue",
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
  $("h1").fadeIn(1000);
  $("h3").fadeIn(3000);
  $(".icon-link")
    .delay(1300)
    .fadeIn(1200);

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

  $("div#chronovise-card").hover(function() {
    $("span.project-title").append(
      "<h3 style='text-align: left'>Chronovise</h3>" +
        "<h5 style='color:gray'>Programmed in: HTML CSS JavaScript jQuery Chrome API</h5>" +
        "<h5 style='color:gray'>September 2018</h5>" +
        "<h5>&emsp;• Worked in a team to create a Google Chrome extension that stored multiple links into a workspace, and upon press, all links would be automatically opened in new tabs</h5>" +
        "<h5>&emsp;• I focused heavily on the JavaScript and Chrome API functionality, namely the functions that controlled the opening of tabs and manipulation of saved data</h5>"
    );
    $("span.project-title").fadeIn(500);
  });

  $(
    "div#chronovise-card, div#pengu-card, div#portfolio-card, div#darkrun-card, div#pomodoro-card, div#timetracker-card"
  ).mouseleave(function() {
    $("span.project-title").empty();
    $("span.project-title").css("display", none);
  });

  $("div#pengu-card").hover(function() {
    $("span.project-title").append(
      "<h3 style='text-align: left'>Pengu's Dank Adventure</h3>" +
        "<h5 style='color:gray'>Programmed in: Java</h5>" +
        "<h5 style='color:gray'>September 2017 - Present</h5>" +
        "<h5>&emsp;• Platformer game that used Java's Graphics class for rendering and a time based loop for its updates</h5>" +
        "<h5>&emsp;• Applies the core concepts of Object Oriented Programming</h5>" +
        "<h5>&emsp;• Has a Java programmed server that can handle logins using sockets</h5>"
    );
    $("span.project-title").fadeIn(500);
  });

  $("div#portfolio-card").hover(function() {
    $("span.project-title").append(
      "<h3 style='text-align: left'>My Portfolio Website</h3>" +
        "<h5 style='color:gray'>Programmed in: HTML CSS JavaScript jQuery Bootstrap</h5>" +
        "<h5 style='color:gray'>January 2019</h5>" +
        "<h5>&emsp;• Portfolio website that showcases a majority of my personal projects</h5>" +
        "<h5>&emsp;• Tells a little bit more about myself as well as ways to get in contact with me</h5>"
    );

    $("span.project-title").fadeIn(500);
  });

  $("div#darkrun-card").hover(function() {
    $("span.project-title").append(
      "<h3 style='text-align: left'>Dark Run</h3>" +
        "<h5 style='color:gray'>Programmed in: Java</h5>" +
        "<h5 style='color:gray'>January 2018 - Feburary 2018</h5>" +
        "<h5>&emsp;• Maze platformer with limitted light</h5>" +
        "<h5>&emsp;• Applies the core concepts of Object Oriented Programming</h5>" +
        "<h5>&emsp;• Collision detection is done by entities in a given radius rather than checking all entities</h5>"
    );
    $("span.project-title").fadeIn(500);
  });

  $("div#pomodoro-card").hover(function() {
    $("span.project-title").append(
      "<h3 style='text-align: left'>Pomodoro Timer</h3>" +
        "<h5 style='color:gray'>Programmed in: Python</h5>" +
        "<h5 style='color:gray'>October 2018 - Present</h5>" +
        "<h5>&emsp;• Timer that alternates between a 30 - 5 minute timer</h5>" +
        "<h5>&emsp;• Also plays music from a specific directory of the program</h5>" +
        "<h5>&emsp;• GUI and music is done through pygame while the timer is done through a Python thread</h5>"
    );
    $("span.project-title").fadeIn(500);
  });

  $("div#timetracker-card").hover(function() {
    $("span.project-title").append(
      "<h3 style='text-align: left'>Time Usage Tracker</h3>" +
        "<h5 style='color:gray'>Programmed in: HTML CSS JavaScript jQuery Chrome API</h5>" +
        "<h5 style='color:gray'>December 2018 - Present</h5>" +
        "<h5>&emsp;•	Collaborated with a peer to create a Google Chrome extension that tracks time spent on each website per day</h5>" +
        "<h5>&emsp;•	Simply HTML design with more of a focus towards the JavaScript and jQuery backend functionality"
    );
    $("span.project-title").fadeIn(500);
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
