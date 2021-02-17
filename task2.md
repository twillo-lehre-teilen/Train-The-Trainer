# Aufgabe B

<b>Wählen Sie Lehr-/Lernmaterial aus, das Sie selbst für eine Ihrer Lehrveranstaltungen erstellt haben. Bereiten Sie es ggf. auf, damit es den Merkmalen von OER entspricht und veröffentlichen Sie es anschließend im OER-Portal twillo.

In den folgenden neun Schritten erhalten Sie wichtige Hinweise bei der Aufgabenbearbeitung.

Los geht's!</b><br><br>

<!-- Script fürs Accordion -->
<script>
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

<div>
  <button class="accordion">Schritt 1: Material auswählen</button>
  <div class="panel">
   <p>Damit der zeitliche Bearbeitungsrahmen von 30 Minuten eingehalten wird, empfehlen wir solche Materialien aus dem eigenen bewährten Lehrmaterialfundus zu wählen, die vom Umfang her den Inhaltsytypen <b>kleinteiliges Lehrmaterial</b> oder <b>aufgabenorientiertes Lehrmaterial</b> entsprechen.
    
<b>Kleinteilige Lehrmaterialien sind beispielsweise:</b>
<li>ein Foliensatz</li>
<li>ein Skript</li>
<li>ein Schaubild</li>

<b>Aufgabenorientierte Materialien sind beispielsweise:</b>
<li>eine Probeklausur mit Musterlösungen oder Hilfestellungen</li>
<li>ein Arbeitsblatt mit Hilfestellungen</li>
<li>ein Quiz mit Lösungen</li>

> &#x1F4A1; Bei der Bereitstellung von aufgabenorientierten Materialien sollten sowohl die Aufgabe, die Übung, das Arbeitsblatt etc., als auch ergänzende Materialien wie z.B. Hilfestellung, (Muster-)Lösungen, bzw. Lösungswege oder Best-Practice-Beispiele bereitgestellt werden. Dies erleichtert anderen Lehrenden die Nachnutzung und Kontextualisierung der Materialien.
    </p>
  </div>
  <button class="accordion">Schritt 2: Urheberrechtliche Aspekte & Lizenzen beachten</button>
  <div class="panel">
   <p>Nachdem Sie nun eine Wahl getroffen haben, überprüfen Sie, ob sich <b>urheberrechtlich geschützte Inhalte oder Werke im oder am Material</b> befinden. Haben Sie beispielsweise Bilder verwendet, die urheberrechtlich geschützt sind?
  
Beachten Sie:
<li>Die Verwendung von urheberrechtlichgeschützen Materialien im geringfügigen Umfang wie es im § 60 UrhG geregelt ist, ist bei der Veröffentlichung Ihres Materials als OER <b>nicht zulässig</b>. Diese Regelung gilt nur im Rahmen geschützter Lehrräume (z.B. Hörsaal/LMS).</li>
<li><b>Zitate</b> können, wenn Sie als solche gekennzeichnet sind, eingebunden werden. Hier gilt: Aussagen oder Bezugnahmen auf andere Quellen sind erlaubt, wenn sie zweckgemäß zum Einsatz kommen.</li>

> &#x1F4A1; Wenn die Zitatschranke des § 51 UrhG greift müssen Sie keinen Hinweis zum copyright geschützten Material in den Lizenztext aufnehmen. Das Zitatrecht stellt eine gesetzliche Lizenz dar, die vertraglichen Lizenzen (z.B. CC-Lizenzen) vorgeht. Analog zur wissenschaftlichen Praxis müssen folgende Kriterien vorliegen:
> 
> <li>der Zitatzweck liegt vor (inhaltlicher Zusammenhang)</li>
> <li>der Umfang des Zitats ist durch den Zweck gerechtfertigt (Umfang des zitierten Werks ist nicht unangemessen groß)</li>
> <li>die Quelle ist angegeben, § 63 UrhG (mind. Name des Urhebers und die Fundstelle)</li>
> <li>das fremde Werk /die fremden Werkteile wurden nicht verändert, § 62 UrhG (Kürzungen bei umfangreichen Werken, kleinere Änderungen der Satzstruktur sind erlaubt, müssen aber kenntlich gemacht werden!)</li>

> &#x1F4A1; Enthält Ihr Material urheberrechtlich geschützte Inhalte oder Werke, sollten Sie diese entfernen und ggf. nach Alternativen suchen. Eine Möglichkeit ist, sie durch CC-lizenierte Inhalte zu ersetzen.

> Enthält Ihr Material CC-lizenzierte Inhalte oder Werke, dann beachten Sie die Lizenzbestimmungen und richten Sie sich nach den Nutzungsbedingungen. Die Lizenzangaben sind dann mitzuführen <font color="#54B6B5;">(s. Kapitel Urherberrecht und offene Lizenzen)</font>.</p>
  </div>
  <button class="accordion">Schritt 3: Lizenztext und Lizenzversion wählen</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 4: Bildungsmaterial im offenen Dateiformat speichern</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 5: Anmeldung auf twillo</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 6: Material einstellen</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 7: Bildungsmaterial auffindbar machen</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 8: Bildungsmaterial kontextualisieren</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 9: Material freigeben</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
</div>

---
<footer style="font-size:14px;">
  Diese Seite von twillo ist, sofern nicht anders an den einzelnen Inhalten ausgewiesen, lizenziert unter der Lizenz CC BY 4.0
</footer>
