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

<h1 style="color:#228b22">Schritt 3: Material aufbereiten</h1>

<div class="infobox">
  <p><i class="fa fa-info-circle" style="color:blue"></i>  <b>Info!</b>
    <br><br>
    Im dritten Schritt werden Sie dabei unterstützt, Materialien, die für Präsenzveranstaltungen entwickelt wurden, didaktisch für ein digitales Setting umzugestalten. Gleichzeitig geht es um die Überführung Ihres Materials in die Form von OER. Einen besonderen Schwerpunkt bilden Fragen der Lizenzierung eigener Materialien mit und ohne die Einbindung von Inhalten Dritter. Ziel dieser Einheit ist es, Ihnen die Aufbereitung eigener Materialien in Form von OER Schritt für Schritt näher zu bringen.
  </p>
</div>

<div>
   <button class="accordion">1. Fahrplan erstellen</button>
   <div class="panel">
     <p>Didaktische Planung und Strukturierung
<br>
Bei der Erstellung komplexer Lektionen oder Kurse kann ein vorab erstellter Fahrplan behilflich sein. Überlegen Sie sich zunächst, um welche Granularität es sich bei Ihrem OER-Projekt handelt. Skizzieren Sie, was Sie konkret planen und welche Inhalte und Materialien dafür erstellt oder (neu-)aufbereitet werden müssen.
<br>
     <table id="invisible">
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_kleinteiliges_Lehrmaterial.svg" alt="kleinteiliges Lehrmaterial" title="kleinteiliges Lehrmaterial" width="40%" height="40%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Kleinteiliges Lehrmaterial: Erklärvideo, Text, Audio
      </td>
    </tr>
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_aufgabenorientiertes_Material.svg" alt="aufgabenorientiertes Material" title="aufgabenorientiertes Material" width="55%" height="55%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Aufgabenorientierte Materialien: Erklärvideo + Aufgaben, Text + Arbeitsauftrag, Audio + Quiz
      </td>
    </tr>
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_Lektion.svg" alt="Lektion" title="Lektion" width="70%" height="70%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Lektionen: thematisch geschlossene Einheiten
      </td>
    </tr>
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_Kurs.svg" alt="Kurs" title="Kurs" width="85%" height="85%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Kurse: Gesamtszenarien
      </td>
    </tr>
  </table>
     <br>
  <b>How To</b>
<br>
1. Entwickeln Sie einen Fahrplan für Ihr OER-Projekt /Kurs
 <br>
  a) Was wollen Sie erstellen? <br><br>
    Ob einen Kurs, eine Lektion, Aufgaben oder kleinteilige Lehrmaterialien, legen Sie fest, welche Inhalte vermittelt werden sollen. Welcher Aspekte machen das Kernwissen aus? Welcher Teil eignet sich um in das Thema einzuführen und welche Inhalte sind für Vertiefungen oder als Exkurse zu behandeln. Skizzieren Sie tabellarisch, wie die einzelnen Inhaltseinheiten angeboten werden sollen.<br>
     <table>
      <tr>
        <td valign="middle" text-align="left">
          Sitzung
        </td>
        <td valign="middle" text-align="left">
          Lernziel
        </td>
        <td valign="middle" text-align="left">
          Thema/Inhalte
        </td>
        <td valign="middle" text-align="left">
          Methode
        </td>
        <td valign="middle" text-align="left">
          Material/Medien
        </td>
        <td valign="middle" text-align="left">
          Lernüberprüfung
        </td>
      </tr>
    </table>
       b) Wie sollen die Lehr-Lernszenarien jeweils gestaltet sein?  <br><br>
    <ul style="list-style-type:disc">
      <li>Welche Formen von Virtualität werden in einzelnen Phasen gewählt (Präsenzveranstaltung, virtuelle Veranstaltung, e-Learning)?</li>
      <li>Bestehen unterschiedliche Grade der Synchronizität in den jeweiligen Phasen (synchrone Webinare, asynchrone Selbstlernphasen)?</li>
      <li>In welchen Sozialformen finden die Szenarien statt (Plenum, Gruppe, Einzelarbeit)?</li>
      <li>Welche Methoden (Diskussion, Think-Pair-Share, Gruppenpuzzle) und Materialien (Video, Präsentation, Interaktive Elemente wie etwa Chats/Foren) sollen zum Einsatz kommen?</li>
    </ul></p>
   </div>
   <button class="accordion">2. Bestandsaufnahme und weitere Planung</button>
   <div class="panel">
     <p></p>
   </div>
   <button class="accordion">3. Transfomation in OER Formate</button>
   <div class="panel">
     <p></p>
   </div>
