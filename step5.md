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
  <button class="accordion">1. Registrierung/Login</button>
   <div class="panel">
     <p>Um Material auf twillo bereitzustellen, wählen Sie in Ihrem Workspace die Schaltfläche <b>+NEU</b> aus. Klicken Sie auf <b>Neues Material</b> und laden Sie Ihr Material per Drag and Drop hoch oder verlinken Sie es durch die Eingabe einer URL. Verlinkungen sind nur dann möglich, wenn das Material bereits auf anderen Plattformen (z.B. YouTube, AV-Portal, SlideWiki, GitHub/GitLab etc.) veröffentlicht ist.

Sobald Sie den Vorgang mit <b>OK</b> bestätigt haben, befindet sich das Material in Ihrem <b>Workspace</b>. Zunächst ist es nur für Sie allein sichtbar. Eine Freigabe für andere Nutzer*innen oder die Öffentlichkeit muss gesondert erfolgen (vgl. Punkt 4 - Freigabe).</p>
</div>

Nach der ersten Anmeldung im Portal werden Sie in Ihrem <b>Workspace</b> weitergeleitet. Dieser ist als Ordnerstruktur angelegt und bietet Ihnen die Möglichkeit, Ihre eigenen OER zu organisieren. Der Workspace ist Ihr persönlicher Bereich, andere Nutzer*innen haben keinen Zugriff.
<br><br>
Um von Ihrem Workspace in die Suchumgebung oder den Bereich Sammlungen zu wechseln, öffnen Sie die <b>Bereichsauswahl</b> indem Sie auf den Reiter <b>Workspace</b> oben links klicken.

<h2 style="margin-bottom:20px">Alles klar? Überprüfen Sie Ihr Wissen zu OER und offenen Lizenzen mit folgendem Quiz</h2>

