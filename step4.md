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
   <button class="accordion">Getting Started: Installation</button>
   <div class="panel">
     <p>Um Ihnen den Umgang mit LiaScript so leicht wie möglich zu machen, empfehlen wir Ihnen den Texteditor <b>Atom</b> in Verbindung mit einem LiaScript Plugin zu nutzen. Auf diese Weise können Sie Ihre Kursstruktur auf dem Desktop erstellen, eine Vorschau ansehen und den Kurs erst dann öffentlich zugänglich machen, wenn Sie damit zufrieden sind. <br>

<b>Atom installieren:</b><br> Besuchen Sie die Seite <a aria-describedby="Link zum Atom-Download" href="https://atom.io/" target="_blank">https://atom.io/</a>, laden Sie Atom herunter und führen Sie die Installation aus.<br>
<br>
<b>LiaScript Plugin installieren:</b><br> Öffnen Sie Atom und wählen Sie in der Menüleiste oben unter <b>File</b> den Reiter <b>Settings</b>.

<figure style="align:middle;">
  <img src="images/file-settings.svg " alt="Screenshot: File - Settings auswählen" title="Screenshot: File - Settings auswählen"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. XXX: Screenshot: Atom Einstellungen</figcaption>
</figure>

In dem folgenden Fenster wählen Sie die Option <b>+Install</b> an und geben Sie <b>liascript-preview</b> in das Suchfeld ein. Erscheint das Plugin in den Suchergebnisse, starten Sie die Installation mit einem Klick auf den Button <b>install</b>.

<figure style="align:middle;">
  <img src="images/install_plugin.svg" alt="Screenshot: LiaScript Plugin installieren" title="Screenshot: LiaScript Plugin installieren"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. XXX: Screenshot: LiaScript Plugin installieren</figcaption>
</figure>
    </p>
  </div>
</div>
