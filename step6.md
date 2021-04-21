<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<h1>HTML5 Drag and Drop - 1</h1>
<p>Ziehe die Weihnachts-Logos ins Ziel:</p> <img id="drag1" src="https://wiki-test.selfhtml.org/images/8/87/Selfhtml-logo.gif"
alt="Spinnen-Logo" draggable="false" ondragstart="drag(event)"> <img id="drag2" src="https://wiki-test.selfhtml.org/images/6/63/Selfhtml-logo-Weihnachten-2006_patrick_rudolph.gif"
alt="Logo-Entwurf von Patrick Rudolph" draggable="true" ondragstart="drag(event)"><img id="drag3" src="https://wiki-test.selfhtml.org/images/d/d7/Selfhtml-logo-Weihnachten-2006-ani_kirsten-evers.gif"
alt="Logo-Entwurf von Kirsten Evers" draggable="true" ondragstart="drag(event)">
<div id="ziel" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<script>
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(data));
}

</script>
