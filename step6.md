<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<script>
  /* drag function */
  function drag(ev) {
    /* define drag data */
    ev.dataTransfer.mozSetDataAt("image/png", stream, 0);
    ev.dataTransfer.mozSetDataAt("application/x-moz-file", file, 0);
    ev.dataTransfer.setData("text/uri-list", "images/creative-commons_cc-zero.svg");
    ev.dataTransfer.setData("text/plain", "images/creative-commons_cc-zero.svg");
    /* define drag image */
    let img = new Image();
    img.src = 'images/creative-commons_cc-zero.svg';
    ev.dataTransfer.setDragImage(img, 10, 10);
    /* define drag effect */
    ev.dataTransfer.dropEffect = "move";
  }
  window.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById("p1");
    element.addEventListener("dragstart", dragstart_handler);
  });
  /* drag over function */
  function dragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  /* drop function */
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<h2>Drag and Drop</h2>
<p>Drag the image back and forth between the two div elements.</p>

<div class="drag" id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img src="images/creative-commons_cc-zero.svg" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

<div class="drop" id="div2" ondrop="drop(event)" ondragover="dragOver(event)"></div>


