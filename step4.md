<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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
  /* break */
  /* break */
  (function(){
    /* result funtion */
    function showResult(){
      /* for single-input questions */
      if(slides[currentSlide].title == "input"){
        var answer = slides[currentSlide].querySelector("input").value;
        if (answer.toLowerCase() == slides[currentSlide].querySelector(".solution").innerHTML.toLowerCase()){
          slides[currentSlide].querySelector(".answers").querySelector("label").style.color = "lightgreen";
          showExplanation(1);   
        }
        else if(answer == "") {
          /* do nothing */
        }
        else {
          slides[currentSlide].querySelector(".answers").querySelector("label").style.color = "red";
          showExplanation(1);
        }
      }
      /* for single-/multiple-choice questions */
      else {
        /* reset previous selections */
        slides[currentSlide].querySelector(".answers").querySelectorAll("label").forEach( (currentLabel, labelNumber) => { 
            currentLabel.style.color = "#0A1F40";
        });
        /* find selected answers */
        const answerContainer = slides[currentSlide].querySelector(".answers");
        const selector = `input:checked`;
        const userAnswers = (answerContainer.querySelectorAll(selector) || {});
        /* get correct answers */
        correctAnswers = slides[currentSlide].querySelector(".solution").innerHTML.split(",");
        /* check all answers */
        userAnswers.forEach( (currentAnswer, answerNumber) => {
          /* if answer is correct */
          if(correctAnswers.includes(currentAnswer.value)){
            /* color the answers green */
            var answers = slides[currentSlide].querySelector(".answers").querySelectorAll("label");
            answers.forEach( (currentLabel, labelNumber) => {
              if (currentAnswer.value === currentLabel.title){  
                currentLabel.style.color = "lightgreen";
              }
            });
            showExplanation(1);      
          }
          /* if answer is blank */
          else if (currentAnswer.value == null){
            /* do nothing */
          }
          /* if answer is wrong */
          else{
            /* color the answers red */
            var answers = slides[currentSlide].querySelector(".answers").querySelectorAll("label");
            answers.forEach( (currentLabel, labelNumber) => {
              if (currentAnswer.value === currentLabel.title){  
                currentLabel.style.color = "red";
              }
            });
            showExplanation(1);
          }
        });
        /* if multiple-choice: mark unchecked correct answers red if min. one answer selected */
        if (correctAnswers.length > 1 && userAnswers.length > 0) {
          var list = [];
          userAnswers.forEach( (currentAnswer, answerNumber) => {
               list.push(currentAnswer.value);
          });
          var wrong = correctAnswers.filter( (value, index) => {return !list.includes(value)});
          var answers = slides[currentSlide].querySelector(".answers").querySelectorAll("label");
          wrong.forEach( (wrongAnswer, answerNumber) => {
            answers.forEach( (currentLabel, labelNumber) => {
              if (wrongAnswer === currentLabel.title){  
                currentLabel.style.color = "red";
              }
            });
          });
        }
      }
    }
    /* explanation function */
    function showExplanation(x) {
      if (x == 1) {
        explanationContainer.innerHTML = `<b>Ergänzungen zur Antwort:</b><br> ${slides[currentSlide].querySelector(".explanation").innerHTML}`;
      }
      else if (x == 0) {
        explanationContainer.innerHTML = ``;
        slides[currentSlide].querySelector(".answers").querySelectorAll("label").forEach( (currentLabel, labelNumber) => { 
          currentLabel.style.color = "#0A1F40";
        });
      }
    }
    /* slide function */
    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      slides[n].style.display = 'block';
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
      }
      else{
        nextButton.style.display = 'inline-block';
      }
      //for pagination
      pagination.innerHTML = `Frage ${currentSlide + 1} von ${slides.length}`;
    }
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
    // Variables
    const slides = document.querySelectorAll("div.slide");
    const explanationContainer = document.querySelector("div.explanationContainer");
    const pagination = document.getElementById('pagination');
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const submitButton = document.getElementById('submit');
    let currentSlide = 0;
    // Show the first slide
    showSlide(currentSlide);
    // Event listeners
    submitButton.addEventListener('click', showResult);
    previousButton.addEventListener("click", () => {    
     showExplanation(0);    
     showPreviousSlide();
    });
    nextButton.addEventListener("click", () => {    
     showExplanation(0);  
     showNextSlide();  
    });
  })();
</script>

<h1>Schritt 4  OER in Systemen abbilden</h1>

<div class="infobox">
  <p><i class="fa fa-info-circle" style="color:blue"></i>  <b>Info!</b>
    <br><br>
    Im vierten Schritt werden Sie durch die wichtigsten Funktionen der offenen Anwendung <b>LiaScript</b> geführt, in der Sie Ihre OER in eine Kursstruktur bringen und bereitstellen können. Sie erfahren zudem, wie sie die in offenen Systemen befindlichen Inhalte in Lernmanagementsysteme einbetten können.

