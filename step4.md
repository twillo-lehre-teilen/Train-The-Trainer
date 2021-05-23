<h1 style="color:#800080">Schritt 4:  OER in Systemen abbilden</h1>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="infobox">
  <p><i class="fa fa-info-circle" style="color:blue"></i>  <b>Info!</b>
    <br><br>
    Im vierten Schritt werden Sie durch die wichtigsten Funktionen der offenen Anwendung <b>LiaScript</b> geführt, in der Sie Ihre OER in eine Kursstruktur bringen und bereitstellen können. Sie erfahren zudem, wie sie die in offenen Systemen befindlichen Inhalte in Lernmanagementsysteme einbetten können.
    <br><br>
    Darüber hinaus werden die Vor- und Nachteile von Lernmanagementsystemen (LMS) für die Erstellung von OER beleuchtet. Zudem werden Wege aufgezeigt, wie in LMS erstellte Kurse auch öffentlich bereitgestellt werden können.
    <br><br>
    Ziel dieser Einheit ist es, Ihnen vielfältige Möglichkeiten zu vermitteln,  Lektions- oder Kursstruktur mit Hilfe von Webanwendung in Form von OER bereitszustellen.
  </p>
</div>

Bei LiaScript handelt es sich um eine <b>Open-Source Anwendung zur Erstellung von Online-Kursen</b> mit <b>interaktiven Inhalten</b> (z.B. Animationen, mathematischer Formeln, Quizze). Die Nutzung der Anwendung ist <b>kostenlos</b> und steht grundsätzlich allen Personen offen: Für die Erstellung eigener Kurse wird lediglich ein Browser oder Texteditor benötigt. Durch eine Bereitstellung erstellter Lerneinheiten über GitHub, können Urheber\*innen anderen Lehrenden und Lernenenden umfassende Möglichkeiten zur Nachnutzung ihrer gesamten Kursstruktur einräumen. 

LiaScript ist somit nicht nur für die Erstellung von OER geeignet, die Anwendung zielt sogar explizit darauf. Grundidee der Entwickler\*innen ist es, einen Beitrag zur <b>Gestaltung von offener und kollaborativer Bildung</b> zu leisten - international und für alle Bildungsbereiche (vgl. Dietrich 2019)

<h2>LiaScript Workflow mit Atom</h2>

