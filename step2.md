<script>
  //Script fürs Accordeon
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

<h1 style="color:#000080">Schritt 2: OER finden und nutzen</h1>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="infobox">
  <p><i class="fa fa-info-circle" style="color:blue"></i>  <b>Info!</b>
    <br><br>
    Im zweiten Schritt erhalten Sie einen Überlick über bestehende Möglichkeiten, um gezielt nach OER zu suchen. In diesem Zuge lernen Sie die wichtigsten Suchmaschinen, Portale und Repositorien für OER kennen. Zudem erhalten Sie Informationen über die Einbindung von CC-lizenzierten Inhalten in Ihre eigenen Werke und erfahren was dabei zu beachten ist. Ziel der Einheit ist es, Ihnen mehr Sicherheit bei der Nachnutzung bestehender OER zu geben.
  <br><br>
  <b>Workload: 45 Minuten</b>
  </p>
</div>

# Fundorte und Suchstrategien

Für das Auffinden von OER im Internet können zwei zentrale Hinweise in Bezug auf den <b>Fundort</b> sowie der <b>Suchstrategie</b> gegeben werden. 

<b>Suche über spezielle OER-Portale und -Plattformen:</b> Es bestehen einige Infrastrukturen, die explizit für das Bereitstellen von offen lizenzierten Lehr- und Lernmaterialien konzipiert sind - wie z.B. twillo. Die Bestrebung des Ausbaus solcher sog. OER-Repositorien wird aktuell auf bildungspolitischer Ebene fokussiert und erhält Eingang in die Hochschullehre.

<b>Verwendung von gängigen Suchmaschienen und allgemeinen Plattformen:</b> Auch Plattformen ohne spezifischen OER-Fokus führen Materialien mit offenen Lizenzen. Diese bieten zwar nicht ausschließlich Lehr- oder Lernmaterialien an, dennoch haben sie sich in den letzten Jahren - sicherlich auch aufgrund fehlender OER-Infrastrukturen - als Veröffentlichungsorte für Bildungsmaterialien etabliert.


Neben dem Kriterium des Fundortes kann, wie in der Wissenschaftspraxis auch, z.B. in der Datenbankrecherche, systematisch nach offen lizenzierten Materialien gesucht werden. Dies gilt sowohl für die Nutzung gängiger Suchmaschinen, als auch für die Suche in Repositorien. Folgende Suchstrategien lassen sich für eine zielgerichtete Suche nach OER anwenden:

<i class="fa fa-check-circle" style="color:green"></i> Verwendung von Schlagworten: Denken Sie auch an die Suchtechnik des <b>Trunkierens</b>; eher wenige Stichwörter, dafür aber Wortteile statt ganzer Wörter (Beispiel: Systemtheorie → system*theor*, Paternalismus → paternal*)

<i class="fa fa-check-circle" style="color:green"></i> Nutzung von <b>Suchoperatoren</b>, die aus Datenbanken und dem Bibliothekswesen bekannt sind: UND/AND/+; oder NICHT/NOT/- sowie ODER/OR

<i class="fa fa-check-circle" style="color:green"></i> Verwendung der <b>CC-Filter</b> in Suchmaschinen oder Portalen

<i class="fa fa-check-circle" style="color:green"></i> Eingabe des Suchbegriffs + <b>Creative Commons</b> oder speziell der <b>Lizenz</b> (CC 0, CC BY etc.)

<i class="fa fa-check-circle" style="color:green"></i> Nutzung von <b>englischen</b> Begriffen

<i class="fa fa-check-circle" style="color:green"></i> Verwendung <b>spezifischer Filteroptionen</b> in OER-Repositorien; z.B. die erweiterte Suche (Materialart, Fach- und Sachgebiet, etc.)


Im Folgenden sind einige Plattformen sowie ihre Filteroptionen im Hinblick auf eine zielgerichtete OER-Suche aufgeführt

<b>OER-Portale und -Suchmaschinen (Repositorien und Referatorien)</b>

<div >
   <button class="accordion">twillo</button>
   <div class="panel">
     <p>Twillo ist ein OER-Repositorium für offene Bildungsmaterialien für den Hochschulkontext. Das Portal richtet sich an Hochschullehrende aller Fachbereiche.
       <a aria-describedby="Link zum twillo-Portal" href="http://www.twillo.de/" target="_blank">www.twillo.de</a>
     </p>
     <figure style="align:middle;">
  <img src="images/twillo_suche.svg" alt="Abb. 6: Screenshot der twillo Suchumgebung" title="Abb. 6: Screenshot der twillo Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 6: Screenshot der twillo Suchumgebung</figcaption>