</div>

<div>
   <button class="accordion">1. Fahrplan erstellen</button>
   <div class="panel">
     <p>Didaktische Planung und Strukturierung
<br>
Bei der Erstellung komplexer Lektionen oder Kurse kann ein vorab erstellter Fahrplan behilflich sein. Überlegen Sie sich zunächst, um welche Granularität es sich bei Ihrem OER-Projekt handelt. Skizzieren Sie, was Sie konkret planen und welche Inhalte und Materialien dafür erstellt oder (neu-)aufbereitet werden müssen.
<br>
  <table id="invisible">
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_kleinteiliges_Lehrmaterial.svg" alt="kleinteiliges Lehrmaterial" title="kleinteiliges Lehrmaterial" width="40%" height="40%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Kleinteiliges Lehrmaterial: Erklärvideo, Text, Audio
      </td>
    </tr>
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_aufgabenorientiertes_Material.svg" alt="aufgabenorientiertes Material" title="aufgabenorientiertes Material" width="55%" height="55%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Aufgabenorientierte Materialien: Erklärvideo + Aufgaben, Text + Arbeitsauftrag, Audio + Quiz
      </td>
    </tr>
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_Lektion.svg" alt="Lektion" title="Lektion" width="70%" height="70%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Lektionen: thematisch geschlossene Einheiten
      </td>
    </tr>
    <tr>
      <td valign="middle" text-align="left" width="60%">
        <figure style="float:left;align:middle;">
          <img src="images/Obstkiste_Kurs.svg" alt="Kurs" title="Kurs" width="85%" height="85%"/>
        </figure>
      </td>
      <td valign="left" text-align="left" width="40%">
        Kurse: Gesamtszenarien
      </td>
    </tr>
  </table>
<br>
  <b>How To</b>
<br>
1. Entwickeln Sie einen Fahrplan für Ihr OER-Projekt /Kurs
 <br>
  a) Was wollen Sie erstellen? <br><br>
    Ob einen Kurs, eine Lektion, Aufgaben oder kleinteilige Lehrmaterialien, legen Sie fest, welche Inhalte vermittelt werden sollen. Welcher Aspekte machen das Kernwissen aus? Welcher Teil eignet sich um in das Thema einzuführen und welche Inhalte sind für Vertiefungen oder als Exkurse zu behandeln. Skizzieren Sie tabellarisch, wie die einzelnen Inhaltseinheiten angeboten werden sollen.<br>
    <table>
      <tr>
        <td valign="middle" text-align="left"">
          Sitzung
        </td>
        <td valign="middle" text-align="left"">
          Lernziel
        </td>
        <td valign="middle" text-align="left"">
          Thema/Inhalte
        </td>
        <td valign="middle" text-align="left"">
          Methode
        </td>
        <td valign="middle" text-align="left"">
          Material/Medien
        </td>
        <td valign="middle" text-align="left"">
          Lernüberprüfung
        </td>
      </tr>
    <table/>
    b) Wie sollen die Lehr-Lernszenarien jeweils gestaltet sein?  <br><br>
    <ul style="list-style-type:disc">
      <li>Welche Formen von Virtualität werden in einzelnen Phasen gewählt (Präsenzveranstaltung, virtuelle Veranstaltung, e-Learning)?</li>
      <li>Bestehen unterschiedliche Grade der Synchronizität in den jeweiligen Phasen (synchrone Webinare, asynchrone Selbstlernphasen)?</li>
      <li>In welchen Sozialformen finden die Szenarien statt (Plenum, Gruppe, Einzelarbeit)?</li>
      <li>Welche Methoden (Diskussion, Think-Pair-Share, Gruppenpuzzle) und Materialien (Video, Präsentation, Interaktive Elemente wie etwa Chats/Foren) sollen zum Einsatz kommen?</li>
    </ul>
    <br>
    <b>Interessante Beispiele und Ideen für digitale Szenarien</b> finden Sie in diesen Quellen:
    <br>
    <ul style="list-style-type:disc">
      <li>Hochschuldidaktik der Ruhr-Universität Bochum (o.J.): <a aria-describedby="Link zur Quelle" href="https://dbs-lin.ruhr-uni-bochum.de/lehreladen/e-learning-technik-in-der-lehre/" target="_blank">E-Learning</a></li>
      <li>Universität Hamburg (2021): <a aria-describedby="Link zur Quelle" href="https://www.uni-hamburg.de/elearning/methoden.html" target="_blank">E-Learning Methoden </a></li>
      <li>Hoffmann, Sarah G/Kiehne, Björn (2016): <a aria-describedby="Link zur Quelle" href="http://Ideen für die HochschullehreEin Methodenreader" target="_blank">Ideen für die Hochschullehre - Ein Methodenreader</a></li>
    </ul>

