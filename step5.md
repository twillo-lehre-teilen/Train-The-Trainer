<h1 style="color:#ff8c00">Schritt 5: OER teilen</h1>


<h2>Alles klar? Überprüfen Sie Ihr Wissen zu OER und offenen Lizenzen mit folgendem Quiz</h2>
<br>

<script>
  // Script fürs Quiz
  (function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {        
          // variable to store the list of possible answers
          const answers = [];          
          // and for each available answer...
          for(letter in currentQuestion.answers){       
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
              );
          }
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
    function showResult(){
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
      // keep track of user's answers
      let numCorrect = 0;
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
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
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const pagination = document.getElementById('pagination');
    const myQuestions = [
    {
        question: "Wie lässt sich OER definieren?\*",
        answers: {
          a: "Bildungsmaterialien in jedwedem Medium, die unter einer offenen Lizenz veröffentlicht wurden und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können.",
          b: "Bildungsmaterialien, in digitalen Medien, die nicht urhebrrechtlich geschützt sind und und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können."
        },
        correctAnswer: "a",
        explanation: "Open Educational Resources (OER) sind Bildungsmaterialien jeglicher Art und in jedem Medium, die unter einer offenen Lizenz stehen. Eine solche Lizenz ermöglicht den kostenlosen Zugang sowie die kostenlose Nutzung, Bearbeitung und Weiterverbreitung durch Andere ohne oder mit geringfügigen Einschränkungen. Dabei bestimmen die Urhebenden selbst, welche Nutzungsrechte sie einräumen und welche Rechte sie sich vorbehalten" (Deutsche UNESCO-Kommision o.J.)"
      },
      {
        question: "Welches Merkmal gilt als eindeutiges Indiz für OER?",
        answers: {
          a: "digitales Format",
          b: "offene Lizenzierung",
          c: "kostenpflichtuge Nutzung"
        },
        correctAnswer: "b",
        explanation: "Ein zentrales Merkmal, das OER von urheberrechtlich geschützten Materialien unterscheidet, ist die offene Lizenz. Weitere (etwas unspezifischere) Merkmale sind ein offenes Dateiformat, die automatische Auffindbarkeit und die didaktische Kontextualisierung, die den einfacheren Umgang mit OER betonen (OER nutzen und bearbeiten, OER effizient auffinden, Einschätzbarkeit der Passung im eigenen Lehr-Lernkontext). In den folgenden Schritten dieser Lernreise werden Sie die genannten Merkmale noch etwas genauer kennenlernen."
      },
      {
        question: "Was bedeutet bei Creative-Commons-Lizenzen das Kürzel "BY"?\*",
        answers: {
          a: "Die\*der ursprüngliche Urheber\*in muss bei Nutzung angegeben werden.",
          b: "Das Material darf nur vollständig und unverändert genutzt werden.",
        },
        correctAnswer: "a",
        explanation: "Das Modul <b>BY</b> bedeutet, dass die\*der Urheber\*in des Werkes angegeben werden muss. Der Zusatz wird im Deutschen mit "Namensnennung" bezeichnet.<br>Das Modul <b>ND</b> (engl. No Derivatives, dt. keine Veränderung) gibt an, dass das Material nur vollständig und unverändert genutzt werden darf."
      },
      {
        question: "Was muss bei der Nutzung eines Bilds beachtet werden, welches unter der Creative-Commons-Lizenz "CC BY SA" steht?\*",
        answers: {
          a: "Urheber\*inen müssen angeben werden",
          b: "Bei einer Veränderung und anschließenden Wiederveröffentlichung des Bildes, muss es unter die gleiche Lizenz gestellt werden, wie das Original",
          c: "Die Lizenz muss angegeben und der Lizenztext verlinkt werden",
        },
        correctAnswer: "a",
        explanation: "<b>BY</b> steht für die Namensnennung der Urheber\*innen, <b>SA</b> (Share Alike) verlangt eine Weitergabe abgeleiteter Werke unter der gleicher Lizenz. Die Lizenz muss bei bei allen CC-Lizenzierten Werken angegeben und ein Link zum Lizenztext gesetzt werden."
      },
      {
        question: "Verzichtet die\*der Urheber\*in durch eine offene Lizenz auf alle Rechte an ihrem\*seinen Werk?\*",
        answers: {
          a: "Ja, ein Vorbehalt von Rechten ist nicht möglich",
          b: "Nur bei der Wahl der Lizenz CC 0",
        },
        correctAnswer: "b",
        explanation: "Der\*die Urheberin kann sich auch bei der Wahl einer offenen Lizenz bestimmte Rechte an ihrem\*seinen Werk vorbehalten. Durch eine offene Lizenz werden lediglich Nutzungsrechte vergeben. Das Urheberrecht an sich ist unveräußerlich. Wählt die\*der Urheber\*in jedoch die Lizenz CC 0 (keine Rechte vorbehalten), verzichtet er\*sie bewusst auf ihre\*seine Rechte an dem Werk und bringt es in die Public Domain ein."
      },
      {
        question: "Welche Vorteile haben offene Lernmaterialien gegenüber restriktiv geschützten?\*",
        answers: {
          a: "Sie können nachgenutzt werden",
          b: "Sie sind kostenlos",
          c: "Auf Quellenangaben kann verzichtet werden",
        },
        correctAnswer: "a",
        explanation: "Als offen gelten Bildungsinhalte, wenn sie kostenlos verfügbar sind und unter einer Lizenz stehen, die die Weiterverwendung ermöglicht."
      }
    ];
    // Kick things off
    buildQuiz();
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    // Show the first slide
    showSlide(currentSlide);
    // Event listeners
    submitButton.addEventListener('click', showResult);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
</script>

<div class="quiz-frame">
  <h1 class="quiz">Quiz zu OER und offenen Lizenzen</h1>
  <div class="quiz-container">
    <div id="quiz"></div>
  </div>
  <div id="results"></div>
  <div style="display:block;text-align:center;">
    <button class="quiz" id="previous">Vorherige Frage</button>
    <button class="quiz" id="submit">Ergebnis anzeigen</button>
    <button class="quiz" id="next">Nächste Frage</button>
  </div>
  <div id="pagination" style="float:right;margin-right:5px;margin-bottom:5px;"></div>
</div>
