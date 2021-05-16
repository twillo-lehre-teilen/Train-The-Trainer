<h1 style="color:#228b22">Schritt 3: Material aufbereiten</h1>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="infobox">
  <p><i class="fa fa-info-circle" style="color:blue"></i>  <b>Info!</b>
    <br><br>
    Im dritten Schritt werden Sie dabei unterstützt, Materialien, die für Präsenzveranstaltungen entwickelt wurden, didaktisch für ein digitales Setting umzugestalten. Gleichzeitig geht es um die Überführung Ihres Materials in die Form von OER. Einen besonderen Schwerpunkt bilden Fragen der Lizenzierung eigener Materialien mit und ohne die Einbindung von Inhalten Dritter. Ziel dieser Einheit ist es, Ihnen die Aufbereitung eigener Materialien in Form von OER Schritt für Schritt näher zu bringen.
  </p>
</div>


<script>
  /* accordeon script file */
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      /* if panel already open */
      if (panel.style.maxHeight) {
        this.classList.toggle('activeA', false);
        panel.style.maxHeight = null;
        return;
      }
      /* else */
      for (var j = 0; j < acc.length; j++) {
        acc[j].classList.toggle('activeA', false)
        var p = acc[j].nextElementSibling;
        p.style.maxHeight = null;
      }
      this.classList.toggle('activeA', true);
      panel.style.maxHeight = panel.scrollHeight + "px";
    });
  }
</script>