Darüber hinaus werden die Vor- und Nachteile von Lernmanagementsystemen (LMS) für die Erstellung von OER beleuchtet. Zudem werden Wege aufgezeigt, wie in LMS erstellte Kurse auch öffentlich bereitgestellt werden können.

Ziel dieser Einheit ist es, Ihnen vielfältige Möglichkeiten zu vermitteln,  Lektions- oder Kursstruktur mit Hilfe von Webanwendung in Form von OER bereitszustellen.
  </p>
</div>

Bei LiaScript handelt es sich um eine <b>Open-Source Anwendung zur Erstellung von Online-Kursen</b> mit <b>interaktiven Inhalten</b> (z.B. Animationen, mathematischer Formeln, Quizze). Die Nutzung der Anwendung ist <b>kostenlos</b> und steht grundsätzlich allen Personen offen: Für die Erstellung eigener Kurse wird lediglich ein Browser oder Texteditor benötigt. Durch eine Bereitstellung erstellter Lerneinheiten über GitHub, können Urheber*innen anderen Lehrenden und Lernenenden umfassende Möglichkeiten zur Nachnutzung ihrer gesamten Kursstruktur einräumen. 

LiaScript ist somit nicht nur für die Erstellung von OER geeignet, die Anwendung zielt sogar explizit darauf. Grundidee der Entwickler*innen ist es, einen Beitrag zur <b>Gestaltung von offener und kollaborativer Bildung</b> zu leisten - international und für alle Bildungsbereiche (vgl. Dietrich 2019)

<h2>LiaScript Workflow mit Atom</h2>

<div >
   <button class="accordion">1. Getting Started: Installation</button>
   <div class="panel">
     <p>Um Ihnen den Umgang mit LiaScript so leicht wie möglich zu machen, empfehlen wir Ihnen den Texteditor <b>Atom</b> in Verbindung mit einem LiaScript Plugin zu nutzen. Auf diese Weise können Sie Ihre Kursstruktur auf dem Desktop erstellen, eine Vorschau ansehen und den Kurs erst dann öffentlich zugänglich machen, wenn Sie damit zufrieden sind. <br>

<b>Atom installieren:</b><br> Besuchen Sie die Seite <a aria-describedby="Link zum Atom-Download" href="https://atom.io/" target="_blank">https://atom.io/</a>, laden Sie Atom herunter und führen Sie die Installation aus.<br>
<br>
<b>LiaScript Plugin installieren:</b><br> Öffnen Sie Atom und wählen Sie in der Menüleiste oben unter <b>File</b> den Reiter <b>Settings</b>.

<figure style="align:middle;">
  <img src="images/file-settings.svg " alt="Screenshot: File - Settings auswählen" title="Screenshot: File - Settings auswählen"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 36: Screenshot der Atom Einstellungen</figcaption>
</figure>

In dem folgenden Fenster wählen Sie die Option <b>+Install</b> an und geben Sie <b>liascript-preview</b> in das Suchfeld ein. Erscheint das Plugin in den Suchergebnisse, starten Sie die Installation mit einem Klick auf den Button <b>install</b>.

<figure style="align:middle;">
  <img src="images/install_plugin.svg" alt="Screenshot: LiaScript Plugin installieren" title="Screenshot: LiaScript Plugin installieren"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 37: Screenshot der Installation des LiaScript-Plugins in Atom</figcaption>
