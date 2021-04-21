<h1 style="color:#000000">Schritt 6: Reflexion</h1>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<h2>Ordnen Sie den CC-Lizenzen die richtige Bedeutung zu</h2>

<div class="dragdropContainer">
	<p style="float:left;line-height:20px;vertical-align:middle;width:120px;display:inline-block;">CC BY ND: </p>
	<div class="dropzone"><img id="drag1" src="images/creative-commons_cc-by-nd.svg" draggable="true"></div>
	<div class="dropzone"></div>
	<p style="float:left;line-height:20px;vertical-align:middle;display:inline-block;">=> keine Bearbeitung, Namensnennung</p>
</div>
<br style="clear:both;">
<div class="dragdropContainer">
	<p style="float:left;line-height:20px;vertical-align:middle;width:120px;">CC BY SA: </p>
	<div class="dropzone">
		<img id="drag2" src="images/creative-commons_cc-by-sa.svg" draggable="true">
	</div>
	<div class="dropzone" style="margin-right:40px;">
	</div>
	<p style="float:left;line-height:20px;vertical-align:middle;">=> Namensnennung, Weitergabe unter gleichen Bedingungen</p>
</div>
<br style="clear:both;">
<div class="dragdropContainer">
	<p style="float:left;line-height:20px;vertical-align:middle;width:120px;">CC BY NC: </p>
	<div class="dropzone">
		<img id="drag3" src="images/creative-commons_cc-by-nc.svg" draggable="true">
	</div>
	<div class="dropzone">
	</div>
	<p style="float:left;line-height:20px;vertical-align:middle;">=> nicht-kommerziell, Namensnennung</p>
</div>
<br style="clear:both;">
<div class="dragdropContainer">
	<p style="float:left;line-height:20px;vertical-align:middle;width:120px;">CC BY: </p>
	<div class="dropzone">
		<img id="drag4" src="images/creative-commons_cc-by.svg" draggable="true">
	</div>
	<div class="dropzone">
	</div>
	<p style="float:left;line-height:20px;vertical-align:middle;">=> Namensnennung</p>
</div>
<br style="clear:both">

---
<label class="dragdropContainer">
  <p style="float:left;line-height:20px;vertical-align:middle;width:120px;">CC BY ND: </p>
  <div class="dropzone" title="drag"><img id="drag5" title="A" src="images/creative-commons_cc-by-nd.svg" draggable="true"></div>
  <div class="dropzone" title="drop" style="margin-right:30px;"></div>
  <p title="description" style="float:left;line-height:20px;vertical-align:middle;">= keine Bearbeitung, Namensnennung</p>
</label>
<br style="clear:both">
<label class="dragdropContainer">
  <p style="float:left;line-height:30px;vertical-align:middle;width:120px;">CC BY SA: </p>
  <div class="dropzone" title="drag"><img title="B" src="images/creative-commons_cc-by-sa.svg" draggable="true"></div>
  <div class="dropzone" title="drop" style="margin-right:30px;"></div>
  <p title="description" style="float:left;line-height:30px;vertical-align:middle;">= Namensnennung, Weitergabe unter gleichen Bedingungen</p>
</label>
<br style="clear:both">
<label class="dragdropContainer">
  <p style="float:left;line-height:30px;vertical-align:middle;width:120px;">CC BY NC: </p>
  <div class="dropzone" title="drag"><img title="C" src="images/creative-commons_cc-by-nc.svg" draggable="true"></div>
  <div class="dropzone" title="drop" style="margin-right:30px;"></div>
  <p title="description" style="float:left;line-height:30px;vertical-align:middle;">= nicht-kommerziell, Namensnennung</p>
</label>
<br style="clear:both">
<label class="dragdropContainer">
  <p style="float:left;line-height:30px;vertical-align:middle;width:120px;">CC BY: </p>
  <div class="dropzone" title="drag"><img title="D" src="images/creative-commons_cc-by.svg" draggable="true"></div>
  <div class="dropzone" title="drop" style="margin-right:30px;"></div>
  <p title="description" style="float:left;line-height:30px;vertical-align:middle;">= Namensnennung</p>
</label>
<br style="clear:both">


<script>
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
</script>
