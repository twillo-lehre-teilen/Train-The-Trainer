/* quiz script file */
/* reset previous selections */
        slides[currentSlide].querySelector(".answers").querySelectorAll("label").querySelectorAll('[title="description"').forEach( (description, descriptionNumber) => { 
            descriptionNumber.style.color = yellow;
        });
        /* get correct answers */
        const correctAnswers = slides[currentSlide].querySelector(".solution").innerHTML.split(",");
        /* find user-answers */
        var userAnswers = [];
        const labelContainer = slides[currentSlide].querySelector(".answers").querySelectorAll("label")
        labelContainer.forEach( (label, labelNumber) => {
          let dropzoneContainer = label.querySelectorAll(".dropzone");
          dropzoneContainer.forEach( (dropzone, dropzoneNumber) => {
            if (dropzone.title = "drop"){
              let img = dropzone.getElementsByTagName('img');
              if(img.length >= 1){
                userAnswers.push(img[0].title);
              }
              else {
                userAnswers.push("empty");
              }
            }
            else {
              /* do nothing */
            }
          });  
        });
        /* compare answers */
        userAnswers.forEach( (answer, answerNumber) => {
          if (answer == correctAnswers[answerNumber]){
            /* if answer is right */
            labelContainer[answerNumber].querySelector('[title="description"]').style.color = lightgreen;
          }
          else if (answer == "empty"){
            /* do nothing */
          }
          else {
            /* if answer is wrong */
            labelContainer[answerNumber].querySelector('[title="description"]').style.color = red;
          }
        });
