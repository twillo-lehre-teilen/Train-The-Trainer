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

Sie können für Ihre Internetrecherche z.B. Suchmaschinen nutzen, die explizit auf das Auffinden von OER ausgerichtet sind oder Internetseiten wählen, die offen lizenzierte Materialien bereitstellen. Dies sind z.B
<ul>
<li> OERSI (<a aria-describedby="Link zur OERSI-Seite" href="http://oersi.de/" target="_blank">oersi.de</a>, derzeit in der Beta-Phase)</li>
<li> OERhörnchen (<a aria-describedby="Link zur OER-Hörnchen-Seite" href="http://oerhoernchen.de/" target="_blank">oerhoernchen.de</a>)</li>
<li> CCsearch (<a aria-describedby="Link zur CC-Search-Seite" href="http://ccsearch.creativecommons.org/" target="_blank">ccsearch.creativecommons.org</a>)</li>
<li> Wikimedia Commons (<a aria-describedby="Link zu Wikimedia Commons" href="http://commons.wikimedia.org/" target="_blank">commons.wikimedia.org</a>)</li>
<li> X5GON (<a aria-describedby="Link zur X5GON-Seite" href="http://discovery.x5gon.org/" target="_blank">discovery.x5gon.org</a>, derzeit in der Beta-Phase)</p>
    Selbstverständlich können Sie für Ihre Recherche auch die üblichen Suchmaschinen oder Plattformen z.B. (Google und YouTube) nutzen. Um den Prozess zu vereinfachen, richten Sie Ihre Suche gezielt auf eine gewünschte Lizenz aus.

Google:  Geben Sie Ihren Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend unter "Einstellungen", die "erweiterte Suche" aus (s. Abb. 9). Es öffnet sich ein neues Fenster. Hier können Sie die Ergebnisse Ihrer Suche im Bereich "Nutzungsrechte" entlang der von Ihnen gewünschten Lizenzierung eingrenzen (s. Abb. 10).
<figure>
  <img src="images/Google_Suche_1.svg" alt="Screenshot einer Googlesuche" titel="Abb. 10: Screenshot Google-Suche"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 10: Screenshot Google-Suche</figcaption>
</figure>
<figure>
  <img src="images/Google_Suche_2.svg" alt="Screenshot einer Googlesuche mit Filter" titel="Abb. 12.: Screenshot Google-Suchfilter"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 12.: Screenshot Google-Suchfilter</figcaption>
</figure>
Youtube: Geben Sie ihren Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend die Option "Filter" und schränken Sie die Ergebnisse im Bereich "Eigenschaften" durch die Wahl der Option "Creative Commons" ein (S. Screenshot 3).
<figure>
  <img src="images/YouTube.svg" alt="Screenshot Youtube-Suchfilter" titel="Abb. 12: Screenshot YouTube-Suchfilter"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 12: Screenshot YouTube-Suchfilter</figcaption>
</figure>
  </div>
  <button class="accordion">Schritt 2: Urheberrechtliche Aspekte & Lizenzen beachten</button>
  <div class="panel">
   <p>Haben Sie Material gefunden, das Sie gern auf twillo bereitstellen möchten, prüfen Sie, ob dieses den Merkmalen von OER entspricht. Beginnen Sie mit der Lizenz.
  Auf OER sollten Sie einen eindeutigen Lizenzhinweis finden. Dieser sollte direkt am Material platziert oder als begleitende Information gespeichert sein.</p>
  <p border-style="solid">(Glühbirne) <b>Was ist was?</b>

<b>Lizenztext:</b>
Der Lizenztext macht deutlich, welche Nutzungsbedingungen beim jeweiligen Material gelten und welcher Nutzungsgrad bei der Verwendung zulässig ist.

<b>Lizenzversion:</b>
Die unterschiedlichen Versionen (2.0 bzw. 3.0 bzw. 4.0) zeigen die durchlaufenen Revisionsprozesse der CC-Lizenzmodule an.

<b>Lizenzicon:</b>
Das Lizenzicon schafft einen Wiedererkennungswert. Auf der Webseite von Creative Commons werden alle gängigen Lizenzicons für Sie bereitgestellt. </p>
<p>Ein korrekter CC-Lizenzhinweis <b>muss</b> folgende Punkte enthalten:
<ul>
  <li>Lizenz und Lizenzversion</li>
  <li>Verweis zum Lizenztext (z. B. Verlinkung oder ausgeschriebener Link)</li>
  <li>Urheber*in(nen)angabe (sofern die Lizenz das Modul <b>BY</b> enthält) </li>
</ul>

