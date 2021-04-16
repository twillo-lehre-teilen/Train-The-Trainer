<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<!DOCTYPE HTML>
<html>
<head>
<style>
#div1, #div2 {
  float: left;
  width: 100px;
  height: 35px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>
<script>
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="drop(ev)" ondragover="allowDrop(ev)">
  <img src="images/creative-commons_cc-zero.svg" draggable="true" ondragstart="drag(ev)" id="drag1" width="88" height="31">
</div>

<div id="div2" ondrop="drop(ev)" ondragover="allowDrop(ev)"></div>

</body>
</html>

