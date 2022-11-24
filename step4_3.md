<h2>LiaScript Workflow mit LiaEdit</h2>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

---

<b>TODO</b>

- FAQ:
  - wieso LiaEdit gut, wieso schlecht
  - für wen empfehlenswert, für wen nicht
  - was gitbs zu beachten
- GitGist
  - was ist das/unterschied zu normalem git (zweckentfremdet)
- später weiterarbeiten?
  - einmal note gelöscht nicht weiterbearbeitbar -> man müsste neue note+gist erstellen
- Medien einbetten (only online)?
  - nur online medien
  - für lokale bräuchte man wieder ein richtiges github repo oder anderen ablageort im internet
  
---

<div>
  <button class="accordion">1. Getting Started: Installation</button>
  <div class="panel">
    <p>
      Der <b>LiaScript LiveEditor</b>, der auch <b>LiaEdit</b> genannt wird, ist ein kostenloser webbasierter und kollaborativer online Editor von LiaScript. Mit diesem Editor ist es möglich LiaScript Kurse <i>(Markdown-Dateien)</i> direkt im Browser zu erstellen und zu veröffentlichen, ohne etwas herunterladen und installieren zu müssen. Einzig allein ein eigener GitHub Account wird benötigt, um die Kurse später zu veröffentlichen. Genaueres gibt es dazu noch später.
      <br><br>
  	  Dadurch, dass LiaEdit im jedem beliebigen Browser benutzt werden kann, brauchen wir auch nichts zu installieren. Wir müssen lediglich die Website des Editors aufrufen um loszulegen. Den LiaScript LiveEditor "LiaEdit" finden Sie unter folgendem Link: <a href="https://liascript.github.io/LiveEditor/="" target="_blank">https://liascript.github.io/LiveEditor/</a>.
    </p>
  </div>
  <button class="accordion">2. Lernmodul (Kursdokument) anlegen</button>
  <div class="panel">
    <p>
      Wenn Sie dem obigen Link aus <i>Schritt 1</i> zum Editor gefolgt sind, dann sollte Ihr Browserfenster nun in etwa so aussehen:
      <figure style="align:middle;">
        <a href="images/le_home.svg" target="_blank"><img src="images/le_home.svg" alt="Abbildung: Screenshot LiaEdit Startseite" title="Abbildung: Screenshot LiaEdit Startseite"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit Startseite</figcaption>
      </figure>
      <br>
      Um ein neues Kursdokument anzulegen, benötigt es nicht viel. Mit nur einem einzigen Klick auf den Button "<b>New note</b>", welcher oben rechts zu finden ist, lässt sich eine neue Markdown Datei erstellen. Betätigt man den Button, so wird man direkt weitergeleitet zur Editor-Ansicht, in der die neu erstellte Markdown Datei geöffnet ist.
      <figure style="align:middle;">
        <a href="images/le_node.svg" target="_blank"><img src="images/le_node.svg" alt="Abbildung: Screenshot LiaEdit Editor" title="Abbildung: Screenshot LiaEdit Editor"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit Editor</figcaption>
      </figure>
      <br>
      In der Editor-Ansicht sehen Sie auf der linken Seite den eigentlichen Editor und auf der rechten Seite die automatisch davon erzeugte LiaScript Vorschau. Diese Ansicht kann mithilfe der drei Buttons oben links nach eigenen vorlieben angepasst werden. Die drei Optionen (von links nach rechts) sind: 
      <ul>
        <li>Nur der Editor</li>
        <li>Kombination aus Editor und Vorschau (s.o.)</li>
        <li>Nur die LiaScript Vorschau</li>
      </ul>
    </p>
  </div>
  <button class="accordion">3. Kurs strukturieren, Inhalte einfügen</button>
  <div class="panel">
    <p>
      Ist Ihr Lernmodul/Kursdokument angelegt, können Sie beginnen, Inhalte und Materialien einzufügen. Hierfür müssen Sie auf <b>Markdown</b> zurückgreifen. Sie haben noch keine Erfahrungen mit der Auszeichungssprache gesammelt? Keine Sorge! "Auszeichnungssprache" klingt schlimmer als es ist, Sie müssen hier <b>keine</b> Programmiersprache o.Ä. erlernen. Im folgenden führen wir Sie durch die Gestaltung Ihres Kurses mit Markdown - Sie werden sehen, es ist nicht schwer.
      <br><br>
      <h6>Anlegen von Kapiteln:</h6>
      Zur Strukturierung Ihres Kurses in Kapitel und Unterkapitel legen Sie Überschriften und Unterüberschriften an. In Markdown wird eine Hauptüberschrift mit einem Hashtag, eine Überschrift zweiter Ordnung mit zwei Hashtags usw. gekennzeichnet. Hier ein kleines Beispiel, wie man Überschriften hinzufügt:
      <br>
      <figure style="align:middle;">
        <a href="images/le_download.svg" target="_blank"><img src="images/le_download.svg" alt="Abbildung: Screenshot LiaEdit Download Markdown-Datei" title="Abbildung: Screenshot LiaEdit Download Markdown-Datei"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit Download Markdown-Datei</figcaption>
      </figure>
      <br>
      <br>
      <h6>Hinzufügen und Formatieren von Texten:</h6>
      Schreiben Sie Texte und Anweisungen einfach direkt unter die Überschrift, unter der Sie sie platzieren möchten. Die Formatierung von Texten können Sie durch Markdown-Syntax im Prinzip des Copy und Paste vornehmen. LiaScript sorgt automatisch für ein ansprechendes Layout. Speichern Sie Ihre Eingabe, so können Sie das Aussehen Ihrer Eingabe in der LiaScript Vorschau überprüfen.
      <br><br>
      Hier ein paar einfache Beispiele zur Formatierung von Texten:
      <ul style="list-style-type:disc">
        <li>Sie möchten ein Wort fett setzen? Zeichnen Sie es wie folgt aus **Beispiel** oder __Beispiel__</li>
        <li>Sie möchten ein Wort kursiv setzen? Zeichnen Sie es wie folgt aus: *Beispiel* oder _Beispiel_</li>
        <li>Sie möchten einen Link einfügen? Zeichnen Sie Ihn wie folgt aus: [Linktext](Link)</li>
        <li>Sie möchten eine Liste einfügen? Zeichnen Sie die Aufzählung wie folgt aus:</li>
      </ul>    
      <figure style="align:middle;">
        <a href="images/le_liste.svg" target="_blank"><img src="images/le_liste.svg" alt="Abbildung: Screenshot Anlegen einer Liste in Markdown" title="Abbildung: Screenshot Anlegen einer Liste in Markdown"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot Anlegen einer Liste in Markdown</figcaption>
      </figure>
      <div class="infobox">
        <p>
          <i class="fa fa-lightbulb-o fa-lg"></i> <b>Hinweis:</b> Einen Überblick über die wichtigste Markdown-Syntax zum Kopieren und Einfügen finden Sie hier:
          <ul style="list-style-type:disc">
            <li><a aria-describedby="Link zum Markdown Cheat Sheet" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatcheat</a> von Adam Pritchard, lizenziert unter <a aria-describedby="Link zur Quelle" href="https://creativecommons.org/licenses/by/3.0/legalcode">CC BY (3.0, unported)</a></li>
            <li><a aria-describedby="Link zum Markdown Guide" href="https://www.markdownguide.org/">Markdown Guide</a> von Matt Cone, lizenziert unter <a aria-describedby="Link zur Quelle" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></li>
          </ul>
        </p>
      </div>
      <br>
      <h6>Hinzufügen weiterer Elemente:</h6>
      LiaScript ist insbesondere dafür geeignet, interaktive Lernobjekte in Ihren Kursstruktur zu integrieren. <b>Kopieren Sie die Syntax, die Sie dafür benötigen aus dem digitalen <a aria-describedby="Link zu LiaScript Handbuch" href="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#1">LiaScript Handbuch</a> von André Dietrich, Sebastian Zug, Karl Fessel und Steve Rehm</b>. Das Handbuch ist explizit dafür vorgesehen, Ihnen bei der Integration von Elementen in LiaScript zu helfen.
      <br><br>
      Hier ein Beispiel, in dem eine Quizfrage (mit Hinweisen + Erklärung) nach Vorgabe des Handbuchs erstellt werden kann.
      <figure style="align:middle;">
        <a href="images/le_quiz.svg" target="_blank"><img src="images/le_quiz.svg" alt="Abbildung: Screenshot Erstellung eines Quiz mit LiaScript" title="Abbildung: Screenshot Erstellung eines Quiz mit LiaScript"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot Erstellung eines Quiz mit LiaScript</figcaption>
      </figure>
      <figure style="align:middle;">
        <a href="images/le_quiz_solution.svg" target="_blank"><img src="images/le_quiz_solution.svg" alt="Abbildung: Screenshot Erstellung eines Quiz mit LiaScript mit Lösungserklärung" title="Abbildung: Screenshot Erstellung eines Quiz mit LiaScript mit Lösungserklärung"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot Erstellung eines Quiz mit LiaScript mit Lösungserklärung</figcaption>
      </figure>
      <div class="infobox">
        <p>
          <i class="fa fa-lightbulb-o fa-lg"></i> <b>Hinweis:</b> Neben interaktiven Lernobjekten wie Quizfragen bietet LiaScript noch viele weitere Features an, um Ihren Kurs individuell zu gestalten. In dem sich ständig erweiternden <a aria-describedby="Link zu LiaScript Handbuch" href="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#1">LiaScript Handbuch</a> finden Sie alle zur Verfügung stehenden Features mit Erklärungen, wie Sie diese in Ihren Kurs integrieren können.
        </p>
      </div>
    </p>
  </div>
  <button class="accordion">4. Kurs online ablegen und veröffentlichen</button>
  <div class="panel">
    <p>
      Damit aus Ihrem Dokument ein LiaScript Kurs generiert, veröffentlicht und geteilt werden kann, muss das Kursdokument <i>(Markdown-datei)</i> irgendwo <b>öffentlich</b> im Internet abgelegt sein. Dies kann auf vielen verschiedenen Plattformen passieren. Der LiaScript LiveEditor benutzt zum Veröffentlichen der Liascript Kurse die Plattform <b>GitHub</b>. Das heißt, um alle Funktionen von LiaEdit vollständig nutzen zu können benötigt man einen <b>kostenfreien</b> GitHub Account. Falls Sie den Editor nur zum erstellen der Markdown-Datei nutzen möchten und Ihren Kurs woanders veröffentlichen wollen, dann brauchen Sie sich auch keinen GitHub Account erstellen. Mehr dazu weiter unten in der Infobox. 
      <br>
      <h6>GitHub Anmeldung</h6>
      Besuchen Sie für die Anmeldung die Seite <a href="www.github.com" target="_blank">www.github.com</a> und klicken Sie oben rechts auf <b>Sign Up</b>.
      <br><br>
      In dem folgenden Fenster tragen Sie einen <b>Usernamen</b>, ihre <b>E-Mail</b> und ein <b>Passwort</b> ein. Mit einem Klick auf den Button <b>Create Account</b> erstellen Sie sich Ihren eigenen Account.
      <br><br>
      Zum Abschluss müssen Sie nun lediglich noch Ihre E-Mail-Adresse <b>verifizieren</b>. Dafür erhalten Sie eine E-Mail von GitHub mit dem Betreff <b>[GitHub] Please verify your email address</b>. Dort klicken Sie auf den Button <b>Verify email address</b>. Nun werden Sie auf eine Seite geführt, die die Verifizierung Ihres Accounts bestätigt.
      <figure style="align:middle;">
        <a href="images/github_acc_1.svg" target="_blank"><img src="images/github_acc_1.svg" alt="Abbildung: Screenshot GitHub Verified Email Address" title="Abbildung: Screenshot GitHub Verified Email Address"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot GitHub Verified Email Address</figcaption>
      </figure>
      <br>    
      Haben Sie sich einen GitHub Account erstellt, so können wir mit öffentlichen Ablegen des Kurses weitermachen. Der LiaScript LiveEditor verwendet zum Ablegen und Veröffentlichen die GitHub Funktion <b>GitHub Gist</b>.
      <br><br>
      <div class="infobox">
        <p>
          <i class="fa fa-lightbulb-o fa-lg"></i> <b>GitHub Gist</b> ist eine Subdomäne von GitHub auf der <b>Gists</b> erstellt werden können. Mit Gists können schnell und einfach kleine Code Schnipsel oder Texte online gespeichert werden, welche alleine kein umfassendes Repository rechtfertigen. Sie sind eine hervorragende, leichtgewichtige Option, wenn Sie nur schnell etwas Code oder Text austauschen wollen. Die Besonderheit an GitHub Gist ist die, dass du zusätzlich die für GitHub typische Git Versionsverwaltung hast.
        </p>
      </div>
      <br>
      Um den eigenen Kurs nun bei GitHub Gist öffentlich abzulegen wählen Sie zunächst oben rechts das <b>Menü</b> aus und anschließend in dem sich öffnenden Reiter die Option <b>Export to... GitHub Gists</b>. 
      <figure style="align:middle;">
        <a href="images/le_gh_gist.svg" target="_blank"><img src="images/le_gh_gist.svg" alt="Abbildung: Screenshot LiaEdit GitHub Gist" title="Abbildung: Screenshot LiaEdit GitHub Gist"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit GitHub Gist</figcaption>
      </figure>
      <br>
      Daraufhin öffnet sich automatisch ein neuer Browsertab der Sie zu Ihrem gerade neu erstellten Gist führt in dem sich Ihr Kursdokument befindet. Falls Sie diesen Schritt zum ersten mal mit LiaEdit ausführen, erwartet Sie noch ein kleiner Zwischenschritt. Und zwar werden Sie dann zunächst einmal noch von GitHub aufgefordert den Zugriff vom LiaScript LiveEditor zu authorisieren.
      <figure style="align:middle;">
        <a href="images/le_gh_auth.svg" target="_blank"><img src="images/le_gh_auth.svg" alt="Abbildung: Screenshot LiaEdit GitHub Gist authorization" title="Abbildung: Screenshot LiaEdit GitHub Gist authorization"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit GitHub Gist authorization</figcaption>
      </figure>
      <figure style="align:middle;">
        <a href="images/le_gh_gist2.svg" target="_blank"><img src="images/le_gh_gist2.svg" alt="Abbildung: Screenshot GitHub Gist " title="Abbildung: Screenshot  GitHub Gist "/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot  GitHub Gist </figcaption>
      </figure>
      <br>
      <div class="infobox">
        <p>
          <i class="fa fa-lightbulb-o fa-lg"></i> <b>Hinweis:</b> Falls Sie GitHub nicht als Ablageort verwenden möchten, jedoch ungern auf den LiaScript LiveEditor verzichten möchten, dann müssen Sie das auch nicht, denn LiaEdit bietet neben GitHub Gists auch die Option an, dass Kursdokument herunterzuladen. So können Sie dann selber entscheiden was Sie mit Ihrem Dokument machen. Wählen Sie hierfür im <b>Menü</b> die Option <b>Download... README.md</b> aus.
          <figure style="align:middle;">
            <a href="images/le_download.svg" target="_blank"><img src="images/le_download.svg" alt="Abbildung: Screenshot LiaEdit Download Markdown-Datei" title="Abbildung: Screenshot LiaEdit Download Markdown-Datei"/></a>
            <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit Download Markdown-Datei</figcaption>
          </figure>
        </p>
      </div>
    </p>
  </div>
  <button class="accordion">5. Kursinhalte ändern oder weiterbearbeiten</button>
  <div class="panel">
    <p>
      <figure style="align:middle;">
        <a href="images/le_home2.svg" target="_blank"><img src="images/le_home2.svg" alt="Abbildung: Screenshot LiaEdit Startseite 2" title="Abbildung: Screenshot  LiaEdit Startseite 2"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit Startseite 2</figcaption>
      </figure>
      <br>
      <figure style="align:middle;">
        <a href="images/le_external.svg" target="_blank"><img src="images/le_external.svg" alt="Abbildung: Screenshot LiaEdit load external source" title="Abbildung: Screenshot LiaEdit load external source"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit load external source</figcaption>
      </figure>
      <br>
      <figure style="align:middle;">
        <a href="images/le_external2.svg" target="_blank"><img src="images/le_external2.svg" alt="Abbildung: Screenshot LiaEdit load external source 2" title="Abbildung: Screenshot LiaEdit load external source 2"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit load external source 2</figcaption>
      </figure>
      <br>
      <figure style="align:middle;">
        <a href="images/le_fork_info.svg" target="_blank"><img src="images/le_fork_info.svg" alt="Abbildung: Screenshot LiaEdit Fork information" title="Abbildung: Screenshot LiaEdit Fork information"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit Fork information</figcaption>
      </figure>
      <br>
      <figure style="align:middle;">
        <a href="images/le_fork.svg" target="_blank"><img src="images/le_fork.svg" alt="Abbildung: Screenshot LiaEdit Fork the external source" title="Abbildung: Screenshot LiaEdit Fork the external source"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit Fork the external source</figcaption>
      </figure>
      <br>
      <figure style="align:middle;">
        <a href="images/le_fork2.svg" target="_blank"><img src="images/le_fork.svg" alt="Abbildung: Screenshot GitHub Gist comparison original and forked" title="Abbildung: Screenshot GitHub Gist comparison original and forked"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot GitHub Gist comparison original and forked</figcaption>
      </figure>
      <br>
    </p>
  </div>
  <button class="accordion">6. Link erstellen, um Kurs mit Lernenden zu teilen</button>
  <div class="panel">
    <p>
      <figure style="align:middle;">
        <a href="images/le_gh_gist_link.svg" target="_blank"><img src="images/le_gh_gist_link.svg" alt="Abbildung: Screenshot LiaEdit GitHub Gist published link" title="Abbildung: Screenshot LiaEdit GitHub Gist published link"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot LiaEdit GitHub Gist published link</figcaption>
      </figure>
      <br>
      <figure style="align:middle;">
        <a href="images/le_published.svg" target="_blank"><img src="images/le_published.svg" alt="Abbildung: Screenshot published course" title="Abbildung: Screenshot published course"/></a>
        <figcaption style="text-align:center;font-size:14px;">Abbildung: Screenshot published course</figcaption>
      </figure>
      <br>
    </p>
  </div>
  <button class="accordion">7. Gemeinsam an einem Kurs arbeiten</button>
  <div class="panel">
    <p>
      Possible, but not easily.
    </p>
  </div>
</div>

<script>
  /* accordion script */
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
