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

<br>

<h3> 1. Fahrplan erstellen</h3>

Didaktische Planung und Strukturierung

Bei der Erstellung komplexer Lektionen oder Kurse kann ein vorab erstellter Fahrplan behilflich sein. Überlegen Sie sich zunächst, um welche Granularität es sich bei Ihrem OER-Projekt handelt. Skizzieren Sie, was Sie konkret planen und welche Inhalte und Materialien dafür erstellt oder (neu-)aufbereitet werden müssen.

<table id="invisible">
  <tr>
    <td valign="middle" text-align="left" width="60%">
      <figure style="float:left;align:middle;">
        <img src="images/Obstkiste_kleinteiliges_Lehrmaterial.svg" alt="kleinteiliges Lehrmaterial" title="kleinteiliges Lehrmaterial" width="160" height="145"/>
      </figure>
    </td>
    <td valign="middle" text-align="left" width="40%">
      Kleinteiliges Lehrmaterial: Erklärvideo, Text, Audio
    </td>
  </tr>
  <tr>
    <td valign="middle" text-align="left" width="60%">
      <figure style="float:left;align:middle;">
        <img src="images/Obstkiste_aufgabenorientiertes_Material.svg" alt="aufgabenorientiertes Material" title="aufgabenorientiertes Material"/>
      </figure>
    </td>
    <td valign="middle" text-align="left" width="40%">
      Aufgabenorientierte Materialien: Erklärvideo + Aufgaben, Text + Arbeitsauftrag, Audio + Quiz
    </td>
  </tr>
  <tr>
    <td valign="middle" text-align="left" width="60%">
      <figure style="float:left;align:middle;">
        <img src="images/Obstkiste_Lektion.svg" alt="Lektion" title="Lektion"/>
      </figure>
    </td>
    <td valign="middle" text-align="left" width="40%">
      Lektionen: thematisch geschlossene Einheiten
    </td>
  </tr>
  <tr>
    <td valign="middle" text-align="left" width="60%">
      <figure style="float:left;align:middle;">
        <img src="images/Obstkiste_Kurs.svg" alt="Kurs" title="Kurs"/>
      </figure>
    </td>
    <td valign="middle" text-align="left" width="40%">
      Kurse: Gesamtszenarien
    </td>
  </tr>
</table>



<table id="normal">
  <tr>
    <th>Inhaltliche Aspekte</th>
    <th>Lernziel</th>
    <th>Lernformen</th>
  </tr>
  <tr>
    <td valign="top"><b>Sichtung Ihres Materials und Abgrenzung zu digitalisierender Inhalte</b></td>
    <td valign="top">Die TN verschaffen sich einen Überblick über vorhandene Inhalte und Materialien eines bestehenden Kurses.<br><br>Zudem identifizieren Sie die innerhalb des Kurses genutzten Formate, Materialarten und Aufgabenstellungen.</td>
    <td valign="top"></td>
  </tr>
  <tr>
    <td valign="top"><b>Didaktische Planung von Online Szenarien</b></td>
    <td valign="top">Die Teilnehmenden überprüfen, inwiefern die Methoden, die sich in Ihren Materialien finden, auch für ein digitales Lehr-/Lernsetting geeignet sind. Sie lernen (neue) Methoden für die Gestaltung aktivierender Online-Lehre kennen und passen Methoden von Präsenzveranstaltungen ggf. an.</td>
    <td valign="top">Aufgabe:<br><br>
    Notieren Sie in Ihrer Materialien-Übersicht, welche Methoden sich für die Erarbeitung der jeweiligen Inhalte sich in einem digitalen Setting eignen könnten. Nutzen Sie hierfür wenn nötig das folgende Methodenglossar<br><br>
    Methodenglossar: mit Hinweis, dass sich alles ändern kann und "ohne Gewähr"<br><br>
    offline → online<br><br>
    synchron → asynchron</td>
  </tr>
  <tr>
    <td valign="top"><b>Transfer in OER Formate</b></td>
    <td valign="top">Die Teilnehmenden erlernen wichtige Aspekte, die bei der Aufbereitung von Materialien entlang der Merkmale von OER zu beachten sind. Sie setzen das Erlernte während der Aufbereitung ihrer eigenen Material um. </td>
    <td valign="top">Aufgabe 1:<br><br>
    Gehen Sie Ihre Materialien grundlich durch. Prüfen Sie, welche Inhalte Ihres Materials nicht von Ihnen selbst stammen.<br><br>
    Sie haben urheberrechtlich geschütztes Material verwendet? → geschützte Inhalte ersetzen oder kenntlich machen → Zitation<br><br>
    Sie haben CC-lizenziertes Material verwendet? → Nutzungsbedingungen prüfen, Lizenzhinweise einfügen (TULLU)<br><br>
    https://tibhannover.gitlab.io/oer/oer-wizard/html/wizard-modal.html<br><br>
    Achtung!!!! Fremdmaterial bei Software! (Bsp. Powtoon) Anwendungsbeispiel: Stellen Sie sich vor, Jemand zahlt einen Premiumaccount bei Powtoon und nutzt Urhg Animationen/Designs → bei Nachlizenzierung.<br><br><br>
    Aufgabe 2:<br><br>
    Lizenzieren Sie Ihre Materialien → Auswahl einer Lizenz, Prüfung, ob diese mit den verwendeten Inhalten Dritter konform ist. (Lizenzhinweis eigene Werke)<br><br><br>
    Aufgabe 3:<br><br>
    Überführen Sie Ihre Materialien in offene Formate</td>
  </tr>
  <tr>
    <td valign="top"><b>Offenes Dateiformat</b></td>
    <td valign="top">Die Bedeutung von offenen Dateiformaten bei OER</td>
    <td valign="top">Neben dem Merkmal der offenen Lizenzierung, gibt es noch eine weiteres Merkmal, das hier als unspezifisch bezeichnet wird und somit grundlegend für eine einfache Handhabung im Sinne einer OER-Practices von Bedeutung ist. Unspezifisch meint hier, dass der Aspekt offenes Dateiformat nicht zwangsläufig erfüllt sein muss, um als OER zu gelten, es erleichtert jedoch mögliche Bearbeitungen und geringfügige Anpassungen an den Materialien.</td>
  </tr>