</figure>
    </p>
  </div>
  <button class="accordion">2. Lernmodul (Kursdokument) anlegen</button>
  <div class="panel">
    <p>Um ein neues Lernmodul anzulegen, öffnen Sie den Reiter <b>File</b> und wählen Sie <b>New file</b> aus <b>oder</b> drücken Sie die Tastenkombination Strg und N. Auf der rechten Seite der Atom Umgebung öffnet sich nun ein Eingabefeld.  Hier geben Sie eine Überschrift zu Ihrem Lernmodul ein. <b>Wichtig:</b> Da in der Anwendung mit Markdown gearbeitet werden muss, vergessen Sie bitte nicht einen Hashtag vor Ihre Überschrift zu setzen. Beispiel: <b># Mein LiaScript Kurs</b>. Speichern Sie das Dokument anschließend unter <b>File</b> und <b>Save</b> oder durch die Tastenkombination <b>Strg und S</b>. Es öffnet sich ein Fenster mit dem Sie einen Dateinamen bestimmen und einen Speicheroft für das Dokument auswählen können.
    <figure style="align:middle;">
      <img src="images/New_file.svg" alt="Screenshot: Neues Dokument in Atom erstellen" title="Screenshot: Neues Dokument in Atom erstellen"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 38: Screenshot Erstellung eines Dokuments in Atom</figcaption>
    </figure>
      Aktivieren Sie nun das LiaScript Plugin. Wählen Sie unter <b>Packages</b> im Kopfmenü den Reiter <b>liascript-preview</b> und dann <b>Toggle</b>. Rehts neben dem Eingabefeld erscheint nun eine Vorschau Ihres Kurses. Bei jedem Speichern (<b>File</b> und <b>Save</b> im Kopfmenü oder Tastenkombination Strg und S) aktualisiert sich die Vorschau automatisch. Um die Ansicht zu vergrößern, können Sie die <b>Welcome-Registerkarte</b> schließen.
    <figure style="align:middle;">
      <img src="images/Atom_Preview.svg" alt="Screenshot: LiaScript Preview aktivieren" title="Screenshot: LiaScript Preview aktivieren"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 39: Screenshot LiaScript Vorschau in Atom</figcaption>
    </figure>
    </p>
  </div>
  <button class="accordion">3. Kurs strukturieren, Inhalte einfügen</button>
  <div class="panel">
  <p>Ist Ihr Lernmodul/Kursdokument angelegt, können Sie beginnen, Inhalte und Materialien einzufügen. Hierfür müssen Sie auf <b>Markdown</b> zurückgreifen. Sie haben noch keine Erfahrungen mit der Auszeichungssprache gesammelt? Keine Sorge! "Auszeichnungssprache" klingt schlimmer als es ist, Sie müssen hier <b>keine</b> Programmiersprache o.Ä. erlernen. Im folgenden führen wir Sie durch die Gestaltung Ihres Kurses mit Markdown - Sie werden sehen, es ist nicht schwer.

<b>Anlegen von Kapiteln:</b>

Zur Strukturierung Ihres Kurses in Kapitel und Unterkapitel legen Sie Überschriften und Unterüberschriften an. In Markdown wird eine Hauptüberschrift mit einem Hashtag, eine Überschrift zweiter Ordnung mit zwei Hashtags usw. gekennzeichnet. Hier ein kleines Beispiel, wie man Überschriften hinzufügt:
    <figure style="align:middle;">
      <img src="images/Lia_beispiel_unterueberschrift.svg" alt="Anlage von Kapiteln und Unterkapiteln für Ihren LiaScript Kurs" title="Anlage von Kapiteln und Unterkapiteln für Ihren LiaScript Kurs"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 40. Anlage von Kapiteln und Unterkapiteln für Ihren LiaScript Kurs</figcaption>
    </figure>
    
<b>Hinzufügen und Formatieren von Texten:</b>

Schreiben Sie Texte und Anweisungen einfach direkt unter die Überschrift, unter der Sie sie platzieren möchten. Die Formatierung von Texten können Sie durch Markdown-Syntax im Prinzip des Copy und Paste vornehmen. LiaScript sorgt automatisch für ein ansprechendes Layout. Speichern Sie Ihre Eingabe, so können Sie das Aussehen Ihrer Eingabe in der LiaScript Vorschau überprüfen.
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
    <i class="fa fa-lightbulb-o fa-lg"></i> Hinweis: Einen Überblick über die wichtigste Markdown-Syntax zum Kopieren und Einfügen finden Sie hier:
    <ul style="list-style-type:disc">
      <li><a aria-describedby="Link zum Markdown Cheat Sheet" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatcheat</a> von Adam Pritchard, lizenziert unter <a aria-describedby="Link zur Quelle" href="https://creativecommons.org/licenses/by/3.0/legalcode">CC BY (3.0, unported)</a></li>
      <li><a aria-describedby="Link zum Markdown Guide" href="https://www.markdownguide.org/">Markdown Guide</a> von Matt Cone, lizenziert unter <a aria-describedby="Link zur Quelle" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></li>
    </ul>
<b>Hinzufügen weiterer Elemente:</b>

LiaScript ist insbesondere dafür geeignet, interaktive Lernobjekte in Ihren Kursstruktur zu integrieren. <b>Kopieren Sie die Syntax, die Sie dafür benötigen aus dem digitalen <a aria-describedby="Link zu LiaScript Handbuch" href="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#1">LiaScript Handbuch</a> von André Dietrich, Sebastian Zug, Karl Fessel und Steve Rehm</b>. Das Handbuch ist explizit dafür vorgesehen, Ihnen bei der Integration von Elementen in LiaScript zu helfen.