<script defer>
  function ziehen(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
  function ablegenErlauben(ev) {
    ev.preventDefault();
  }
  function ablegen(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    var target = ev.target;
    while (" " + target.className + " ".indexOf(" dropzone ") == -1) {
        target = target.parentNode;
    }
    target.appendChild(document.getElementById(data));
  }
  window.addEventListener("load", function () {
    var elms = document.querySelectorAll(".dropzone");
    for (var i = 0; i < elms.length; i++) {
      var dropzone = elms[i];
      dropzone.addEventListener("drop", ablegen);
      dropzone.addEventListener("dragover", ablegenErlauben);
    };
    elms = document.querySelectorAll("[draggable=true]")
    for (var i = 0; i < elms.length; i++) {
      var draggable = elms[i];
      draggable.addEventListener("dragstart", ziehen);
    };
  });
  /* break */
  /* break */
  (function(){
    /* result funtion */
    function showResult(){
      /* for drag-drop questions */
      if(slides[currentSlide].title == "dragdrop") {  
        /* reset previous selections */
        /* get correct answers */
        const correctAnswers = slides[currentSlide].querySelector(".solution").innerHTML.split(",");
        /* find user-answers */
        var userAnswers = [];
        const labelContainer = slides[currentSlide].querySelector(".answers").querySelectorAll("label")
        labelContainer.forEach( (label, labelNumber) => {
          let dropzoneContainer = label.querySelectorAll(".endDropzone"); 
          dropzoneContainer.forEach( (dropzone, dropzoneNumber) => {
            let img = dropzone.getElementsByTagName('img');
            if(img.length >= 1){
              userAnswers.push(img[0].title);
            }
            else {
              userAnswers.push("-");
            }
          });  
        });
        /* compare answers */
        userAnswers.forEach( (answer, answerNumber) => {
          if (answer == correctAnswers[answerNumber]){
            /* if answer is right */
            explanationContainer.innerHTML = `<b>Ergänzungen zur Antwort:</b><br> ${correctAnswers} ?= ${userAnswers}`;
          }
          else if (answer == "-"){
            /* do nothing */
            explanationContainer.innerHTML = `<b>Ergänzungen zur Antwort:</b><br> ${correctAnswers} ?= ${userAnswers}`;
          }
          else {
            /* if answer is wrong */
            explanationContainer.innerHTML = `<b>Ergänzungen zur Antwort:</b><br> ${correctAnswers} ?= ${userAnswers}`;
          }
        });
      }
      /* for single-input questions */
      else if(slides[currentSlide].title == "input"){
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

<div class="quiz-frame">
  <h1 class="quiz">Quiz zu OER und offenen Lizenzen</h1>
  <div class="quiz-container">
    <div class="slide" title="dragdrop">
      <div class="question">Ordnen Sie den CC-Lizenzen die richtige Bedeutung zu</div>
      <div class="answers">
        <label class="dragdropContainer">
          <p style="float:left;line-height:20px;vertical-align:middle;width:120px;">CC BY ND: </p>
          <div class="dropzone" title="drag"><img id="drag1" title="A" src="images/creative-commons_cc-by-nd.svg" draggable="true"></div>
          <div class="dropzone endDropzone" title="drop" style="margin-right:30px;"></div>
          <p title="description" style="float:left;line-height:20px;vertical-align:middle;">= keine Bearbeitung, Namensnennung</p>
        </label>
        <label class="dragdropContainer">
          <p style="float:left;line-height:30px;vertical-align:middle;width:120px;">CC BY SA: </p>
          <div class="dropzone" title="drag"><img id="drag2" title="B" src="images/creative-commons_cc-by-sa.svg" draggable="true"></div>
          <div class="dropzone endDropzone" title="drop" style="margin-right:30px;"></div>
          <p title="description" style="float:left;line-height:30px;vertical-align:middle;">= Namensnennung, Weitergabe unter gleichen Bedingungen</p>
        </label>
        <label class="dragdropContainer">
          <p style="float:left;line-height:30px;vertical-align:middle;width:120px;">CC BY NC: </p>
          <div class="dropzone" title="drag"><img id="drag3" title="C" src="images/creative-commons_cc-by-nc.svg" draggable="true"></div>
          <div class="dropzone endDropzone" title="drop" style="margin-right:30px;"></div>
          <p title="description" style="float:left;line-height:30px;vertical-align:middle;">= nicht-kommerziell, Namensnennung</p>
        </label>
        <label class="dragdropContainer">
          <p style="float:left;line-height:30px;vertical-align:middle;width:120px;">CC BY: </p>
          <div class="dropzone" title="drag"><img id="drag4" title="D" src="images/creative-commons_cc-by.svg" draggable="true"></div>
          <div class="dropzone endDropzone" title="drop" style="margin-right:30px;"></div>
          <p title="description" style="float:left;line-height:30px;vertical-align:middle;">= Namensnennung</p>
        </label>
      </div>
      <div class="solution">A,B,C,D</div>
      <div class="explanation"></div>
    </div>
    <div class="slide" title="input">
      <div class="question">Welche Organisation prägte den Begriff "OER" erstmalig?*</div>
      <div class="answers">
        <label>
          Lösung: 
          <input type="text" id="test" name="question1">
        </label>
      </div>
      <div class="solution">UNESCO</div>
      <div class="explanation">Auf dem UNESCO <i>Forum zu OpenCourseWare für die Hochschulbildung in Entwicklungsländern</i> im Jahr 2002 wurde der Begriff Open Educational Resources erstmalig geprägt (vgl. <a aria-described-by="Link zur Unesco Seite" href="https://unesdoc.unesco.org/ark:/48223/pf0000128515">UNESCO 2002</a>) Die UNESCO griff die Forderungen der aufkommenden OER-Bewegung auch 2012 in ihrer Pariser Erklärung wieder auf. </div>
    </div>
    <div class="slide" title="single-choice">
      <div class="question">Wie lässt sich OER definieren?*</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question3" value="A">
          Bildungsmaterialien in jedwedem Medium, die unter einer offenen Lizenz veröffentlicht wurden und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können.
        </label>
        <label title="B">
          <input type="radio" name="question3" value="B">
          Bildungsmaterialien, in digitalen Medien, die nicht urhebrrechtlich geschützt sind und und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können.
        </label>
      </div>
      <div class="solution">A</div>
      <div class="explanation">"Open Educational Resources (OER) sind Bildungsmaterialien jeglicher Art und in jedem Medium, die unter einer offenen Lizenz stehen. Eine solche Lizenz ermöglicht den kostenlosen Zugang sowie die kostenlose Nutzung, Bearbeitung und Weiterverbreitung durch Andere ohne oder mit geringfügigen Einschränkungen. Dabei bestimmen die Urhebenden selbst, welche Nutzungsrechte sie einräumen und welche Rechte sie sich vorbehalten" (<a aria-describedby="Link zur OER Seite der deutschen Unesco-Kpmmission" href="https://www.unesco.de/bildung/open-educational-resources">Deutsche UNESCO-Kommision o.J.</a>)</div>
    </div>
    <div class="slide" title="single-choice">
      <div class="question">Welches Merkmal gilt als eindeutiges Indiz für OER?</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question4" value="A">
          digitales Format
        </label>
        <label title="B">
          <input type="radio" name="question4" value="B">
          offene Lizenzierung
        </label>
        <label title="C">
          <input type="radio" name="question4" value="C">
          kostenpflichtige Nutzung
        </label>
      </div>
      <div class="solution">B</div>
      <div class="explanation">Ein zentrales Merkmal, das OER von urheberrechtlich geschützten Materialien unterscheidet, ist die offene Lizenz. Weitere (etwas unspezifischere) Merkmale sind ein offenes Dateiformat, die automatische Auffindbarkeit und die didaktische Kontextualisierung, die den einfacheren Umgang mit OER betonen (OER nutzen und bearbeiten, OER effizient auffinden, Einschätzbarkeit der Passung im eigenen Lehr-Lernkontext). In den folgenden Schritten dieser Lernreise werden Sie die genannten Merkmale noch etwas genauer kennenlernen.</div>
    </div>
    <div class="slide" title="input">
      <div class="question">Welche Lizenzen gelten als OER-Standard?*</div>
      <div class="answers">
        <label>
          Lösung: 
          <input type="text" name="question5">
        </label>
      </div>
      <div class="solution">Creative Commons Lizenzen</div>
      <div class="explanation">Creative Commons-Lizenzen eignen sich für den Bildungskontext besonders gut, da die Urheber*innen durch unterschiedliche Lizenzmodule differenziert entscheiden können, welche Rechte sie Dritten an ihrem Bildungsmaterial einräumen möchten.</div>
    </div>
    <div class="slide" title="single-choice">
      <div class="question">Was bedeutet bei Creative-Commons-Lizenzen das Kürzel "BY"?*</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question6" value="A">
          Die*der ursprüngliche Urheber*in muss bei Nutzung angegeben werden.
        </label>
        <label title="B">
          <input type="radio" name="question6" value="B">
          Das Material darf nur vollständig und unverändert genutzt werden.
        </label>
      </div>
      <div class="solution">A</div>
      <div class="explanation">Das Modul <b>BY</b> bedeutet, dass die*der Urheber*in des Werkes angegeben werden muss. Der Zusatz wird im Deutschen mit "Namensnennung" bezeichnet.<br>Das Modul <b>ND</b> (engl. No Derivatives, dt. keine Veränderung) gibt an, dass das Material nur vollständig und unverändert genutzt werden darf.</div>
    </div>
    <div class="slide" title="multiple-choice">
      <div class="question">Was muss bei der Nutzung eines Bilds beachtet werden, welches unter der Creative-Commons-Lizenz "CC BY SA" steht?*</div>
      <div class="answers">
        <label title="A">
          <input type="checkbox" name="question7" value="A">
          Urheber*inen müssen angeben werden
        </label>
        <label title="B">
          <input type="checkbox" name="question7" value="B">
          Bei einer Veränderung und anschließenden Wiederveröffentlichung des Bildes, muss es unter die gleiche Lizenz gestellt werden, wie das Original
        </label>
        <label title="C">
          <input type="checkbox" name="question7" value="C">
          Die Lizenz muss angegeben und der Lizenztext verlinkt werden
        </label>
      </div>
      <div class="solution">A,B,C</div>
      <div class="explanation"><b>BY</b> steht für die Namensnennung der Urheber*innen, <b>SA</b> (Share Alike) verlangt eine Weitergabe abgeleiteter Werke unter der gleicher Lizenz. Die Lizenz muss bei bei allen CC-Lizenzierten Werken angegeben und ein Link zum Lizenztext gesetzt werden.</div>
    </div>
    <div class="slide" title="single-choice">
      <div class="question">Verzichtet die*der Urheber*in durch eine offene Lizenz auf alle Rechte an ihrem*seinen Werk?*</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question8" value="A">
          Ja, ein Vorbehalt von Rechten ist nicht möglich
        </label>
        <label title="B">
          <input type="radio" name="question8" value="B">
          Nur bei der Wahl der Lizenz CC 0
        </label>
      </div>
      <div class="solution">B</div>
      <div class="explanation">Der*die Urheberin kann sich auch bei der Wahl einer offenen Lizenz bestimmte Rechte an ihrem*seinen Werk vorbehalten. Durch eine offene Lizenz werden lediglich Nutzungsrechte vergeben. Das Urheberrecht an sich ist unveräußerlich. Wählt die*der Urheber*in jedoch die Lizenz CC 0 (keine Rechte vorbehalten), verzichtet er*sie bewusst auf ihre*seine Rechte an dem Werk und bringt es in die Public Domain ein.</div>
    </div>
    <div class="slide" title="multiple-choice">
      <div class="question">Welche Vorteile haben offene Lernmaterialien gegenüber restriktiv geschützten?*</div>
      <div class="answers">
        <label title="A">
          <input type="checkbox" name="question9" value="A">
          Sie können nachgenutzt werden
        </label>
        <label title="B">
          <input type="checkbox" name="question9" value="B">
          Sie sind kostenlos
        </label>
        <label title="C">
          <input type="checkbox" name="question9" value="C">
          Auf Quellenangaben kann verzichtet werden
        </label>
      </div>
      <div class="solution">A,B</div>
      <div class="explanation">Als offen gelten Bildungsinhalte, wenn sie kostenlos verfügbar sind und unter einer Lizenz stehen, die die Weiterverwendung ermöglicht.</div>
    </div>
  </div>
  <div class="explanationContainer"></div>
  <div style="display:block;text-align:center;">
    <button class="quiz" id="previous">Vorherige Frage</button>
    <button class="quiz" id="submit">Ergebnis anzeigen</button>
    <button class="quiz" id="next">Nächste Frage</button>
  </div>
  <div id="pagination" style="float:right;margin-right:5px;margin-bottom:5px;"></div>
</div>
