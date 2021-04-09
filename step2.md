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

<ul style="list-style-type:none">
  <li><i class="fa fa-check-circle" style="color:green"></i> Verwendung von Schlagworten: Denken Sie auch an die Suchtechnik des <b>Trunkierens</b>; eher wenige Stichwörter, dafür aber Wortteile statt ganzer Wörter (Beispiel: Systemtheorie → system*theor*, Paternalismus → paternal*)</li>
  <li><i class="fa fa-check-circle" style="color:green"></i> Nutzung von <b>Suchoperatoren</b>, die aus Datenbanken und dem Bibliothekswesen bekannt sind: UND/AND/+; oder NICHT/NOT/- sowie ODER/OR</li>
  <li><i class="fa fa-check-circle" style="color:green"></i> Verwendung der <b>CC-Filter</b> in Suchmaschinen oder Portalen</li>
  <li><i class="fa fa-check-circle" style="color:green"></i> Eingabe des Suchbegriffs + <b>Creative Commons</b> oder speziell der <b>Lizenz</b> (CC 0, CC BY etc.)</li>
  <li><i class="fa fa-check-circle" style="color:green"></i> Nutzung von <b>englischen</b> Begriffen</li>
  <li><i class="fa fa-check-circle" style="color:green"></i> Verwendung <b>spezifischer Filteroptionen</b> in OER-Repositorien; z.B. die erweiterte Suche (Materialart, Fach- und Sachgebiet, etc.)</li>


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

<div >
   <button class="accordion">Suchmaschinen</button>
   <div class="panel">
     <h4>duckduckgo</h4><br>Duckduckgo ist eine Suchmaschine und stellt eine Alternative zu google dar. Geben Sie Ihren Suchbegriff ein und starten Sie die Suche. Lediglich bei Videos kann der Suchfilter Creative Commons angewendet werden.
   <figure style="align:middle;">
     <img src="images/duckduckgo_OER Suche.svg" alt="Abb. 13: Screenshot der duckduckgo Suchumgebung" title="Abb. 13: Screenshot der duckduckgo Suchumgebung"/>
     <figcaption style="text-align:center;font-size:14px;">Abb. 13: Screenshot der duckduckgo Suchumgebung</figcaption>
   </figure>
  <br>
  <h4>Google</h4><br>Geben Sie Ihren Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend unter "Einstellungen", die "erweiterte Suche" aus (s. Abb. 14). Es öffnet sich ein neues Fenster. Hier können Sie die Ergebnisse Ihrer Suche im Bereich "Nutzungsrechte" entlang der von Ihnen gewünschten Lizenzierung eingrenzen (s. Abb. 15).<br>
    <figure style="align:middle;">
      <img src="images/google_oer_suche1.svg" alt="Abb. 14: Screenshot der google Suchumgebung" title="Abb. 14: Screenshot der google Suchumgebung"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 14: Screenshot der Google Suchumgebung</figcaption>
    </figure>
   <figure style="align:middle;">
      <img src="images/google_oer_suche2.svg" alt="Abb. 15.: Screenshot der Google-Suchfilter" title="Abb. 15.: Screenshot der Google-Suchfilter"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 15.: Screenshot der Google-Suchfilter</figcaption>
    </figure>
  </div>
  <button class="accordion">Videoportale</button>
   <div class="panel">
   <h4>AV-Portal</h4><br>Im AV-Portal der Technischen Informationsibliothek (TIB) Hannover finden Sie eine Vielzahl wissenschaftlicher Filme. Zu allen Fachbereichen sind sowohl Vorträge, als auch Erklär- und Lernvideos vertreten. Es besteht auch die Möglichkeit, eigene wissenschaftliche Filme über das Portal zu veröffentlichen. Die zielgerichtete Suche nach OER- Materialien im AV- Portal erfolgt zunächst über die Eingabe des Begriffes in der Suchleiste (z.B. Begriff Paternalismus).
    <figure style="align:middle;">
      <img src="images/AV_Portal_OER_Suche_screenshot1.svg" alt="Abb. 16: Screenshot der AV-Portal Suchumgebung" title="Abb. 16: Screenshot der AV-Portal Suchumgebung"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 16: Screenshot der AV-Portal Suchumgebung</figcaption>
    </figure>
    In einem weiteren Schritt können die Ergebnistreffer durch verschiedene Filteroptionen im linken Seitenmenü eingegrenzt werden. Für die Suche nach OER Materialien, muss im Bereich "Wiederverwendung" der Filter "Open-Access" aktiviert werden.
    <figure style="align:middle;">
      <img src="images/AV_Portal_OER_Suche_screenshot2.svg" alt="Abb. 17: Screenshot der AV-Portal Filteroptionen" title="Abb. 17: Screenshot der AV-Portal Filteroptionen"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 17: Screenshot der AV-Portal Filteroptionen</figcaption>
    </figure>
    Angaben dazu, um welche Lizenz es sich konkret bei einem Video handelt, finden Sie nach einer Anwahl des gewünschten Videos in den Metadaten.
    <figure style="align:middle;">
      <img src="images/AV_Portal_OER_Suche_screenshot3.svg" alt="Abb. 18: Screenshot der AV-Portal Lizenzangaben" title="Abb. 18: Screenshot der AV-Portal Lizenzangaben"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 18: Screenshot der AV-Portal Lizenzangaben</figcaption>
    </figure>
    <br>
    <h4>Vimeo</h4><br>Die zielgerichtete Suche nach OER-Materialien auf der Videoplattform Vimeo erfolgt zunächst über die Eingabe des Begriffes in der Suchleiste (z.B. Begriff Systemtheor*). In einem weiteren Schritt können die Ergebnistreffer durch verschiedene Filteroptionenim linken Seitenmenü eingegrenzt werden.
    <figure style="align:middle;">
      <img src="images/vimeo_oer_suche_screenshot1.svg" alt="Abb. 19: Screenshot der Vimeo Suchumgebung" title="Abb. 19: Screenshot der Vimeo Suchumgebung"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 19: Screenshot der Vimeo Suchumgebung</figcaption>
    </figure>
  Für die Suche nach OER Materialien klicken Sie auf "mehr", um weitere Filteroptionen anwählen zu können. Dort finden Sie den Filter "Lizenz" mit verschiedenen Lizenzoptionen.
