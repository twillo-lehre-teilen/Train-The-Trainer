<h1 style="color:#000000">Schritt 6: Reflexion</h1>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<h2>Ordnen Sie den CC-Lizenzen die richtige Bedeutung zu</h2>

<div class="dragdropContainer">
	<p style="display:inline-block;float:left;width:120px;text-align:left;border:2px solid green;line-height:80px;vertical-align:middle;">CC BY ND: </p>
	<div class="dropzone">
		<img id="drag1" src="images/creative-commons_cc-by-nd.svg" draggable="true">
	</div>
	<div class="dropzone">
	</div>
	<p style="display:inline-block;float:left;border:2px solid green;">=> keine Bearbeitung, Namensnennung</p>
</div>
<br style="clear:both;">
<div class="dragdropContainer">
	<p style="display:inline-block;float:left;width:120px;text-align:left;">CC BY SA: </p>
	<div class="dropzone">
		<img id="drag2" src="images/creative-commons_cc-by-sa.svg" draggable="true">
	</div>
	<div class="dropzone">
	</div>
	<p style="display:inline-block;float:left;">=> Namensnennung, Weitergabe unter gleichen Bedingungen</p>
</div>
<br style="clear:both;">
<div class="dragdropContainer">
	<p style="display:inline-block;float:left;width:120px;text-align:left;">CC BY NC: </p>
	<div class="dropzone">
		<img id="drag3" src="images/creative-commons_cc-by-nc.svg" draggable="true">
	</div>
	<div class="dropzone">
	</div>
	<p style="display:inline-block;float:left;">=> nicht-kommerziell, Namensnennung</p>
</div>
<br style="clear:both;">
<div class="dragdropContainer">
	<p style="display:inline-block;float:left;width:120px;text-align:left;">CC BY: </p>
	<div class="dropzone">
		<img id="drag4" src="images/creative-commons_cc-by.svg" draggable="true">
	</div>
	<div class="dropzone">
	</div>
	<p style="display:inline-block;float:left;">=> Namensnennung</p>
</div>

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
	while (" " + target.className + " ".indexOf(" zielzone ") == -1) {
	    target = target.parentNode;
	}
	target.appendChild(document.getElementById(data));
}
window.addEventListener("load", function () {
	var elms = document.querySelectorAll(".dropzone");
	for (var i = 0; i < elms.length; i++) {
		var zielzone = elms[i];
		zielzone.addEventListener("drop", ablegen);
		zielzone.addEventListener("dragover", ablegenErlauben);
	};
	elms = document.querySelectorAll("[draggable=true]")
	for (var i = 0; i < elms.length; i++) {
		var draggable = elms[i];
		draggable.addEventListener("dragstart", ziehen);
	};
});
</script>
