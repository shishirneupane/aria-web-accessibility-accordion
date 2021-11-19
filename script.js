var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    if(panel.style.display === "block") {
      panel.style.display = "none";
      this.setAttribute("aria-expanded", "false");
    } else {
      panel.style.display = "block";
      this.setAttribute("aria-expanded", "true");
    }
  })
}
