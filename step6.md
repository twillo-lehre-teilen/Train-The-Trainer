<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<script>
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.currentTarget.style.backgroundColor = 'yellow';
}
function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}
</script>

<h2>Drag and Drop</h2>

<p>Drag the image back and forth between the two div elements.</p>

<div class="example-parent">
  <div class="example-origin">
    <div id="draggable-1" class="example-draggable" draggable="true" ondragstart="onDragStart(event)">draggable</div>
  </div>
  <div class="example-dropzone" ondragover="onDragOver(event);" ondrop="onDrop(event);">dropzone</div>
</div>