<div>
  <button class="accordion">1. Getting Started: Installation</button>
  <div class="panel">
    <p>
      Um Ihnen den Umgang mit LiaScript so leicht wie möglich zu machen, empfehlen wir Ihnen den Texteditor <b>Atom</b> in Verbindung mit einem LiaScript Plugin zu nutzen. Auf diese Weise können Sie Ihre Kursstruktur auf dem Desktop erstellen, eine Vorschau ansehen und den Kurs erst dann öffentlich zugänglich machen, wenn Sie damit zufrieden sind.
      <br>
      <h6>Atom installieren:</h6>
      Besuchen Sie die Seite <a aria-describedby="Link zum Atom-Download" href="https://atom.io/" target="_blank">https://atom.io/</a>, laden Sie Atom herunter und führen Sie die Installation aus.<br>
      <br>
      <h6>LiaScript Plugin installieren:</h6>
      Öffnen Sie Atom und wählen Sie in der Menüleiste oben unter <b>File</b> den Reiter <b>Settings</b>.
      <br><br>
      <figure style="align:middle;">
        <img src="images/file-settings.svg " alt="Screenshot: File - Settings auswählen" title="Screenshot: File - Settings auswählen"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 36: Screenshot der Atom Einstellungen</figcaption>
      </figure>
      <br>
      In dem folgenden Fenster wählen Sie die Option <b>+Install</b> an und geben Sie <b>liascript-preview</b> in das Suchfeld ein. Erscheint das Plugin in den Suchergebnisse, starten Sie die Installation mit einem Klick auf den Button <b>install</b>.
      <br><br>
      <figure style="align:middle;">
        <img src="images/install_plugin.svg" alt="Screenshot: LiaScript Plugin installieren" title="Screenshot: LiaScript Plugin installieren"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 37: Screenshot der Installation des LiaScript-Plugins in Atom</figcaption>
      </figure>
    </p>
  </div>
  <button class="accordion">2. Lernmodul (Kursdokument) anlegen</button>
  <div class="panel">
    <p>
      Um ein neues Lernmodul anzulegen, öffnen Sie den Reiter <b>File</b> und wählen Sie <b>New file</b> aus <b>oder</b> drücken Sie die Tastenkombination Strg und N. Auf der rechten Seite der Atom Umgebung öffnet sich nun ein Eingabefeld.  Hier geben Sie eine Überschrift zu Ihrem Lernmodul ein. <b>Wichtig:</b> Da in der Anwendung mit Markdown gearbeitet werden muss, vergessen Sie bitte nicht einen Hashtag vor Ihre Überschrift zu setzen. Beispiel: <b># Mein LiaScript Kurs</b>. Speichern Sie das Dokument anschließend unter <b>File</b> und <b>Save</b> oder durch die Tastenkombination <b>Strg und S</b>. Es öffnet sich ein Fenster mit dem Sie einen Dateinamen bestimmen und einen Speicheroft für das Dokument auswählen können.
      <figure style="align:middle;">
        <img src="images/New_file.svg" alt="Screenshot: Neues Dokument in Atom erstellen" title="Screenshot: Neues Dokument in Atom erstellen"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 38: Screenshot Erstellung eines Dokuments in Atom</figcaption>
      </figure>
      <br>
      Aktivieren Sie nun das LiaScript Plugin. Wählen Sie unter <b>Packages</b> im Kopfmenü den Reiter <b>liascript-preview</b> und dann <b>Toggle</b>. Rehts neben dem Eingabefeld erscheint nun eine Vorschau Ihres Kurses. Bei jedem Speichern (<b>File</b> und <b>Save</b> im Kopfmenü oder Tastenkombination Strg und S) aktualisiert sich die Vorschau automatisch. Um die Ansicht zu vergrößern, können Sie die <b>Welcome-Registerkarte</b> schließen.
      <figure style="align:middle;">
        <img src="images/Atom_Preview.svg" alt="Screenshot: LiaScript Preview aktivieren" title="Screenshot: LiaScript Preview aktivieren"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 39: Screenshot LiaScript Vorschau in Atom</figcaption>
      </figure>
    </p>
  </div>
  <button class="accordion">3. Kurs strukturieren, Inhalte einfügen</button>
  <div class="panel">
    <p>
      Ist Ihr Lernmodul/Kursdokument angelegt, können Sie beginnen, Inhalte und Materialien einzufügen. Hierfür müssen Sie auf <b>Markdown</b> zurückgreifen. Sie haben noch keine Erfahrungen mit der Auszeichungssprache gesammelt? Keine Sorge! "Auszeichnungssprache" klingt schlimmer als es ist, Sie müssen hier <b>keine</b> Programmiersprache o.Ä. erlernen. Im folgenden führen wir Sie durch die Gestaltung Ihres Kurses mit Markdown - Sie werden sehen, es ist nicht schwer.
      <br><br>
      <h6>Anlegen von Kapiteln:</h6>
      Zur Strukturierung Ihres Kurses in Kapitel und Unterkapitel legen Sie Überschriften und Unterüberschriften an. In Markdown wird eine Hauptüberschrift mit einem Hashtag, eine Überschrift zweiter Ordnung mit zwei Hashtags usw. gekennzeichnet. Hier ein kleines Beispiel, wie man Überschriften hinzufügt:
      <figure style="align:middle;">
        <img src="images/Lia_beispiel_unterueberschrift.svg" alt="Anlage von Kapiteln und Unterkapiteln für Ihren LiaScript Kurs" title="Anlage von Kapiteln und Unterkapiteln für Ihren LiaScript Kurs"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 40. Anlage von Kapiteln und Unterkapiteln für Ihren LiaScript Kurs</figcaption>
      </figure>
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
        <img src="images/Lia_beispiel_liste.svg" alt="Screenshot Anlegen einer Liste in Markdown" title="Screenshot Anlegen einer Liste in Markdown"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 41: Screenshot Anlegen einer Liste in Markdown</figcaption>
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
      Hier ein Beispiel, in dem eine Quizfrage (mit Hinweisen + Erklärung) nach Vorgave des Handbuchs erstellt werden kann.
      <figure style="align:middle;">
        <img src="images/Lia_beispiel_quiz.svg" alt="Screenshot Erstellung eines Quiz mit LiaScript" title="Screenshot Erstellung eines Quiz mit LiaScript"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 42: Screenshot Erstellung eines Quiz mit LiaScript</figcaption>
      </figure>    
    </p>
  </div>
  <button class="accordion">4. Verbindung zu GitHub herstellen</button>
  <div class="panel">
    <p>
      Bisher ist Ihr Kurs nur lokal gespeichert, liegt also auf Ihrem Computer. Um Ihren LiaScript Kurs nun auch im Internet öffentlich bereitzustellen zu können, empfehlen wir Ihnen die Plattform <b>GitHub</b>. Hier können Sie ihren erstellten Kurs <b>kostenfrei</b> ablegen, um anschließend mit LiaScript einen Link zu Ihrem Kurs zu generieren.
      <br><br>     
      <h6>GitHub Anmeldung</h6>
      Zuallererst müssen Sie sich dafür einen GitHub Account erstellen. Besuchen Sie hierfür die Seite www.github.com und klicken Sie oben rechts auf <b>Sign Up</b>.
      <br><br>
      In dem folgenden Fenster tragen Sie einen <b>Usernamen</b>, ihre <b>E-Mail</b> und ein <b>Passwort</b> ein. Mit einem Klick auf den Button <b>Create Account</b> erstellen Sie sich Ihren eigenen Account.
      <br><br>
      Zum Abschluss müssen Sie nun lediglich noch Ihre E-Mail-Adresse <b>verifizieren</b>. Dafür erhalten Sie eine E-Mail von GitHub mit dem Betreff <b>[GitHub] Please verify your email address</b>. Dort klicken Sie auf den Button <b>Verify email address</b>. Nun werden Sie auf eine Seite geführt, die die Verifizierung Ihres Accounts bestätigt.
      <figure style="align:middle;">
        <img src="images/github_acc_1.svg" alt="Screenshot GitHub Verified Email Address" title="Screenshot GitHub Verified Email Address"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 43: Screenshot GitHub Verified Email Address</figcaption>
      </figure>
      <br>    
      <h6>Verknüpfung von GitHub mit Atom</h6>
      Atom stellt ein Bindeglied zwischen LiaScript und GitHub dar. Mit einer Verbindung von Atom mit GitHUb wird Ihnen die Möglichkeit gegeben, Inhalte durch Atom in Ihren Kurs  einzubinden und über GitHub zu veröffentlichen. D.h. durch das LiaScript Plugin und die Verbindung mit GitHub wird Atom zu einem Werkzeug, mit dem Sie einerseits Ihren Kurs  gestalten können während Sie eine Vorschau erhalten und andererseits auch eine Veröffentlichung im Internet vornehmen können.
      <br><br>
      Öffnen Sie Atom. Das Git-Package ist hier vorinstalliert, sodass es einfach direkt über die Reiter <b>packages → GitHub → Toggle GitHub</b> ausgewählt werden kann. Wählen Sie zunächst <b>Toggle GitHub</b> aus.
      <figure style="align:middle;">
        <img src="images/ScreenshotToggleGitHub.svg" alt="Screenshot der Verknüpfung von GitHub" title="Screenshot der Verknüpfung von GitHub"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 44: Screenshot der Verknüpfung von GitHub</figcaption>
      </figure>
      <br>
      Nun öffnet sich der Reiter <b>GitHub</b>. Klicken Sie auf den angezeigten Link, um ein <b>Token</b> (also quasi einen Authentifizierungscode) zu generieren, welches ihren GitHub Account mit Atom verknüpft. Geben Sie das Token in das dafür vorgesehene Feld ein.
      <figure style="align:middle;">
        <img src="images/2ConnectToGitHub.svg" alt="Screenshot Generierung eines Tokens" title="Screenshot Generierung eines Tokens"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 45: Screenshot Generierung eines Tokens</figcaption>
      </figure>
      <figure style="align:middle;">
        <img src="images/atom_auth.svg" alt="Screenshot Authorisieren von GitHub in Atom" title="Screenshot Authorisieren von GitHub in Atom"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 46: Screenshot Authorisieren von GitHub in Atom</figcaption>
      </figure>
      <figure style="align:middle;">
        <img src="images/3GenerateToken.svg" alt="Screenshot Eingabe des GitHub-Token" title="Screenshot Eingabe des GitHub-Token"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 47: Screenshot Eingabe des GitHub-Token</figcaption>
      </figure>
    </p>
  </div>
  <button class="accordion">5. Ablageort für Ihren Kurs im Internet anlegen</button>
  <div class="panel">
    <p>
      In dem Reiter <b>GitHub</b> in Atom können Sie nun durch Klicken auf <b>initialize and publish on GitHub</b> ein neues Repository für ihren Kurs anlegen. Ein Repository ist der Ablageort für ihre Kursdateien auf Git im Internet.
      <figure style="align:middle;">
        <img src="images/CreateRepository.svg" alt="Screenshot Repository anlegen" title="Screenshot Repository anlegen"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 48: Repository anlegen</figcaption>
      </figure>
      Nach dem Anlegen des Repositorys müssen über Atom noch zwei kleine Schritte getätigt werden (<b>commit</b> und <b>push</b>), um auch Ihre Kursdatei erfolgreich im Repository abzulegen.
      <br><br>
      Was hat es mit diesen Schritten auf sich? Wenn Sie in Atom an Ihrem Kurs arbeiten und die Änderungen <b>speichern</b>, änderen Sie nur das Kursdokument, das lokal auf Ihrem Computer abgelegt ist. Mit <b>commit</b> informieren Sie quasi den Dienst GitHub über die Änderungen und weisen an, dass auch Git die Änderungen übernehmen soll. Mit <b>push</b> setzen Sie die Änderungen dann öffentlich.
      <br><br>
      Um die Schritte <b>commit</b> und <b>push</b> das erste mal auszuführen, wechseln Sie in Atom zunächst in den Reiter <b>Git</b> (direkt neben dem Reiter GitHub).
      <br><br><br>
      Hier müssten Sie, wie in Abb. 45 erkennbar, Ihre Kursdatei unter dem Reiter <b>Unstaged Changes</b> sehen. Klicken Sie nun zuerst auf den Button <b>Stage All</b>, den Sie an der rechten Seite finden.
      <figure style="align:middle;">
        <img src="images/atom_git_stage.svg" alt="Screenshot Ablage der Kursdatei unter Unstaged Changes" title="Screenshot Ablage der Kursdatei unter Unstaged Changes"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 49: Screenshot Ablage der Kursdatei unter Unstaged Changes</figcaption>
      </figure>
      Nach der Wahl des Buttons <b>Stage All</b> wechselt Ihre Datei weiter unten in den Bereich <b>Staged Changes</b> (vgl. Abb. 46). Schreiben Sie als nächstes einen <b>kleinen Kommentar</b> ins untere Textfeld, mit dem Sie den Commit beschreiben (z.B. Neuerungen, Veränderungen, Korrekturen). Klicken Sie anschließend auf <b>Create detached commit</b> (bzw. <b>Commit to branch</b>), um den Commit fertig zu stellen.
      <figure style="align:middle;">
        <img src="images/atom_git_stage2.svg" alt="Screenshot Anzeige der Kursdatei unter Staged Changes" title="Screenshot Anzeige der Kursdatei unter Staged Changes"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 50: Screenshot Anzeige der Kursdatei unter Staged Changes</figcaption>
      </figure>
        Nun können Sie unten in der Fußleiste auf <b>Push</b> klicken, um all Ihre Änderungen mit Ihrem Repository zu synchronisieren - ergo, sie im Netz sichtbar zu machen.
      <figure style="align:middle;">
        <img src="images/atom_git_push.svg" alt="Screenshot Pushen der Änderungen" title="Screenshot Pushen der Änderungen"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 51: Screenshot Pushen der Änderungen</figcaption>
      </figure>
    Überprüfen Sie, ob alles geklappt hat, indem Sie im Browser Ihr GitHub Profil aufrufen und dort Ihren Kurs auswählen. Hier sollte Ihr Repository nun wie folgt aussehen.
      <figure style="align:middle;">
        <img src="images/atom_git_repo.svg" alt="Screenshot Anzeige Ihres Repositories auf GitHub" title="Screenshot Anzeige Ihres Repositories auf GitHub"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 52: Screenshot Anzeige Ihres Repositories auf GitHub</figcaption>
      </figure>
    </p>
  </div>
  <button class="accordion">6. Kursinhalte ändern oder weiterbearbeiten</button>
  <div class="panel">
    <p>
      Das schwierigste haben Sie geschafft! Wenn Sie ihren Kurs nun weiter bearbeiten, aktualisieren oder generell verändern wollen, können Sie dies bequem in Atom tun. Wenn Sie ihren Kurs in Atom öffnen, klicken Sie bitte jedes Mal bevor sie etwas ändern auf <b>fetch</b> (rechts unten in der Ecke). Hierdurch wird wird sichergestellt, dass Sie immer mit der neuesten Version Ihres Kurses weiterarbeiten.
      <figure style="align:middle;">
        <img src="images/atom_fetch.svg" alt="Screenshot Funktion Fetch" title="Screenshot Funktion Fetch"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 53: Screenshot Funktion Fetch</figcaption>
      </figure>
      Haben Sie eine Änderung vorgenommen und gespeichert, wird Ihnen diese zunächst in der LiaScript-Vorschau angezeigt. Sind sie zufrieden mit dem Ergebnis und möchten die Änderung in den Kurs übernehmen, müssen Sie erneut die Schritte <b>commit</b> und <b>push</b> ausführen. Gehen Sie hierbei wie folgt vor:
      <br><br>
      1. <b>Fetch</b> anklicken: Um Komplikationen mit verschiedenen Versionen zu vermeiden, sollten Sie dies an dieser Stelle immer noch einmal tun.
      <br><br>
      2. Die Änderung sollte im Reiter <b>Git</b> nun bereits im Berech <b>Unstaged Changes</b> angezeigt werden. Überführen Sie alle Änderungen in den Bereich <b>Staged changes</b>, indem Sie <b>Stage all</b> anklicken.
      <figure style="align:middle;">
        <img src="images/atom_stage3.svg" alt="Screenshot Unstaged Changes in Staged Changes überführen" title="Screenshot Unstaged Changes in Staged Changes überführen"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 54: Screenshot Unstaged Changes in Staged Changes überführen</figcaption>
      </figure>
      3. Schreiben Sie erneut einen kleinn Kommentar in das Eingabefeld, durch den Sie beschreiben, welche Äderungen Sie vorgenommen haben. Auf diese Weise behalten Sie Überblick über die Versionshistorie.
      <figure style="align:middle;">
        <img src="images/atom_commit.svg" alt="Screenshot beispielhafter Kommentar" title="Screenshot beispielhafter Kommentar"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 55: Screenshot beispielhafter Kommentar</figcaption>
      </figure>
      4. Klicken Sie auf <b>Commit</b> und dann auf <b>Push</b>.
      <figure style="align:middle;">
        <img src="images/atom_push2.svg" alt="Screenshot der Reiter Commit und Push" title="Screenshot der Reiter Commit und Push"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 56: Screenshot der Reiter Commit und Push</figcaption>
      </figure>
      <center>
        <b>Hurra! Ihre Änderungen wurden in Ihr Repository übernommen!</b>
      </center>
    </p>
  </div>
  <button class="accordion">7. Link erstellen, um Kurs mit Lernenden zu teilen</button>
  <div class="panel">
    <p>
      Um eine URL für den Kurs mit LiaScript zu erstellen, die Sie dann mit Lernenden oder Kolleg*innen teilen können, wird der <b>Link zu Ihrem Repository</b> benötigt. Gehen Sie in Ihrem Browser auf Ihr Profil in GitHub. Wählen Sie dort Ihren Kurs aus und klicken Sie anschließend mit einem Rechtsklick auf die <b>.md</b> Datei Ihres Kurses. Hier können Sie die Option <b>Adresse des Links kopieren</b> auswählen.
      <figure style="align:middle;">
        <img src="images/git_link_kopieren.svg" alt="Screenshot Kopieren des des Repository-Links" title="Screenshot Kopieren des des Repository-Links"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 57: Screenshot Kopieren des des Repository-Links</figcaption>
      </figure>
      Besuchen Sie anschließend die LiaScript-Website: <a aria-describedby="Link zur LiaScript Seite" href="https://liascript.github.io/">https://liascript.github.io/</a>.
      <br><br>
      Hier fügen Sie den kopierten Link in das Eingabefeld ein und klicken zum Abschluss auf <b>Load Course</b>. Der Kurs wird nun von LiaScript erstellt und die Kursseite sollte sich in kürze automatisch öffnen. <b>Unter der obigen URL ist der Kurs nun jederzeit aufrufbar</b>.
      <figure style="align:middle;">
        <img src="images/liascript_2.svg" alt="Screenshot LiaScript Startseite" title="Screenshot LiaScript Startseite"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 58: Screenshot LiaScript Startseite</figcaption>
      </figure>
      <center>
        <b>Herzlichen Glückwunsch! Sie haben Ihren ersten eigenen Kurs erfolgreich mit LiaScript erstellt.</b>
      </center>
      <br><br>
      <div class="infobox">
        <p>
          <i class="fa fa-lightbulb-o fa-lg"></i> <b>Hinweis</b>: LiaScript hat es Ihnen angetan? Das folgende Video gibt Ihnen umfassende, weiterführende Informationen rund um die Funktionen des Dienstes
        </p>
      </div>
      <figure>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-JyKxvAkAP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen name="Workshop LiaScript (deutsch)"></iframe>
        <figcaption style="text-align:center;font-size:14px;">Video : <a aria-describedby="Link zum Video über LiaScript (YouTube)" href="https://youtu.be/-JyKxvAkAP0">Workshop LiaScrip</a> von Sebastian Zug und André Dietrich</figcaption>
      </figure>
    </p>
  </div>
