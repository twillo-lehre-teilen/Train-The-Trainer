<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<h2>Drag and Drop</h2>

<div class="zielzone">
	<img id="drag1" src="images/creative-commons_cc-zero.svg" draggable="true">
</div>
<div class="zielzone">
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
