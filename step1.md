<h1 style="color:#8b0000">Schritt 1: OER erkennen<h1>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<h2>Woran erkenne ich ob ein Material auch OER ist?</h2>

<table id="info">
  <tr>
    <th><i class="fa fa-info-circle" style="color:black"></i>   Info!</th>
  </tr>
  <tr>
    <td>Im ersten Schritt festigen Sie Ihr Wissen zu einem grundlegenden Merkmal von OER: Der offenen Lizenzierung. Der Fokus liegt hierbei auf den einzelnen Modulen des Creative Commons Lizenzsystems. Darüber hinaus werden die Grundlagen des Urheberrechts kurz für Sie zusammengefasst. Ziel der Einheit ist es, Sie dazu zu befähigen, OER von geschlossenen Bildungsmaterialien abzugrenzen.<br><br><b>Workload: 1-2 Stunden</b></td>
  </tr>
</table>

<div class="infobox">
  <p><i class="fa fa-info-circle" style="color:blue"></i>  <b>Info!</b>
    <br><br>
    Im ersten Schritt festigen Sie Ihr Wissen zu einem grundlegenden Merkmal von OER: Der offenen Lizenzierung. Der Fokus liegt hierbei auf den einzelnen Modulen des Creative Commons Lizenzsystems. Darüber hinaus werden die Grundlagen des Urheberrechts kurz für Sie zusammengefasst. Ziel der Einheit ist es, Sie dazu zu befähigen, OER von geschlossenen Bildungsmaterialien abzugrenzen.
    <br>
    <br>
    <b>Workload: 1-2 Stunden</b>
  </p>
</div>

In der Definition der UNESCO heißt es:

"Open Educational Resources (OER) are teaching, learning and research materials in any medium – digital or otherwise – that reside in the public domain or have been released under an open license that permits no-cost access, use, adaptation and redistribution by others with no or limited restrictions. OER form part of ‘Open Solutions’, alongside Free and Open Source software (FOSS), Open Access (OA), Open Data (OD) and crowdsourcing platforms" (<a href="https://en.unesco.org/themes/building-knowledge-societies/oer">UNESCO 2019</a>).

Die folgenden wesentlichen Aspekte können in dieser Definition hervorgehoben werden: OER sind <b>Bildungsmaterialien</b> sowie <b>Forschungsdaten</b> (in jedweder Form und jedwedem Medium) , die sich für den Einsatz im Lehr-Lernkontext eignen und kostenlos zugänglich sind. Nicht nur der <b>Einsatz</b> von OER im Lehr- oder Lernkontext ist erlaubt, sondern auch die <b>Bearbeitung und Anpassung der Materialien</b>. Auch eine <b>Veröffentlichung</b> der daraus neu entstandenen Versionen ist möglich.  Warum dies möglich ist, ergibt sich aus einer <b>offenen Lizenzierung</b>. Bildungsmaterialien, die mit einer offenen Lizenz ausgezeichnet oder als gemeinfrei gekennzeichnet sind, lassen diese Formen der Nutzung zu.

<table id="invisible">
  <tr>
    <td valign="middle" text-align="left" width="30%">
      <figure style="float:left;align:middle;">
        <img src="images/Offene Lizenz.svg" alt="Abb. 3: Offene Lizenz" title="Abb. 3: Offene Lizenz"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 3: Offene Lizenz</figcaption>
      </figure></td>
    <td valign="middle" text-align="left" width="70%">
      Durch eine offene Lizenz werden Dritten explizit <b>Nutzungsrechte</b> an Materialien eingeräumt. <b>Damit stellt die offene Lizenz das zentrale Merkmal von OER dar.</b> Die Entscheidung darüber, welche Verwendung eines Werks erlaubt werden soll, liegt allein bei der*dem Urheber*in:
    <br><br>
    <ul style="list-style-type:none">
      <li><i class="fa fa-check-circle" style="color:green"></i> bewahren, sprich lokal oder cloudbasiert speichern</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> teilen</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> in der eigene Lehre nutzen</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> mit eigenen Inhalten kombinieren oder mehrere Werke miteinander kombinieren</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> bearbeiten</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> angepasste Inhalte/Werke wiederveröffentlichen</li>
      <li><i class="fa fa-check-circle" style="color:green"></i> im kommerziellen Bereichen nutzen</li>
    </ul></td>
  </tr>