<b>2. Visualisieren Sie Ihr (Gesamt-)Szenario und erstellen Sie eine Übersicht für die Zielgruppe (z. B. Advance Organizer)</b><br>
In diesem Foliensatz finden Sie eine Vorlage für Kurs- und Lektionsformate mit konkreten Beispielen.
     </p>
  </div>
  </div>
  <div>
  <button class="accordion">2. Bestandsaufnahme und weitere Planung</button>
  <div class="panel">
    <p>In einem weiteren Schritt erfolgt eine Bestandsaufnahme der vorhandenen (teils noch nicht OER-konformen) Inhalte und Materialien. Das Rad muss dabei nicht immer neu erfunden werden. Vieles ist bereits erprobt und hat sich in der Lehre bewährt, greifen Sie darauf zurück.
  <b>How To</b><br>
    <ul style="list-style-type:disc">
  <li>Hierfür können Sie bei bereits bestehenden Kursen ansetzen, indem Sie erprobte Formate, Materialarten und Aufgabenstellungen identifizieren und diese in digitale Lehr- Lernsettings übersetzen. Es gilt zu klären, welche dieser Inhalte und Materialien wie digitalisiert werden und in einen Kurses/eine Lektion als kleinteilige Lehrmaterialien (z.B. Präsentation, Lehrvideo oder Audio) oder aufgabenorientierte Materialien (Arbeitsaufträge, Quizze, etc.) eingebunden werden können. </li>
  <li>Recherchieren Sie, ob bereits offene Materialien von anderen Lehrenden vorliegen. Nutzen Sie die Suchstrategien aus Modul 2</li>
  <li>Beginnen Sie mit der Materialerstellung. Unter Berücksichtigung des erstellten Fahrplans werden nun die einzelnen Materialien und interaktiven Inhalte (z.B. Vorbereitung eines webbasierten Whiteboard, Foruminhalte etc.) erstellt. Bevor Sie Inhalte und Materialien final fertigstellen, schauen Sie sich den nächsten Handlungspunkt "Transfer in OER Formate" an.</li>
    </ul>
    </p>
  </div>
  <button class="accordion">3. Transfomation in OER Formate</button>
  <div class="panel">
    <p>Sobald die ersten Inhalte und Materialien aufbereitet sind, gilt es diese auch als OER entlang der Merkmale von OER zu finalisieren. Hierfür sollten Sie drei wesentliche Aspekte beachten: Die erstellten Bildungsmaterialien, die Sie unter eine offene eine Lizenz stellen möchten, sollten
  <ul style="list-style-type:disc">
  <li>frei von urheberrechtlichen Ansprüchen sein,</li>
  <li>für Außenstehende durch eine korrekte Lizenzierung als OER erkennbar sein,</li>
  <li>für eine optimale Nachnutzung in einem möglichst offenen Dateiformat vorliegen.</li>
  </ul>
  <b>Für konkrete Planungsschritte zur Überführung von Materialien in OER finden Sie hier zwei Unterstützungstools:</b>
  <ul style="list-style-type:disc">
    <li>bei der Planung von <b>kleinteiligen Lehrmaterialien</b> kann die <a aria-describedby="Link zur Quelle" href="https://tibhannover.gitlab.io/oer/oer-wizard/html/wizard-modal.html" target="_blank">OER-Planungshilfe</a> verwendet werden. Ein Instrument, das Ihnen in wenigen Schritten einen Leitfaden generiert.</li>
  <li>eine weitere OER-Planungshilfe für Kurse bzw. Einheiten stellt die Vorlage mooc-canvas von Sandra Schön und Martin Ebner (CC BY 4.0) dar: <a aria-describedby="Link zur Quelle" href="https://sansch.files.wordpress.com/2017/06/mooc-canvas.jpg" target="_blank">https://sansch.files.wordpress.com/2017/06/mooc-canvas.jpg</a></li>
  </ul>
  </p>
  </div>
</div>