Bereits durch die ausgegraute Lizenzen wird sichtbar, dass keine Videoressource zu dem Suchbegriff vorhanden ist, die unter CC BY lizenziert ist.
    <figure style="align:middle;">
      <img src="images/vimeo_oer_suche_screenshot2.svg" alt="Abb. 20: Screenshot der Vimeo Lizenz-Filteroptionen" title="Abb. 20: Screenshot der Vimeo Lizenz-Filteroptionen"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 20: Screenshot der Vimeo Lizenz-Filteroptionen</figcaption>
    </figure>
  Um die Lizenzangaben eines ausgewählten Videos zu überpüfen, klicken Sie unterhalb der Videoanzeige auf den Button "mehr".
    <figure style="align:middle;">
      <img src="images/vimeo_oer_suche_screenshot3.svg" alt="Abb. 21: Screenshot der Vimeo Lizenz-Information" title="Abb. 21: Screenshot der Vimeo Lizenz-Information"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 21: Screenshot der Vimeo Lizenz-Information</figcaption>
    </figure>
  <h4>Youtube</h4><br>Geben Sie den Suchbegriff ein und starten Sie die Suche. Wählen Sie anschließend die Option "Filter" und schränken Sie die Ergebnisse im Bereich "Eigenschaften" durch die Wahl der Option "Creative Commons" ein.
    <figure style="align:middle;">
      <img src="images/youtube_oer_suche.svg" alt="Abb. 22: Screenshot der YouTube Suchumgebung" title="Abb. 22: Screenshot der YouTube Suchumgebung"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 22: Screenshot der YouTube Suchumgebung</figcaption>
    </figure>
    <figure style="align:middle;">
      <img src="images/youtube_oer_suche2.svg" alt="Abb. 23: Screenshot der Youtube Lizenz-Filteroptionen" title="Abb. 23: Screenshot der Youtube Lizenz-Filteroptionen"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 23: Screenshot der Youtube Lizenz-Filteroptionen</figcaption>
    </figure>
  </div>
  <button class="accordion">Bilderportale</button>
   <div class="panel">
   <h4>AV-Pixabay</h4><br>
      Pixabay ist eine bekannte Bilder-Plattform mit frei verfügbaren Bildern und Videos. Sofern nicht anders angegeben stehen alle Bilder unter der plattformeigenen <b>Pixabay Lizenz</b>. Diese Lizenz steht in keiner Verbindung mit dem CC-Lizenzsystem. Möchten Sie Pixabay Bilder verwenden, lesen Sie bitte genau nach, ob die von Ihnen geplante Nutzung erlaubt ist. 
  <table id="warning">
    <tr>
      <th><i class="fa fa-exclamation-triangle" style="color:black"></i> <b>Wichtig!</b></th>
    </tr>
    <tr>
      <td>
        Eine Weiterlizenzierung von Pixabay Inhalten ist aufgrund der Pixabay Lizenz problematisch. Wird ein Pixabay Inhalt in ein OER eingebunden, muss der Pixabay Inhalt als Fremdmaterial (mit Pixabay Lizenz) kenntlich gemacht werden. Mehr dazu erfahren Sie unten im Bereich Korrekte Verwendung von OER.<br>
        Nutzen Sie die Pixabay Suche, werden in einer Leiste oberhalb der Ergebnisse Bilder von iStock angezeigt. Diese sind kostenpflichtig und fallen nicht unter offene Ressourcen.
      </td>
    </tr>
  </table>
     <figure style="align:middle;">
      <img src="images/pixabay_suche_pixabay_license.svg" alt="Abb. 24: Screenshot der Pixabay Suchumgebung" title="Abb. 24: Screenshot der Pixabay Suchumgebung"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 24: Screenshot der Pixabay Suchumgebung</figcaption>
     </figure>
   <h4>Flickr</h4><br>
      Bei Flickr handelt es sich um ein Bilderportal, auf dem mitunter auch offen lizenzierte Bildmaterialien zur Verfügung gestellt werden. Nachdem Sie Ihren Suchbegriff eingegeben und Ihre Suche gestartet haben, können Sie den Filter "Beliebige Lizenz" nutzen, um CC-lizenzierte Bilder zu finden.
     <a aria-describedby="Link zum Flickr Portal" href="https://www.flickr.com/" target="_blank">https://www.flickr.com/</a>
     <figure style="align:middle;">
      <img src="images/flickr_OER_suche.svg" alt="Abb. 25: Screenshot der Flickr Lizenz-Filteroptionen" title="Abb. 25: Screenshot der Flickr Lizenz-Filteroptionen"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 25: Screenshot der Flickr Lizenz-Filteroptionen</figcaption>
     </figure>
  </div>
