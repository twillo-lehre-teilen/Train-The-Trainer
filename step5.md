<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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

<h1 style="color:#ff8c00">Schritt 5: OER teilen</h1>

<div class="infobox">
  <p><i class="fa fa-info-circle" style="color:blue"></i>  <b>Info!</b>
    <br><br>
    Im fünften Schritt wird Ihnen der Workflow des OER-Portals <b>twillo</b> nähergebracht. Zudem wird Ihnen gezeigt, wie die Strukturen des Portals Sie bei der Beschreibung und Kontextualisierung Ihres Materials unterstützen können. Ziel der Einheit ist es, dass Sie einen Überblick über das Portal gewinnen und sämtliche Funktionen von twillo kennenlernen.
    <br>
    <br>
    <b>Workload: 1-2 Stunden</b>
  </p>
</div>

<h2 style="color:#ff8c00">Portal twillo - digitale Infrastruktur für OER</h2>

Um die Etablierung von OER in der Hochschullehre zu stärken, wurde im Rahmen des Verbundprojektes <a aria-describedby="Infos zum Twillo Portal" href="https://projects.tib.eu/oernds/projekt/" target="_blank">"OER-Portal Niedersachsen"</a> (gefördert durch das Nds. Ministerium für Wissenschaft und Kultur) das Online-Portal <a aria-describedby="Zum Twillo Portal" href="http://www.oernds.de/" target="_blank">twillo</a> entwickelt. Twillo bietet Lehrenden eine Infrastruktur für den Austausch von freien Bildungsmaterialien und umfasst darüber hinaus vielfältige Angebote, um Lehrende bei der eigenen Erstellung und Zusammenstellung hochwertiger Lehr- und Lernmaterialien zu unterstützen. Auf diese Weise sollen Kompetenzen für den Umgang mit OER weiterentwickelt und Unsicherheiten abgebaut werden.
<br>
Folgende Funktionen des Portals sind hervorzuheben:

<ul style="list-style-type:none">
      <li><i class="fa fa-check-circle" style="color:green"></i> <b>Individueller Workspace:</b> Langfristige Ablage von Materialien (z.B. über Stellenwechsel hinaus)</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> <b>Upload und Verlinkung:</b> Bereitstellung von OER direkt im Portal oder über die Originalseite</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> <b>Serien- und Sammlungsfunktion:</b> Zusammenstellung unterschiedlicher OER zu bestimmten Themenbereichen und/oder für spezifische Lehr-Lernkontexte</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> <b>Suchfunktion:</b> Vereinfachte Auffindbarkeit von Materialien</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> <b>Metadaten:</b> Vorkonfigurierte Felder (inkl. Erklärungen) zur Lizenzierung und Beschreibung von OER</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> <b>Support:</b> Beratung in technischen, rechtlichen und didaktischen Fragen rund um OER und twillo</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> <b>Vernetzung:</b> Kollaborationsstrukturen für die Zusammenarbeit mit Kolleg*innen der gleichen oder einer anderen Institution</li>
</ul>

Der Workflow auf twillo umfasst vier Schritte:

<div>
   <button class="accordion">1. Registrierung/Login</button>
   <div class="panel">
     <p>Rufen Sie den Link <a aria-describedby="Link zur Seite des deutschen Forschungsnetzes" href="https://www.twillo.de/" target="_blank">www.twillo.de</a> auf und wählen Sie über den Reiter <b>Zum Portal</b> im Kopfmenü auf den Bereich <b>Einloggen</b> aus. Alternativ klicken Sie hier, um direkt auf die Anmeldemaske von twillo zu gelangen.
     <br><br>
Angehörigen von Hochschulen, die <a aria-describedby="Zum Twillo Portal" href="https://www.dfn.de/dienstleistungen/dfnaai/" target="_blank">DFN-AAI</a> nutzen, ist ein direkter Einstieg in das OER-Portal möglich. Klicken Sie unterhalb der Anmeldemaske auf die Option <b>Zur Hochschulauswahl</b>. Wählen Sie in der folgenden Liste Ihre Einrichtung/Institution aus und geben Sie in der Ihnen vertrauten Anmeldungsmaske die Kennung Ihres Hochschulaccounts ein.
     <br><br>
Das folgende Abbildung veranschaulicht den Prozess der Anmeldung per DFN:

   <figure>
      <img src="images/twillo-Login-per-DFN.svg" alt="Abb. XXX: Twillo-Zugang über DFN" title="Abb. XXX: Twillo-Zugang über DFN"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. <font style="color:red">XXX</font>: Twillo-Zugang über DFN</figcaption>
   </figure>

<br><br>

  <div class="warningbox">
    <p><i class="fa fa-exclamation-triangle" style="color:black"></i> <b>Wichtig!</b>
     <br><br>
      Sollte Ihnen die Anmeldung über die Hochschschulauswahl nicht möglich sein, können Sie sich auch manuell einen Account einrichten lassen. Senden Sie hierfür eine formlose Nachricht mit Ihrem vollständigen Namen, Ihrer E-Mailadresse, Ihrem beruflichen Funktionskontext und Ihrer Institution an <a href= "support.twillo@tib.eu">support.twillo@tib.eu</a>. Sie erhalten anschließend zeitnah eine Mail mit Ihren Zugangsdaten.
    </p>
  </div>

   Nach der ersten Anmeldung im Portal werden Sie in Ihrem <b>Workspace</b> weitergeleitet. Dieser ist als Ordnerstruktur angelegt und bietet Ihnen die Möglichkeit, Ihre eigenen OER zu organisieren. Der Workspace ist Ihr persönlicher Bereich, andere Nutzer*innen haben keinen Zugriff.
   <br><br>
   Um von Ihrem Workspace in die Suchumgebung oder den Bereich Sammlungen zu wechseln, öffnen Sie die <b>Bereichsauswahl</b> indem Sie auf den Reiter <b>Workspace</b> oben links klicken.
  </div>
  <button class="accordion">2. Upload/Verlinkung</button>
  <div class="panel">
     <p>Um Material auf twillo bereitzustellen, wählen Sie in Ihrem Workspace die Schaltfläche <b>+NEU</b> aus. Klicken Sie auf <b>Neues Material</b> und laden Sie Ihr Material per Drag and Drop hoch oder verlinken Sie es durch die Eingabe einer URL. Verlinkungen sind nur dann möglich, wenn das Material bereits auf anderen Plattformen (z.B. YouTube, AV-Portal, SlideWiki, GitHub/GitLab etc.) veröffentlicht ist.

Sobald Sie den Vorgang mit <b>OK</b> bestätigt haben, befindet sich das Material in Ihrem <b>Workspace</b>. Zunächst ist es nur für Sie allein sichtbar. Eine Freigabe für andere Nutzer*innen oder die Öffentlichkeit muss gesondert erfolgen (vgl. Punkt 4 - Freigabe).</p>
  </div>
</div>

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
</div>