</div>

---
<h2>Lernmanagementsysteme und OER</h2>

An Hochschulen werden in der Regel Lernmanagementsysteme (z.B. Moodle, Ilias, Stud.IP) verwendet. Diese sind meist im Baukastenprinzip angelegt und intuitiv und unkompliziert bedienbar. LMS bieten die Möglichkeit eines Teilnehmendenmanagements: Unter anderem erfolgt die Anmeldung der Studierenden zu einem Kurs meist über LMS, Lehrende können Teilnehmendenlisten erstellen, Lernfortschritte einsehen und Abgaben organisieren oder auch Rundmails an alle Teilnehmenden versenden. Vor allem aber bieten LMS einen geschlossenen Raum für die Lehrperson(en) und Studierenden eines Kurses, in dem von der Schrankenbestimmung für Unterricht und Lehre des Urheberechts (§ 60a UrhG, s. Schritt 1) Gebrauch gemacht werden kann.

Für die hochschulische Lehre bieten LMS auf diese Weise große Vorteile. Zu einem Problem wird jedoch, dass der Zugang zu LMS-Kursen für Lehrende in der Regel mit dem Ende einer Beschäftigung an der Hochschule erlischt. Mit Blick auf Open Educational Resources, stellt die Geschlossenheit von LMS eine weitere große Herausforderung dar. Das öffentliche Teilen des gesamten Kurses sowie die Schaffung von Möglichkeiten für eine Nachnutzung der Strukturen und Inhalte wird erschwert. Welche Möglichkeiten Sie dennoch haben, Ihre LMS-Lerneinheiten als OER zu teilen, erfahren Sie im folgenden:

<div style="display:block;text-align:center">
  <a aria-describedby="Link zu Ilias" href="./#/ilias.md" style="padding:20px;">Ilias</a>
  <a aria-describedby="Link zu Moodle" href="./moodle" style="padding:20px;">Moodle</a>
  <a aria-describedby="Link zu Stud.IP Courseware" href="courseware" style="padding:20px;">Stud.IP Courseware</a>
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