Hier ein Beispiel, in dem eine Quizfrage (mit Hinweisen + Erklärung) nach Vorgave des Handbuchs erstellt werden kann.
    <figure style="align:middle;">
      <img src="images/Lia_beispiel_quiz.svg" alt="Screenshot Erstellung eines Quiz mit LiaScript" title="Screenshot Erstellung eines Quiz mit LiaScript"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 42: Screenshot Erstellung eines Quiz mit LiaScript</figcaption>
    </figure>    
    </p>
  </div>
  <button class="accordion">4. Verbindung zu GitHub herstellen</button>
  <div class="panel">
    <p>Bisher ist Ihr Kurs nur lokal gespeichert, liegt also auf Ihrem Computer. Um Ihren LiaScript Kurs nun auch im Internet öffentlich bereitzustellen zu können, empfehlen wir Ihnen die Plattform <b>GitHub</b>. Hier können Sie ihren erstellten Kurs <b>kostenfrei</b> ablegen, um anschließend mit LiaScript einen Link zu Ihrem Kurs zu generieren.
      
<b>GitHub Anmeldung</b>

Zuallererst müssen Sie sich dafür einen GitHub Account erstellen. Besuchen Sie hierfür die Seite www.github.com und klicken Sie oben rechts auf <b>Sign Up</b>.

In dem folgenden Fenster tragen Sie einen <b>Usernamen</b>, ihre <b>E-Mail</b> und ein <b>Passwort</b> ein. Mit einem Klick auf den Button <b>Create Account</b> erstellen Sie sich Ihren eigenen Account.

Zum Abschluss müssen Sie nun lediglich noch Ihre E-Mail-Adresse <b>verifizieren</b>. Dafür erhalten Sie eine E-Mail von GitHub mit dem Betreff <b>[GitHub] Please verify your email address</b>. Dort klicken Sie auf den Button <b>Verify email address</b>. Nun werden Sie auf eine Seite geführt, die die Verifizierung Ihres Accounts bestätigt.
    <figure style="align:middle;">
      <img src="images/github_acc_1.svg" alt="Screenshot GitHub Verified Email Address" title="Screenshot GitHub Verified Email Address"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 43: Screenshot GitHub Verified Email Address</figcaption>
    </figure>
      
<b>Verknüpfung von GitHub mit Atom</b>

Atom stellt ein Bindeglied zwischen LiaScript und GitHub dar. Mit einer Verbindung von Atom mit GitHUb wird Ihnen die Möglichkeit gegeben, Inhalte durch Atom in Ihren Kurs  einzubinden und über GitHub zu veröffentlichen. D.h. durch das LiaScript Plugin und die Verbindung mit GitHub wird Atom zu einem Werkzeug, mit dem Sie einerseits Ihren Kurs  gestalten können während Sie eine Vorschau erhalten und andererseits auch eine Veröffentlichung im Internet vornehmen können.

Öffnen Sie Atom. Das Git-Package ist hier vorinstalliert, sodass es einfach direkt über die Reiter <b>packages → GitHub → Toggle GitHub</b> ausgewählt werden kann. Wählen Sie zunächst <b>Toggle GitHub</b> aus.
      <figure style="align:middle;">
        <img src="images/ScreenshotToggleGitHub.svg" alt="Screenshot der Verknüpfung von GitHub" title="Screenshot der Verknüpfung von GitHub"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 44: Screenshot der Verknüpfung von GitHub</figcaption>
      </figure>
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
  <p>In dem Reiter <b>GitHub</b> in Atom können Sie nun durch Klicken auf <b>initialize and publish on GitHub</b> ein neues Repository für ihren Kurs anlegen. Ein Repository ist der Ablageort für ihre Kursdateien auf Git im Internet.
    <figure style="align:middle;">
      <img src="images/CreateRepository.svg" alt="Screenshot Repository anlegen" title="Screenshot Repository anlegen"/>
      <figcaption style="text-align:center;font-size:14px;">Abb. 48: Repository anlegen</figcaption>
    </figure>
  Nach dem Anlegen des Repositorys müssen über Atom noch zwei kleine Schritte getätigt werden (<b>commit</b> und <b>push</b>), um auch Ihre Kursdatei erfolgreich im Repository abzulegen.

Was hat es mit diesen Schritten auf sich? Wenn Sie in Atom an Ihrem Kurs arbeiten und die Änderungen <b>speichern</b>, änderen Sie nur das Kursdokument, das lokal auf Ihrem Computer abgelegt ist. Mit <b>commit</b> informieren Sie quasi den Dienst GitHub über die Änderungen und weisen an, dass auch Git die Änderungen übernehmen soll. Mit <b>push</b> setzen Sie die Änderungen dann öffentlich.

Um die Schritte <b>commit</b> und <b>push</b> das erste mal auszuführen, wechseln Sie in Atom zunächst in den Reiter <b>Git</b> (direkt neben dem Reiter GitHub).


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
</div>
