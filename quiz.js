/* quiz script file */
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
