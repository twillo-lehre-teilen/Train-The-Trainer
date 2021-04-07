<h1 style="color:#ff8c00">Schritt 5: OER teilen</h1>

<h2 style="margin-bottom:20px">Alles klar? Überprüfen Sie Ihr Wissen zu OER und offenen Lizenzen mit folgendem Quiz</h2>

<script>
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
      // gather containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
      // find selected answer
      const answerContainer = answerContainers[currentSlide];
      const selector = `input[name=question${currentSlide}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if(userAnswer === myQuestions[currentSlide].correctAnswer){
        // color the answers green
        answerContainers[currentSlide].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else
        // color the answers red
        answerContainers[currentSlide].style.color = 'red';
      }
      // show explanation of current question
      resultsContainer.innerHTML = `<b>Ergänzungen zur Antwort:</b><br> ${myQuestions[currentSlide].explanation}`;
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
        explanation: "abcdef"
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
