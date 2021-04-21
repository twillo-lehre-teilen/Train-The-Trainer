<h1 style="color:#000000">Schritt 6: Reflexion</h1>
<h1>HTML5 Drag and Drop 1 -besser</h1>

<div id="div1" class="zielzone">
	<p draggable="true" id="kugel1"></p>
	<p draggable="true" id="kugel2"></p>
	<p draggable="true" id="kugel3"></p>
</div>
<div id="div2" class="zielzone">
	<p draggable="true" id="kugel4"></p>
	<p draggable="true" id="kugel5"></p>
	<p draggable="true" id="kugel6"></p>
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
		while (" " + target.className + " ".indexOf(" zielzone ") == -1) target =
			target.parentNode;
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
