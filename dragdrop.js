/* drag and drop script file */
function ziehen(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}
function ablegenErlauben(ev) {
  ev.preventDefault();
}
function ablegen(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  var target = ev.target;
  while (" " + target.className + " ".indexOf(" dropzone ") == -1) {
      target = target.parentNode;
  }
  target.appendChild(document.getElementById(data));
}
window.addEventListener("load", function () {
  var elms = document.querySelectorAll(".dropzone");
  for (var i = 0; i < elms.length; i++) {
    var dropzone = elms[i];
    dropzone.addEventListener("drop", ablegen);
    dropzone.addEventListener("dragover", ablegenErlauben);
  };
  elms = document.querySelectorAll("[draggable=true]")
  for (var i = 0; i < elms.length; i++) {
    var draggable = elms[i];
    draggable.addEventListener("dragstart", ziehen);
  };
});