Die folgende Abbildung zeigt ein Beispiel für einen Lizenzhinweis (CC BY (4.0)), der die verpflichtenden Angaben enthält.
<figure>
<img src="images/Pflichtangaben_Lizenzhinweis.svg" alt="Abb. 13: Pflichtangaben in Lizenzhinweisen" titel="Abb. 13: Pflichtangaben in Lizenzhinweisen"/>
<figcaption style="text-align:center;font-size:14px;">Abb. 13: Pflichtangaben in Lizenzhinweisen</figcaption>
</figure>
Optional ist für einen Lizenzhinweis die Angabe folgender Punkte:
<ul>
  <li><b>Titel und Art des Werks</b> (nur bei Version 4.0, bei Vorgängerversionen wird der Titel mit angeführt)</li>
  <li><b>Lizenzicon</b></li>
  <li><b>Ausnahmeregelungen oder weitere Hinweise</b> (z.B. bzgl. der Nachnutzbarkeit der Materialien)</li>
</ul>
Folgende Abbildung zeigt ein Beispiel für einen ausführlichen Lizenzhinweis, der neben den verpflichtenden, auch optionale Angaben enthält.
<figure>
<img src="images/Ausführlicher_Lizenzhinweis.svg" alt="Abb. 14: Ausführlicher Lizenzhinweis" titel="Abb. 14: Ausführlicher Lizenzhinweis"/>
<figcaption style="text-align:center;font-size:14px;">Abb. 14: Ausführlicher Lizenzhinweis</figcaption>
</figure>
(Glühbirne) <b>Je offener die Lizenz, desto einfacher ist die Nachnutzung</b>

Alle Materialien, die CC-lizenziert sind, dürfen Sie grundsätzlich im Portal einstellen. Materialien mit einer möglichst offenen Lizenz (CC 0, CC BY und CC BY SA) sind besonders willkommen, da diese eine einfache Verwendung, Veränderung und Weiterverbreitung ermöglichen und somit der grundsätzlichen Idee von OER entsprechen.

Materialien, deren CC-Lizenz die Module ND und/oder NC enthalten, sind weniger offen und können in der Nachnutzung Probleme hervorrufen. So kann es z.B. schwierig sein, Material ohne die Erlaubnis zur Anpassung in das individuelle Lehr-Lernsetting zu integrieren. Auch die klare Trennung eines nichtkommerziellen von einem kommerziellen Verwendungskontext kann problematisch sein.
</p>
  </div>
  <button class="accordion">Schritt 3: Dateiformat prüfen</button>
  <div class="panel">
   <p>Wenden Sie sich in diesem Schritt dem Dateiformat zu. Prüfen Sie, ob das Dokument in einem offenen Dateiformat vorliegt, das eine direkte Bearbeitung erlaubt.

Sollte dies nicht der Fall sein, überführen Sie das gewählte Material in ein offeneres Dateiformat -  <b>sofern es die Lizenz erlaubt</b>. Sollte die Lizenz das Modul <b>ND</b>enthalten, ist jegliche Form der Bearbeitung ausgeschlossen - dies gilt auch für die Konvertierung in ein anderes Format.

Wenn Sie das Material in ein offenes Format überführen konnten/durften, stellen Sie am besten sowohl die konvertierte Datei (z.B. Word), als auch die Originaldatei (z.B. PDF) in das Portal. Auf diese Weise können Sie z.B. das Layout und Design des Originalwerks zur Veranschaulichung erhalten und gleichzeitig die Beabreitung der Inhalte ermöglichen.

Wie Sie die das Material auf twillo teilen, erfahren Sie in den nächsten Schritten.</p>
  </div>
  <button class="accordion">Schritt 4: Anmeldung auf twillo</button>
  <div class="panel">
   <p>Um das Material auf twillo einzustellen, melden Sie sich im Portal an.
     <figure>
<img src="images/OER-Portal_Workflow_Grafik.svg" alt="Abb. 15: Twillo Workflow" titel="Abb. 15: Twillo Workflow"/>
<figcaption style="text-align:center;font-size:14px;">Abb. 15: Twillo Workflow</figcaption>
</figure>
     Rufen Sie den Link <a aria-describedby="Link zum OER-Portal" href="https://www.oernds.de/oer/" target="_blank">oer-nds.de</a> auf und gehen Sie über den Punkt Zum <l>Portal</l> im Kopfmenü auf den Bereich <l>Einloggen</l>. Alternativ klicken Sie <a aria-describedby="Link zu Twillo" href="https://www.oernds.de/edu-sharing/components/login" target="_blank">hier</a>, um direkt auf die Anmeldemaske von twillo zu gelangen.

Angehörigen von Hochschulen, die <a aria-describedby="Link zu DFN-AAI" href="https://www.dfn.de/dienstleistungen/dfnaai/" target="_blank">DFN-AAI</a> nutzen, ist ein direkter Einstieg ins OER-Portal ohne manuelle Registrierung möglich. Wählen Sie unter Einloggen hierfür die Option Zur Hochschulauswahl. Wählen Sie in der Liste Ihre Einrichtung/Institution und geben Sie in der Ihnen vertrauten Anmeldungsmaske die Kennung Ihres Hochschulaccounts ein. Sie befinden sich nach Anmeldung in Ihrem Workspace, dort werden Ihre eingestellten Bildungsmaterialien abgelegt.

Das folgende Video veranschaulicht den Prozess der Anmeldung im Portal über DFN:

  </p>
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