</figure>
   </div>
   <button class="accordion">OERSI</button>
   <div class="panel">
     <p>OERSI steht für OER Search Index und ist eine Suchmaschine für offene Bildungsmaterialien, die OER Materialien aus verschiedensten Plattformen und Repositorien auffindbar
macht. Die Suchmaschine befindet sich aktuell noch in der Beta-Phase.
      <a aria-describedby="Link zum oersi" href="http://oersi.de/" target="_blank">www.oersi.de</a>
     </p>
     <figure style="align:middle;">
  <img src="images/oersi.svg" alt="Abb. 7: Screenshot der OERSI Suchumgebung " title="Abb. 7: Screenshot der OERSI Suchumgebung "/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 7: Screenshot der OERSI Suchumgebung </figcaption>
</figure>
   </div>
   <button class="accordion">X5GON</button>
   <div class="panel">
     <p>Bei X5GON handelt es sich um eine Plattform, die OER aus verschiedensten Quellen und Repositorien auffindbar macht.
       <a aria-describedby="Link zur X5GON Plattform" href="http://discovery.x5gon.org/" target="_blank">discovery.x5gon.org</a>
     </p>
     <figure style="align:middle;">
  <img src="images/x5gon.svg" alt="Abb. 8: Screenshot der X5GON Suchumgebung" title="Abb. 8: Screenshot der X5GON Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 8: Screenshot der X5GON Suchumgebung</figcaption>
</figure>
   </div>
   <button class="accordion">OERhörnchen</button>
   <div class="panel">
     <p>OERhörnchen ist eine Suchmaschine für OER Materialien, die gezielt offene Lehr-/Lernmaterialien von ausgewählten Bildungsprojekten auffindbar macht.
       <a aria-describedby="Link zur OERhörnchen Suchmaschine" href="http://oerhoernchen.de/" target="_blank">www.oerhoernchen.de</a>
     </p>
     <figure style="align:middle;">
  <img src="images/oerhoernchen.svg" alt="Abb. 9: Screenshot der OERhörnchen Suchumgebung" title="Abb. 9: Screenshot der OERhörnchen Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 9: Screenshot der OERhörnchen Suchumgebung</figcaption>
</figure>
   </div>
   <button class="accordion">CCsearch</button>
   <div class="panel">
     <p>CCsearch ist eine Suchmaschine für Materialien, die mit Creative Commons Lizenzen ausgezeichnet sind.
       <a aria-describedby="Link zur CCsearch Suchmaschine" href="http://ccsearch.creativecommons.org/" target="_blank">ccsearch.creativecommons.org</a>
     </p>
     <figure style="align:middle;">
  <img src="images/ccsearch_oer_suche.svg" alt="Abb. 10: Screenshot der CCsearch Suchumgebung" title="Abb. 10: Screenshot der CCsearch Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 10: Screenshot der CCsearch Suchumgebung</figcaption>
</figure>
   </div>
   <button class="accordion">Wikimedia Commons</button>
   <div class="panel">
     <p>Wikimedia Commons ist eine Plattform, auf der offene lizenzierte Inhalte zur Nutzung bereit stehen.
       <a aria-describedby="Link zur Wikimedia Commons Plattform" href="http://commons.wikimedia.org/" target="_blank">commons.wikimedia.org</a>
     </p>
     <figure style="align:middle;">
  <img src="images/commonswikimedia.svg" alt="Abb. 11: Screenshot der Wikimedia Commons Suchumgebung" title="Abb. 11: Screenshot der Wikimedia Commons Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 11: Screenshot der Wikimedia Commons Suchumgebung</figcaption>
</figure>
   </div>
   <button class="accordion">SlideWiki</button>
   <div class="panel">
     <p>SlideWiki ist eine Open-Source-Plattform auf der Vorträge und Präsentationen unter einer offenen Lizenz bereitgestellt werden.
       <a aria-describedby="Link zu Slidewiki" href="https://slidewiki.org/" target="_blank">https://slidewiki.org/</a>
     </p>
     <figure style="align:middle;">
  <img src="images/slidewiki.svg" alt="Abb. 12: Screenshot der SlideWiki Suchumgebung" title="Abb. 12: Screenshot der SlideWiki Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 12: Screenshot der SlideWiki Suchumgebung</figcaption>
