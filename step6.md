<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<h2>Ordnen Sie den CC-Lizenzen die richtige Bedeutung zu</h2>

<div class="dragdropContainer">
	<p>CC BY ND:</p>
	<div class="dropzone">
		<img id="drag1" src="images/creative-commons_cc-by-nd.svg" draggable="true">
	</div>
	<div class="dropzone">
	</div>
	<p><i class="fad fa-caret-circle-right"></i> keine Bearbeitung, Namensnennung</p>
</div>
<br style="clear:both;">
<div class="dropzone">
	<img id="drag2" src="images/creative-commons_cc-by-sa.svg" draggable="true">
</div>
<div class="dropzone">
</div>
<br style="clear:both;">
<div class="dropzone">
	<img id="drag3" src="images/creative-commons_cc-by-nc.svg" draggable="true">
</div>
<div class="dropzone">
</div>
<br style="clear:both;">
<div class="dropzone">
	<img id="drag4" src="images/creative-commons_cc-by.svg" draggable="true">
</div>
<div class="dropzone">
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
	var elms = document.querySelectorAll(".zielzone");
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