</div>


<table id="warning">
  <tr>
    <th><i class="fa fa-exclamation-triangle" style="color:black"></i> <b>Wichtig!</b></th>
  </tr>
  <tr>
    <td>
      Unabhängig davon, ob Sie ein OER-Referatorium/-Repositorium oder eine allgemeine Plattform/Suchmaschine nutzen, um Material für Ihre Lehre zu finden, überprüfen Sie in jedem Fall ob die Lizenz des Materials die von Ihnen geplante Nutzung wirklich erlaubt.
    </td>
  </tr>
</table>

## Korrekte Verwendung von OER

Haben Sie interessante CC-lizenzierte Materialien gefunden, stellt sich die Frage, was Sie bei der Nachnutzung dieser beachten müssen. Der erste Blick sollte hier auf die Lizenz des Materials gerichtet werden.

<b>Prüfen Sie gründlich, ob die Lizenz die von Ihnen geplante Nutzung des Materials erlaubt.</b> Folgender Lizenzcheck (s. Abb. 14) soll Ihnen einfach und schnell helfen. Gehen Sie das Diagramm anhand der Leitfragen  durch. Finden Sie die Lizenz des Materials, das Sie gern nutzen möchten, in der Liste am Ende des Diagramms, steht Ihrer Planung nichts im Wege.

<figure style="align:middle;">
  <img src="images/Lizenzcheck.svg" alt="Abb. 26: Lizenzcheck für die Nachnutzung fremder OER" title="Abb. 26: Lizenzcheck für die Nachnutzung fremder OER"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 26: Lizenzcheck für die Nachnutzung fremder OER</figcaption>
</figure>

<b>Bei der Einbindung von CC-lizenzierten Materialien in Ihre eigenen Werke, müssen Sie kenntlich machen, dass es sich um fremde Inhalte handelt.</b> Analog zur klassischen Zitation im wissenschaftlichen Arbeiten gibt es bei der Nachnutzung von OER bestimmte Vorgaben. In der sogenannten "TULLU-Regel" werden diese für Sie zusammengefasst.  Das folgende Video erklärt Ihnen die Regel in aller Kürze:

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/watch?v=aBM9zpuRh1I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen name="Wie nutzt man OER"></iframe>
  <figcaption style="text-align:center;font-size:14px;">Video 2: <a aria-describedby="Link zum Video (YouTube)" href="https://www.youtube.com/watch?v=aBM9zpuRh1I">Wie nutzt man OER</a> von OERinForm, lizenziert unter <a aria-describedby="Link zur Seite (Creative Commons)" href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">CC BY SA (4.0)</a></figcaption>
</figure>

Die Grundlagen zum Nachlesen:

<table id="invisible">
  <tr>
    <td valign="middle" text-align="middle" width="15%">
      T
    </td>
    <td valign="middle" text-align="left" width="85%">
      Geben Sie den TITEL des Werks an, sofern dieser angegeben ist. 
      <i class="fa fa-info-circle" style="color:black"></i> In der Version 4.0 der CC-Lizenzen ist der Titel eine optionale (jedoch empfohlene) Angabe.
    </td>
  </tr>
  <tr>
    <td valign="middle" text-align="middle" width="15%">
      U
    </td>
    <td valign="middle" text-align="left" width="85%">
      Nennen Sie den/die <b>URHEBER*IN(NEN)</b>/Rechteinhaber*in(nen). Auch Gruppen, Organisationen oder Institutionen können hier genannt werden. Orientieren Sie sich bei der Angabe daran, wie der*die Urheber*in(nen) in dem Material bezeichnet ist/sind.
    </td>
  </tr>
  <tr>
    <td valign="middle" text-align="middle" width="15%">
      U
    </td>
    <td valign="middle" text-align="left" width="85%">
      Nennen Sie den/die <b>URHEBER*IN(NEN)</b>/Rechteinhaber*in(nen). Auch Gruppen, Organisationen oder Institutionen können hier genannt werden. Orientieren Sie sich bei der Angabe daran, wie der*die Urheber*in(nen) in dem Material bezeichnet ist/sind.
    </td>
  </tr>
</table>