</table>

Im Bildungskontext wird insbesondere das <b>Creative Commons-Lizenzsystem</b> verwendet, da Urheber\*innen durch kleinteilige Lizenzbausteine (sog. Lizenzmodule) differenziert entscheiden können, welche Rechte sie Dritten an ihrem Bildungsmaterial einräumen möchten und unter welchen Bedingungen und/oder mit welchen Einschränkungen das entsprechende Werk genutzt werden darf.

<figure>
  <img src="images/CC_Lizenzmodule.svg" alt="Abb. 4: CC-Lizenzmodule" title="Abb. 4: CC-Lizenzmodule"/>
  <figcaption style="text-align:center;font-size:14px;">Abb. 4: CC-Lizenzmodule</figcaption>
</figure>

Die Lizenzierung wird dadurch vereinfacht, dass eine Vielzahl vorformulierter Lizenzen (mit bestimmten Modulkombinationen) gewählt werden können, die sich erheblich voneinander unterscheiden. So können Urheber\*innen mit ihrer Wahl einer CC-Lizenz die Nutzung ihrer Inhalte entweder relativ stark einschränken oder umfassend ermöglichen. Die u.s Liste gibt einen Überblick über gängige CC-Lizenzen.

<!-- Script fürs Accordion -->
<script>
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

<div >
   <button class="accordion"><img src="images/creative-commons_cc-zero.svg" style="float:left;margin:0 10px 0 0" alt="Abb. CC Zero Lizenz" title="CC Zero Lizenz" height="60"/> <a aria-describedby="Link zur CC Zero Lizenz" href="https://creativecommons.org/publicdomain/zero/1.0/deed.de" target="_blank">zur Lizenz</a></button>
   <div class="panel">
     <p><b>CC 0 = Ohne Bedingungen</b><br>Es bestehen keine Restriktionen im Hinblick auf die Verwendung, Veränderung und Verbreitung des Inhalts/Werks. Kopien und bearbeitete Versionen können auch kommerziell genutzt werden. Zwar sind keine Urheberangaben nötig, aus Wertschätzung wird die urhebende Person meist trotzdem genannt.
     </p>
   </div>
   <button class="accordion"><img src="images/creative-commons_cc-by.svg" style="float:left;margin:0 10px 0 0" alt="Abb. CC BY Lizenz" title="CC BY Lizenz" height="60"/> <a aria-describedby="Link zur CC BY Lizenz" href="https://creativecommons.org/licenses/by/4.0/deed.de" target="_blank">zur Lizenz</a></button>
   <div class="panel">
     <p><b>CC BY = Namensnennung</b><br>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks können auch kommerziell genutzt werden.</p>
   </div>
   <button class="accordion"><img src="images/creative-commons_cc-by-sa.svg" style="float:left;margin:0 10px 0 0" alt="Abb. CC BY SA Lizenz" title="CC BY SA Lizenz" height="60"/> <a aria-describedby="Link zur CC BY SA Lizenz" href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank">zur Lizenz</a></button>
   <div class="panel">
     <p><b>CC BY SA = Namensnennung und Weitergabe unter gleichen Bedingungen</b><br>Neben der korrekten Namensnennung der urhebenden Person ist es erforderlich, alle bearbeiteten Versionen des Inhalts/Werks unter derselben Lizenz zu veröffentlichen. Dies stellt sicher, dass die Inhalte auch weiterhin frei zugänglich bleiben.</p>
   </div>
   <button class="accordion"><img src="images/creative-commons_cc-by-nc.svg" style="float:left;margin:0 10px 0 0" alt="Abb. CC BY NC Lizenz" title="CC BY NC Lizenz" height="60"/> <a aria-describedby="Link zur CC BY NC Lizenz" href="https://creativecommons.org/licenses/by-nc/4.0/deed.de" target="_blank">zur Lizenz</a></button>
   <div class="panel">
     <p><b>CC BY NC = Namensnennung und nicht kommerziell</b><br>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks dürfen nicht kommerziell genutzt werden.</p>
   </div>
   <button class="accordion"><img src="images/creative-commons_cc-by-nd.svg" style="float:left;margin:0 10px 0 0" alt="Abb. CC BY ND Lizenz" title="CC BY ND Lizenz" height="60"/> <a aria-describedby="Link zur CC BY ND Lizenz" href="https://creativecommons.org/licenses/by-nd/4.0/deed.de" target="_blank">zur Lizenz</a></button>
   <div class="panel">
     <p><b>CC BY ND = Namensnennung und keine Bearbeitung</b><br>Diese Lizenz erlaubt Dritten die Weiterverbreitung des Inhalts/Werkes, kommerziell wie nicht-kommerziell, solange dies ohne Veränderungen und vollständig geschieht. Zudem muss die urhebende Person genannt werden.</p>
   </div>
   <button class="accordion"><img src="images/creative-commons_cc-by-nc-sa.svg" style="float:left;margin:0 10px 0 0" alt="Abb. CC BY NC SA Lizenz" title="CC BY NC SA Lizenz" height="60"/> <a aria-describedby="Link zur CC BY NC SA Lizenz" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de" target="_blank">zur Lizenz</a></button>
   <div class="panel">
      <p><b>CC BY NC SA = Namensnennung, nicht kommerziell und Weitergabe unter gleichen Bedingungen</b><br>Neben der korrekten Namensnennung der urhebenden Person ist es erforderlich, alle bearbeiteten Versionen des Materials unter derselben Lizenz zu veröffentlichen. Kopien und bearbeitete Versionen dürfen nicht kommerziell genutzt werden.</p>
   </div>
   <button class="accordion"><img src="images/creative-commons_cc-by-nc-nd.vg.svg" style="float:left;margin:0 10px 0 0" alt="Abb. CC BY NC ND Lizenz" title="CC BY NC ND Lizenz" height="60"/> <a aria-describedby="Link zur CC BY NC ND Lizenz" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de" target="_blank">zur Lizenz</a></button>
   <div class="panel">
     <p><b>CC BY NC ND = Namensnennung, nicht kommerziell und keine Bearbeitung</b><br>Diese Lizenz erlaubt Dritten die Weiterverbreitung des Inhalts/Werkes solange dies ohne Veränderungen und vollständig geschieht. Zudem muss die urhebende Person genannt werden. Kopien und bearbeitete Versionen dürfen nicht kommerziell genutzt werden.</p>
   </div>
