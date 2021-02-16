# Aufgabe A

<b>Führen Sie eine Internetrecherche durch und identifizieren Sie hochwertige Lehrmaterialien, die den Merkmalen von OER entsprechen. Veröffentlichen Sie diese anschließend im OER-Portal twillo.

In den folgenden acht Schritten erhalten Sie wichtige Hinweise bei der Aufgabenbearbeitung.

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
  <button class="accordion">Schritt 1: Material finden</button>
  <div class="panel">
   <p>Recherchieren Sie im Internet nach interessanten Lehr-/Lernmaterialien ihres Faches/ihrer Disziplin, die CC-lizenziert sind. Legen Sie ein besonderes Augenmerk darauf, dass eine kostenfreie Verwendung, Veränderung und Weiterverbreitung des Materials zulässig ist.

Sie können für Ihre Internetrecherche z.B. Suchmaschinen nutzen, die explizit auf das Auffinden von OER ausgerichtet sind oder Internetseiten wählen, die offen lizenzierte Materialien bereitstellen. Dies sind z.B. 
    * OERSI (<a aria-describedby="Link zur OERSI-Seite" href="http://oersi.de/" target="_blank">oersi.de</a>, derzeit in der Beta-Phase)
    * OERhörnchen (<a aria-describedby="Link zur OER-Hörnchen-Seite" href="http://oerhoernchen.de/" target="_blank">oerhoernchen.de</a>)
    * CCsearch (<a aria-describedby="Link zur CC-Search-Seite" href="http://ccsearch.creativecommons.org/" target="_blank">ccsearch.creativecommons.org</a>)
    * Wikimedia Commons (<a aria-describedby="Link zu Wikimedia Commons" href="http://commons.wikimedia.org/" target="_blank">commons.wikimedia.org</a>)
    * X5GON (<a aria-describedby="Link zur X5GON-Seite" href="http://discovery.x5gon.org/" target="_blank">discovery.x5gon.org</a>, derzeit in der Beta-Phase)</p>
    Selbstverständlich können Sie für Ihre Recherche auch die üblichen Suchmaschinen oder Plattformen z.B. (Google und YouTube) nutzen. Um den Prozess zu vereinfachen, richten Sie Ihre Suche gezielt auf eine gewünschte Lizenz aus.

Google:  Geben Sie Ihren Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend unter "Einstellungen", die "erweiterte Suche" aus (s. Abb. 9). Es öffnet sich ein neues Fenster. Hier können Sie die Ergebnisse Ihrer Suche im Bereich "Nutzungsrechte" entlang der von Ihnen gewünschten Lizenzierung eingrenzen (s. Abb. 10).
<img src="images/Google_Suche_1.svg" alt="Screenshot einer Googlesuche" titel="Abb. 10: Screenshot Google-Suche"/>
<img src="images/Google_Suche_2.svg" alt="Screenshot einer Googlesuche mit Filter" titel="Abb. 12.: Screenshot Google-Suchfilter"/>
Youtube: Geben Sie ihren Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend die Option "Filter" und schränken Sie die Ergebnisse im Bereich "Eigenschaften" durch die Wahl der Option "Creative Commons" ein (S. Screenshot 3).
<img src="images/YouTube.svg" alt="Screenshot Youtube-Suchfilter" titel="Abb. 12: Screenshot YouTube-Suchfilter"/>
  </div>
  <button class="accordion">Schritt 2: Urheberrechtliche Aspekte & Lizenzen beachten</button>
  <div class="panel">
   <p>Bsp...</p>
  </div>
  <button class="accordion">Schritt 3: Dateiformat prüfen</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 4: Anmeldung auf twillo</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 5: Material einstellen</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 6: Bildungsmaterial auffindbar machen</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 7: Bildungsmaterial kontextualisieren</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
  <button class="accordion">Schritt 8: Material freigeben</button>
  <div class="panel">
   <p>Bsp..</p>
  </div>
</div>

---
<!-- old -->

# Finden Sie ein OER im Internet und stellen Sie es ins OER-Portal ein

## Wo finde ich OER?

* Wikimedia Commons (http://commons.wikimedia.org/)
* OERhörnchen (http://oerhoernchen.de/)
* CCsearch (http://ccsearch.creativecommons.org/)
* http://pixabay.com/, http://flickr.com/ und http://unsplash.com/ (Lizenz beachten)
* Google und YouTube (Lizenz beachten)
* BETA: OERSI (http://oersi.de/, deutschlandweiter OER-Index)
* BETA: X5GON (http://discovery.x5gon.org/, europaweiter OER-Index)

## Urheberrechtliche Aspekte und Lizenz

Welche Lizenz liegt vor?

Bei OER-Materialien sollten Sie eindeutig Lizenzhinweise finden. Diese sollten direkt am Material platziert oder als Information gespeichert sein. In der Regel handel es sich um Lizenzmodule von Creative Commons.

Lizenzicons
Materialien, die mit CC lizenziert sind, dürfen Sie ins OER-Portal stellen. Wir empfehlen allerdings möglichst freie Bildungsmaterialien einzustellen:

<img src="images/oer_skala.svg" alt="CCLizenzen"/>

## Dateiformate

[Platzhalter]

## Optionen im OER-Portal

<center><img src="images/OER-Portal_Workflow_Grafik.svg" max-width="150" alt="Anmelden: DNF" titel="Anmelden: DFN"/><br><B>Material ins OER-Portal einstellen</B></center>

Verlinken oder lokal herunterladen & wieder im Portal hochladen

* **Verlinken** Problem wenn Link ungültig wird

* **Hochladen** wenn OER!

## Metadaten

Übernehmen Sie möglichst die Informationen, die Sie am Material auch finden in die Beschreibung.

<img src="images/general_structure.svg" alt="Metadaten" titel="Metadaten"/>

### Allgemeine Informationen

<B>Lizenz:</B>
Übernehmen Sie genau die Lizenz, die das  Material aufweist. Geben Sie bei der Urheberangabe auch die Autor*innen
<img src="images/urheber.svg" alt="MetadatenLizenz" titel="MetadatenLizenz"/>

<B>Klassifikation:</B> Inhaltstyp & Materialart
<br>
Inhaltstyp: *Kleinteiliges Lehrmaterial* sind typische Lehrmaterialien wie etwa Abbildungen, Videos, Audio oder Dokumente, die aufbereitete Lehrinhalte beinhalten. Auch Informationsmaterialien wie etwa Handreichungen zählen zu den kleinteiligen Materialien.

<B>Didaktische Informationen:</B>

<B>Technische Informationen:</B>

## Freigabe

[Platzhalter]

## OER: Selbstcheck-Tool

[Platzhalter]

## OER Planungshilfe

[Platzhalter]



---
<footer style="font-size:14px;">
  Diese Seite von twillo ist, sofern nicht anders an den einzelnen Inhalten ausgewiesen, lizenziert unter der Lizenz CC BY 4.0
</footer>
