<h1 style="color:#ff8c00">Schritt 5: OER teilen</h1>

<h2 style="margin-bottom:20px">Alles klar? Überprüfen Sie Ihr Wissen zu OER und offenen Lizenzen mit folgendem Quiz</h2>

<script>
  (function(){
    /* result funtion */
    function showResult(){
      /* reset previous selections */
      slides[currentSlide].querySelector(".answers").querySelectorAll("label").forEach( (currentLabel, labelNumber) => { 
          currentLabel.style.color = "#0A1F40";
      });
      /* find selected answers */
      const answerContainer = slides[currentSlide].querySelector(".answers");
      const selector = `input:checked`;
      const userAnswers = (answerContainer.querySelectorAll(selector) || {});
      userAnswers.forEach( (currentAnswer, answerNumber) => {
        userAnswers[answerNumber] = currentAnswer.value;
      });
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
      /* if multiple answers correct, mark unchecked correct answers red */
      if (correctAnswers.length > 1) {
        correctAnswers.forEach( (currentAnswer, answerNumber) => {
          if (!userAnswers.includes(currentAnswers)) {
            answers.forEach( (currentLabel, labelNumber) => {
              if (currentAnswer === currentLabel.title){  
                currentLabel.style.color = "red";
              }
            });
          }
        });
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
    <div class="slide" name="multiple-choice">
      <div class="question">Wie lässt sich OER definieren?*</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question1" value="A">
          Bildungsmaterialien in jedwedem Medium, die unter einer offenen Lizenz veröffentlicht wurden und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können.
        </label>
        <label title="B">
          <input type="radio" name="question1" value="B">
          Bildungsmaterialien, in digitalen Medien, die nicht urhebrrechtlich geschützt sind und und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können.
        </label>
      </div>
      <div class="solution">A</div>
      <div class="explanation">"Open Educational Resources (OER) sind Bildungsmaterialien jeglicher Art und in jedem Medium, die unter einer offenen Lizenz stehen. Eine solche Lizenz ermöglicht den kostenlosen Zugang sowie die kostenlose Nutzung, Bearbeitung und Weiterverbreitung durch Andere ohne oder mit geringfügigen Einschränkungen. Dabei bestimmen die Urhebenden selbst, welche Nutzungsrechte sie einräumen und welche Rechte sie sich vorbehalten" (<a aria-describedby="Link zur OER Seite der deutschen Unesco-Kpmmission" href="https://www.unesco.de/bildung/open-educational-resources">Deutsche UNESCO-Kommision o.J.</a>)</div>
    </div>
    <div class="slide" name="multiple-choice">
      <div class="question">Welches Merkmal gilt als eindeutiges Indiz für OER?</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question2" value="A">
          digitales Format
        </label>
        <label title="B">
          <input type="radio" name="question2" value="B">
          offene Lizenzierung
        </label>
        <label title="C">
          <input type="radio" name="question2" value="C">
          kostenpflichtige Nutzung
        </label>
      </div>
      <div class="solution">B</div>
      <div class="explanation">Ein zentrales Merkmal, das OER von urheberrechtlich geschützten Materialien unterscheidet, ist die offene Lizenz. Weitere (etwas unspezifischere) Merkmale sind ein offenes Dateiformat, die automatische Auffindbarkeit und die didaktische Kontextualisierung, die den einfacheren Umgang mit OER betonen (OER nutzen und bearbeiten, OER effizient auffinden, Einschätzbarkeit der Passung im eigenen Lehr-Lernkontext). In den folgenden Schritten dieser Lernreise werden Sie die genannten Merkmale noch etwas genauer kennenlernen.</div>
    </div>
    <div class="slide" name="multiple-choice">
      <div class="question">Was bedeutet bei Creative-Commons-Lizenzen das Kürzel "BY"?*</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question3" value="A">
          Die*der ursprüngliche Urheber*in muss bei Nutzung angegeben werden.
        </label>
        <label title="B">
          <input type="radio" name="question3" value="B">
          Das Material darf nur vollständig und unverändert genutzt werden.
        </label>
      </div>
      <div class="solution">A</div>
      <div class="explanation">Das Modul <b>BY</b> bedeutet, dass die*der Urheber*in des Werkes angegeben werden muss. Der Zusatz wird im Deutschen mit "Namensnennung" bezeichnet.<br>Das Modul <b>ND</b> (engl. No Derivatives, dt. keine Veränderung) gibt an, dass das Material nur vollständig und unverändert genutzt werden darf.</div>
    </div>
    <div class="slide" name="multiple-choice">
      <div class="question">Was muss bei der Nutzung eines Bilds beachtet werden, welches unter der Creative-Commons-Lizenz "CC BY SA" steht?*</div>
      <div class="answers">
        <label title="A">
          <input type="checkbox" name="question4" value="A">
          Urheber*inen müssen angeben werden
        </label>
        <label title="B">
          <input type="checkbox" name="question4" value="B">
          Bei einer Veränderung und anschließenden Wiederveröffentlichung des Bildes, muss es unter die gleiche Lizenz gestellt werden, wie das Original
        </label>
        <label title="C">
          <input type="checkbox" name="question4" value="C">
          Die Lizenz muss angegeben und der Lizenztext verlinkt werden
        </label>
      </div>
      <div class="solution">A,B,C</div>
      <div class="explanation"><b>BY</b> steht für die Namensnennung der Urheber*innen, <b>SA</b> (Share Alike) verlangt eine Weitergabe abgeleiteter Werke unter der gleicher Lizenz. Die Lizenz muss bei bei allen CC-Lizenzierten Werken angegeben und ein Link zum Lizenztext gesetzt werden.</div>
    </div>
    <div class="slide" name="multiple-choice">
      <div class="question">Verzichtet die*der Urheber*in durch eine offene Lizenz auf alle Rechte an ihrem*seinen Werk?*</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question5" value="A">
          Ja, ein Vorbehalt von Rechten ist nicht möglich
        </label>
        <label title="B">
          <input type="radio" name="question5" value="B">
          Nur bei der Wahl der Lizenz CC 0
        </label>
      </div>
      <div class="solution">B</div>
      <div class="explanation">Der*die Urheberin kann sich auch bei der Wahl einer offenen Lizenz bestimmte Rechte an ihrem*seinen Werk vorbehalten. Durch eine offene Lizenz werden lediglich Nutzungsrechte vergeben. Das Urheberrecht an sich ist unveräußerlich. Wählt die*der Urheber*in jedoch die Lizenz CC 0 (keine Rechte vorbehalten), verzichtet er*sie bewusst auf ihre*seine Rechte an dem Werk und bringt es in die Public Domain ein.</div>
    </div>
    <div class="slide" name="multiple-choice">
      <div class="question">Welche Vorteile haben offene Lernmaterialien gegenüber restriktiv geschützten?*</div>
      <div class="answers">
        <label title="A">
          <input type="radio" name="question1" value="A">
          Sie können nachgenutzt werden
        </label>
        <label title="B">
          <input type="radio" name="question1" value="B">
          Sie sind kostenlos
        </label>
        <label title="C">
          <input type="radio" name="question1" value="C">
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