</table>

---
<center>
  <h1>Lessons Learned/Checkliste</h1>
</center>

<b>Mögliche Stolpersteine bei der Aufbereitung von OER</b>

<div>
   <button class="accordion">Muss ich immer eine Lizenz angeben?</button>
   <div class="panel">
       
   </div>
   <button class="accordion">Ich stelle ein Lehrvideo zur Verfügung. Was gilt hier als offenes Dateiformat?</button>
   <div class="panel">
     
   </div>
   <button class="accordion">In meinem Material befinden sich Design-Elemente einer kostenpflichtigen Anwendung. Darf ich das Material nun unter eine CC-Lizenz stellen?</button>
   <div class="panel">
     
   </div>
   <button class="accordion">Kann ich fremde Inhalte oder Materialien von der Lizenz, die ich ausgewählt habe, ausnehmen?</button>
   <div class="panel">
     
   </div>
   <button class="accordion">Muss ich wirklich jedes einzelne Material mit einer CC-Lizenz versehen, obwohl mein gesamter Kurs unter einer CC Lizenz steht?</button>
   <div class="panel">
     
   </div>
   <button class="accordion">Was ist unter offene Dateiformate zu verstehen?</button>
   <div class="panel">
     
   </div>
   <button class="accordion">Was tue ich, wenn ich ein Material verwende, bei dem die Lizenzversion im Lizenzhinweis nicht vorhanden ist?</button>
   <div class="panel">
     
   </div>
   <button class="accordion">Welche Angaben muss ich beim Lizenzhinweis angeben?</button>
   <div class="panel">
    
   </div>
   <button class="accordion">Wie gehe ich mit Zitaten aus urheberrechtlich geschützten Materialien um?</button>
   <div class="panel">
    
   </div>
</div>

<h2>Checkpunkte</h2>

<ol>
  <li>Wurde eine Übersicht (Advance Organizer, Übersicht im Tabellenformat oder grafische Übersicht) hinterlegt?</li>
</ol>

Formale Kriterien:

<ol>
  <li>Werden alle fremden Inhalte als solche gekennzeichnet?</li>
  <li>sind alle Materialien richtig gekennzeichnet entsprechend Tullu</li>
  <li>offene Dateiformate verwendet</li>
</ol>

<table id="invisible">
  <tr>
    <td width="25%">
      <figure>
        <img src="images/open_format.svg" alt="Abb. X: Offenes Dateiformat" title="Abb. X: Offenes Dateiformat"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. X: Offenes Dateiformat</figcaption>
      </figure>
    </td>
    <td width="75">
      <b>Die Bereitstellung des Materials in einem möglichst offenen Dateiformat:</b><br><br>
      Wenn offene Bildungsmaterialen in offenen Dateiformaten bereitgestellt werden, lassen sie sich niedrigschwellig bearbeiten. Beispielsweise kann dies bedeuten, dass bei Textdokumenten das Format DOCX dem Format PDF vorzuziehen ist (Editierbarkeit), während das Format odt Vorteile gegenüber dem Format doc besitzt (Offener Standard). Möglich ist es auch, Bildungsmaterialien in mehreren Dateiformaten bereitzustellen. Dies bietet sich auch an, wenn Kompatibilitätsprobleme zu befürchten sind. So etwa kann ein Arbeitsblatt im odt Format bereitgestellt werden um die Editierbarkeit zu gewährleisten und zusätzlich im PDF Format, um das Layout auch in verschiedenen Systemen oder Anwendungen zu erhalten.<br><br>
      Offenes Format für Video → MP4, MPEG
    </td>
  </tr>
</table>