</div>

Liste Bedingungen von Creative Commons-Lizenzen von twillo, lizenziert unter <a aria-describedby="Link zur Quelle (CreativeCommons Seite)" href="https://creativecommons.org/licenses/by/4.0/deed.de" target="_blank">CC BY (4.0)</a> basierend auf "<a aria-describedby="Link zur Quelle (Twillo)" href="https://www.oernds.de/oer/legal.html" target="_blank">Creative Commons (CC) Lizenzen</a>" von twillo, lizenziert unter <a aria-describedby="Link zur Quelle (CreativeCommons Seite)" href="https://creativecommons.org/licenses/by/4.0/deed.de" target="_blank">CC BY (4.0)</a>.

<div class="warningbox">
  <p><i class="fa fa-exclamation-triangle" style="color:black"></i>  <b>Wichtig!</b>
    <br><br>
    Da OER nur dann umfänglich in der Hochschullehre etabliert werden können, wenn sie ohne weitreichende Restriktionen, kostenfrei verwendet, verändert und weiterverbreitet werden können, ist die Wahl einer besonders offenen CC-Lizenz bei ihrer Erstellung sinnvoll. Dem pädagogischen – nicht dem rechtlichen – Sinn & Zweck von offenen Bildungsmaterialien entsprechen somit die Lizenzen CC 0, CC BY, CC BY SA weil sie die Bearbeitung und Nutzung zu jeglichen Zwecken ermöglichen (<a aria-describedby="Link zur Twillo Seite: Rechtliches
OER nutzen, teilen & erstellen" href="https://www.twillo.de/oer/web/rechtliches/">vgl. twillo 2021</a>) und damit dem OER-Gedanken im vollem Umfang enstsprechen.
  </p>
</div>

<br>
<h3>Gegenüberstellung: Die wichtigsten Unterschiede zwischen <i>urheberrechtlich</i> geschützten und <i>CC-lizenzierten</i> Materialien</h3>

<table id="normal">
  <tr>
    <th><b>Regularien des Urheberrechts</b></th>
    <th><b>Möglichkeiten offener Lizenzierung (am Beispiel Creative Commons)</b></th>
  </tr>
  <tr>
    <td valign="top">Das Urheberrecht ist ein sog. Ausschließlichkeitsrecht; ein Monopolrecht mit Erlaubnisvorbehalt. Das heißt, Urheber*innen besitzen in der Regel alle Rechte an von ihnen erstellten Inhalten, so dass nur sie diese wirtschaftlich verwerten und verbreiten dürfen. Grundsätzlich ist damit jede Verwendung eines urheberrechtlich geschützten Inhalts zustimmungs- und oftmals auch vergütungspflichtig (Ausnahmen hiervon stellen sogenannte „Schrankenregelungen“ dar: Zitatrecht, § 51 UrhG, Unterricht und Lehre § 60a UrhG).
      <br><br>
      Die Schrankenbestimmung für Unterricht und Lehre in § 60a UrhG sieht Erleichterungen für Nutzungen eines Lernmaterials in der Hochschule bis zu einem bestimmten Umfang vor (15 % bei Druckwerken; 5 Min bei Videos und Musik).  Nach dem Gesetzestext darf die Nutzung erfolgen:
      <br>
      <ol>
        <li>für Lehrende und Teilnehmer der jeweiligen Veranstaltung,</li>
        <li>für Lehrende und Prüfer*innen an derselben Bildungseinrichtung sowie</li>
        <li>für Dritte, soweit dies der Präsentation des Unterrichts oder von Unterrichts- oder Lernergebnissen an der Bildungseinrichtung dient.</li>
      </ol>
      Damit ist der Kreis der begünstigten Personen zwar relativ weit. Eine Nutzung durch Dritte ist aber erst möglich, wenn das konkret in Rede stehende Werk bereits für den Unterricht an der Bildungseinrichtung verwendet worden ist. Ferner können nur Personen mit einem institutionellen Bezug zu einer Bildungseinrichtung von der Schranke des § 60a UrhG Gebrauch machen.
    </td>
    <td valign="top">OER sind offen lizenziert und ermöglichen somit ihre freie, aber dennoch regulierte Verwendung mit verschiedenen Nutzungsgraden. Auf dem Portal twillo wird für eine offene Lizenzierung das standardisierte <b>Creative Commons - Lizenzsystem</b> empfohlen (vgl. u. a. <a aria-describedby="" href="https://www.unesco.de/sites/default/files/2018-01/DUK_Leitfaden_OER_in_der_Hochschulbildung_2015_barrierefrei-1.pdf">DUK 2015</a>, <a aria-describedby="" href="https://www.twillo.de/oer/legal.html">OER Portal Niedersachsen 2021</a>).
      <br><br>
      Offene Lizenzen wurden entwickelt, um die Rechte von Urheber*innen zu schützen und gleichzeitig Dritten die (Weiter-)Verwendung und zum Teil sogar Anpassung und Änderung ihrer Inhalte und Materialien zu ermöglichen. Die Wahl einer bestimmten offenen Lizenz (und damit verbunden bestimmte Möglichkeiten der Nachnutzung ihrer Inhalte) liegt hierbei bei den Urheber*innen selbst. Auf diese Weise werden die Einschränkungen des Urheberrechts überwunden; Urheber*innen bleiben aber gleichzeitig als solche anerkannt. Dies ist im Bereich von Wissenschaft und Forschung von besonderer Relevanz.
      <br><br>
      Die Nutzung von OER erfolgt also nicht im „rechtsfreien Raum“. Sie basiert auf rechtsgültigen Verträgen, die allerdings den Vorteil haben, dass sie nicht im Rahmen einer individuellen Transaktion (Vertragsverhandlung, Vertragsschluss), sondern „automatisch“ zustande kommen. Wird gegen die OER-Nutzungsvereinbarung verstoßen, sind Urheber*innen  rechtliche Möglichkeiten eröffnet, dagegen vorzugehen.
      <br><br>
      Die folgende Abbildung verdeutlicht die Offenheit von Materialien absteigend von der Lizenz CC 0 bis zum klassischen Urheberrechtsschutz (all rights reserved).  Auf der linken Seite wird dargestellt, welche Nachnutzungsmöglichkeiten die farbig hinterlegten Lizenzen bieten. Der dunkelgrüne Bereich stellt Lizenzen dar, die das Teilen und Verändern von Materialien für nicht-kommerzielle <b>und</b> kommerzielle Zwecke erlauben. Materialien unter CC0, CC BY und CC BY SA lassen sich somit den "freien kulturellen Werken" zuordnen.
      <br><br>
      Die Lizenzen des hellgrünen Bereichs erlauben ebenfalls das Teilen und Verändern, schließen jedoch die kommerzielle Nutzung aus.  Materialien unter den Lizenzen CC BY NC und CC BY NC SA gehören zum sog. "fair use" Konzept.
      <br><br>
      Die Lizenzen des gelben Bereichs ermöglichen keine Veränderung am Material. Materialien mit den Lizenzen CC BY ND und CC BY NC ND können somit als "Freeware" bezeichnet werden.
      <br>
      <figure>
        <img src="images/licence_skala.svg" alt="Abb. 5: Creative Commons License Spectrum von Shaddim, lizenziert unter CC BY (4.0)" title="Abb. 5: Creative Commons License Spectrum von Shaddim, lizenziert unter CC BY (4.0)"/>
        <figcaption style="text-align:center;font-size:14px;">Abb. 5: <a aria-describedby="Link zur Quelle der Abbildung 5" href="https://commons.wikimedia.org/wiki/File:Creative_commons_license_spectrum.svg">Creative Commons License Spectrum</a> von Shaddim, lizenziert unter <a aria-describedby="Link zur Quelle (CreativeCommons Seite)" href="https://creativecommons.org/licenses/by/4.0/deed.de" target="_blank">CC BY (4.0)</a></figcaption>
      </figure>
    </td>
  </tr>
</table>

<br>
<b>Weitere Informationen zur Vertiefung</b>
<ul>
  <li>Alle oben genannten Informationen können Sie im Bereich <a aria-describedby="" href="https://www.twillo.de/oer/legal.html">Rechtliches</a> auf twillo nachlesen.</li>
  <li>CC-Lizenzen auf einen Blick finden Sie z.B. in folgendem Handzettel der Martin-Luther-Universität-Wittenberg: <a ahref="https://blog.llz.uni-halle.de/files/2018/11/Flyer_CC-CheatSheet_web.pdf">https://blog.llz.uni-halle.de/files/2018/11/Flyer_CC-CheatSheet_web.pdf</a>.</li>
  <li>Die wichtigsten Aspekte zum Thema Urheberrecht und offene Lizenzierung von Materialien finden Sie in folgendem Video von Hirsch (2020)</li>
</ul>

<figure>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/E955up7vtCk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen name="Urheberrecht von und für Nicht-Jurist:innen"></iframe>
  <figcaption style="text-align:center;font-size:14px;">Video 1: <a aria-describedby="Link zum Video (YouTube)" href="https://www.youtube.com/watch?v=E955up7vtCk&ab_channel=NeleHirsch">Urheberrecht für Nicht-Jurist:innen</a> von Nele Hirsch, lizenziert unter <a aria-describedby="Link zur Seite (Creative Commons)" href="https://creativecommons.org/publicdomain/zero/1.0/">CC 0 (1.0)</a></figcaption>
</figure>

---
<script>
  const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  }
  ];
  
  function buildQuiz(){
  /* variable to store the HTML output */
    const output = [];

  /* for each question... */
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

   /*variable to store the list of possible answers*/
        const answers = [];

   /* and for each available answer...*/
        for(letter in currentQuestion.answers){

   /* ...add an HTML radio button */
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
               ${letter} :
               ${currentQuestion.answers[letter]}
             </label>`
           );
         }

   /* add this question and its answers to the output*/
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  /* finally combine our output list into one string of HTML and put it on the page */
  quizContainer.innerHTML = output.join('');
}

function showResults(){

  /* gather answer containers from our quiz */
  const answerContainers = quizContainer.querySelectorAll('.answers');

  /* keep track of user's answers */
  let numCorrect = 0;

  /* for each question... */
  myQuestions.forEach( (currentQuestion, questionNumber) => {

   /* find selected answer */
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

   /* if answer is correct */
    if(userAnswer === currentQuestion.correctAnswer){
      /* add to the number of correct answers */
      numCorrect++;

   /* color the answers green */
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    /* if answer is wrong or blank */
    else{
      /* color the answers red */
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  /* show number of correct answers out of total */
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

/* display quiz right away */
buildQuiz();

/* on submit, show results */
submitButton.addEventListener('click', showResults);

</script>
