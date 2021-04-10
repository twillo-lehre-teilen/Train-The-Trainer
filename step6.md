<h1 style="color:#000000">Schritt 6: Reflexion</h1>

<script>
  (function(){
    /* result funtion */
    function showResult(){
      /* find selected answer */
      const answerContainer = slides[currentSlide].querySelector(".answers");
      const selector = `input:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      /* if answer is correct */
      if(userAnswer === slides[currentSlide].querySelector(".solution").innerHTML){
        // color the answers green
        slides[currentSlide].querySelector(".answers").querySelector(selector).style.color = 'lightgreen';
        showExplanation(True);      
      }
      /* if answer is blank */
      else if (userAnswer == null){
        /* do nothing */
      }
      /* if answer is wrong */
      else{
        // color the answers red
        slides[currentSlide].querySelector(".answers").querySelector(selector).style.color = 'red';
        showExplanation(True);
      }
    }
    /* explanation function */
    function showExplanation(bool) {
      if (bool) {
        explanationContainer.innerHTML = `<b>Ergänzungen zur Antwort:</b><br> ${slides[currentSlide].querySelector(".explanation").innerHTML}`;
      }
      else {
        explanationContainer.innerHTML = ``;
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
    previousButton.addEventListener("click", showPreviousSlide);
    previousButton.addEventListener("click", showExplanation(False));
    nextButton.addEventListener("click", showNextSlide);
    nextButton.addEventListener("click", showExplanation(False));
  })();
</script>

<div class="quiz-frame">
  <h1 class="quiz">Quiz zu OER und offenen Lizenzen</h1>
  <div class="quiz-container">
    <div class="slide" name="multiple-choice">
      <div class="question">Wie lässt sich OER definieren?*</div>
      <div class="answers">
        <label>
          <input type="radio" name="question1" value="A">
          Bildungsmaterialien in jedwedem Medium, die unter einer offenen Lizenz veröffentlicht wurden und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können.
        </label>
        <label>
          <input type="radio" name="question1" value="B">
          Bildungsmaterialien, in digitalen Medien, die nicht urhebrrechtlich geschützt sind und und ohne weitreichende Restriktionen genutzt und weiterverbreitet werden können.
        </label>
      </div>
      <div class="solution">A</div>
      <div class="explanation">Darum.</div>
    </div>
    <div class="slide" name="multiple-choice">
      <div class="question">Test-Frage</div>
      <div class="answers">
        <label>
          <input type="radio" name="question2" value="A">
          Test-Antwort: A
        </label>
        <label>
          <input type="radio" name="question2" value="B">
          Test-Antwort: B
        </label>
      </div>
      <div class="solution">A</div>
      <div class="explanation">Weil A halt richtig ist.</div>
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
