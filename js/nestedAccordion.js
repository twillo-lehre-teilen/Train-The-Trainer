/* script file for nested collapsible[accordion] inside accordion */
/* collect all elements */
var acc = document.getElementsByClassName("accordion");
var coll = document.getElementsByClassName("collapsible");
var maxCollHeight = 1000;
/* accordion script file */
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;                               
    /* if panel already open */
    if (panel.style.maxHeight) {
      this.classList.toggle('activeA', false);
      panel.style.maxHeight = null;
    } else {
      for (var j = 0; j < acc.length; j++) {
        acc[j].classList.toggle('activeA', false);
        var p = acc[j].nextElementSibling;
        p.style.maxHeight = null;
      }
      for (var k = 0; k < coll.length; k++) {
        var c = coll[k].nextElementSibling;
        c.style.maxHeight = null;                                
      }
      this.classList.toggle('activeA', true);
      panel.style.maxHeight = (panel.scrollHeight + maxCollHeight) + "px";
    }
  });
}
/* collapsible script */
for (var l = 0; l < coll.length; l++) {
  if (coll[l].nextElementSibling.scrollHeight > maxCollHeight){
    maxCollHeight = coll[l].nextElementSibling.scrollHeight;
  }
  coll[l].addEventListener("click", function() {
    this.classList.toggle("activeC");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
