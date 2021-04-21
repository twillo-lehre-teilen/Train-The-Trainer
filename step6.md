<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<script>
  function allowDrop(ev)    
  {    
      ev.preventDefault();    
  }    

  function drag(ev)    
  {    
      ev.dataTransfer.setData("text", ev.target.id);    
  }    

  function drop(ev)    
  {    
      ev.preventDefault();    
      var data = ev.dataTransfer.getData("text");    
      ev.target.appendChild(document.getElementById(data));    
  }    
</script>

<h2>Drag and Drop</h2>

<img draggable="true">     

<p>Drag the image back and forth between the two div elements.</p>
<div id="box" ondrop="drop(event)" ondragover="allowDrop(event)" style="width:110px;height:110px;padding:10px;text-align:center;magrin:0 auto;border:1px solid #aaaaaa"></div>

<img id="drag1" src="images/creative-commons_cc-zero.svg" title="CC 0" alt="CC 0" draggable="true" ondragstart="drag(event)">