</figure>
   </div>
</div>

<b>Allgemeine Suchmaschinen und Plattformen</b>

<table id="Suchmaschinen">
  <tr>
    <th>Suchmaschinen</th>
  </tr>
  <tr>
    <td><h4>duckduckgo</h4><br>Duckduckgo ist eine Suchmaschine und stellt eine Alternative zu google dar. Geben Sie Ihren Suchbegriff ein und starten Sie die Suche. Lediglich bei Videos kann der Suchfilter Creative Commons angewendet werden.
  <figure style="align:middle;">
  <img src="images/duckduckgo_OER Suche.svg" alt="Abb. 13: Screenshot der duckduckgo Suchumgebung" title="Abb. 13: Screenshot der duckduckgo Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 13: Screenshot der duckduckgo Suchumgebung</figcaption>
  </figure>
  </td>
  </tr>
  <tr>
    <td><h4>Google</h4><br>Geben Sie Ihren Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend unter "Einstellungen", die "erweiterte Suche" aus (s. Abb. 14). Es öffnet sich ein neues Fenster. Hier können Sie die Ergebnisse Ihrer Suche im Bereich "Nutzungsrechte" entlang der von Ihnen gewünschten Lizenzierung eingrenzen (s. Abb. 15).<br>
  <figure style="align:middle;">
  <img src="google_oer_suche1.svg" alt="Abb. 14: Screenshot der google Suchumgebung" title="Abb. 14: Screenshot der google Suchumgebung"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 14: Screenshot der Google Suchumgebung</figcaption>
  </figure>
  <figure style="align:middle;">
  <img src="google_oer_suche2.svg" alt="Abb. 15.: Screenshot der Google-Suchfilter" title="Abb. 15.: Screenshot der Google-Suchfilter"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 15.: Screenshot der Google-Suchfilter</figcaption>
  </figure>
  </td>
  </tr>
  <tr>
    <th>Videoportale</th>
  </tr>
  <tr>
    <td><h4>AV-Portal</h4><br>Im AV-Portal der Technischen Informationsibliothek (TIB) Hannover finden Sie eine Vielzahl wissenschaftlicher Filme. Zu allen Fachbereichen sind sowohl Vorträge, als auch Erklär- und Lernvideos vertreten. Es besteht auch die Möglichkeit, eigene wissenschaftliche Filme über das Portal zu veröffentlichen. Die zielgerichtete Suche nach OER- Materialien im AV- Portal erfolgt zunächst über die Eingabe des Begriffes in der Suchleiste (z.B. Begriff Paternalismus).<br>
    In einem weiteren Schritt können die Ergebnistreffer durch verschiedene Filteroptionen im linken Seitenmenü eingegrenzt werden. Für die Suche nach OER Materialien, muss im Bereich "Wiederverwendung" der Filter "Open-Access" aktiviert werden.<br>
  Angaben dazu, um welche Lizenz es sich konkret bei einem Video handelt, finden Sie nach einer Anwahl des gewünschten Videos in den Metadaten.
  </td>
  </tr>
  <tr>
    <td><h4>Vimeo</h4><br>Die zielgerichtete Suche nach OER-Materialien auf der Videoplattform Vimeo erfolgt zunächst über die Eingabe des Begriffes in der Suchleiste (z.B. Begriff Systemtheor*). In einem weiteren Schritt können die Ergebnistreffer durch verschiedene Filteroptionenim linken Seitenmenü eingegrenzt werden.<br>
  Für die Suche nach OER Materialien klicken Sie auf "mehr", um weitere Filteroptionen anwählen zu können. Dort finden Sie den Filter "Lizenz" mit verschiedenen Lizenzoptionen.
Bereits durch die ausgegraute Lizenzen wird sichtbar, dass keine Videoressource zu dem Suchbegriff vorhanden ist, die unter CC BY lizenziert ist.<br>
  Um die Lizenzangaben eines ausgewählten Videos zu überpüfen, klicken Sie unterhalb der Videoanzeige auf den Button "mehr".
  </td>
  </tr>
  <tr>
    <td><h4>Youtube</h4><br>Geben Sie den Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend die Option "Filter" und schränken Sie die Ergebnisse im Bereich "Eigenschaften" durch die Wahl der Option "Creative Commons" ein.
  </td>
  </tr>
</table>
