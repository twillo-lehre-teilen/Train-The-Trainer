# 1.3 Urheberrecht und offene Lizenzen 

### Starre Regularien des Urheberrechts

Das Urheberrecht stellt ein Ausschließlichkeitsrecht dar und gilt somit als ein Monopolrecht. Das heißt, dass Urheber*innen die ausschließlichen Rechte insbesondere zur wirtschaftlichen Verwertung und Verbreitung eines von Ihnen erstellten Inhalts oder Werkes besitzen. Grundsätzlich ist damit jede Verwendung eines urheberrechtlich geschützten Inhalts zustimmungs- und oftmals auch vergütungspflichtig (Ausnahmen hiervon stellen sogenannte „Schrankenregelungen“ dar).

Das Urheberrechts-Wissensgesellschafts-Gesetz eröffnet keine Nutzungsmöglichkeiten für offene Bildungsmaterialien. Es regelt u.a. erleichterte Nutzungen im Bereich Unterricht, Wissenschaft und Forschung, sieht aber keine Nutzungen vor, die denen bei offenen Lizenzen entsprechen. Die danach zulässigen Nutzungen sind in der Regel mengenmäßig begrenzt (z.B. eine bestimmte Seitenanzahl) und gehen häufig auch mit Vergütungspflichten einher.

Im Gegensatz dazu ermöglichen offene Lizenzen die rechtskonforme, aber unkomplizierte Einräumung von Nutzungsrechten innerhalb des geltenden Urheberrechts, insbesondere für die Weiterlizenzierung von Inhalten, und zwar auch im Hochschulkontext (vgl. u. a. <a aria-describedby="Quellenlink Unesco 2019" href="https://www.unesco.de/sites/default/files/2018-01/DUK_Leitfaden_OER_in_der_Hochschulbildung_2015_barrierefrei-1.pdf" target="_blank">DUK 2015</a>, <a aria-describedby="Link zum OER Portal Niedersachsen" href="https://www.oernds.de/oer/legal.html" target="_blank">OER Portal Niedersachsen 2021</a>).

### Die Mehrwerte offener Lizenzen

Offene Lizenzen wurden entwickelt, um die Rechte von Urheber*innen zu schützen und gleichzeitig Dritten die (Weiter-)Verwendung und zum Teil sogar Anpassung und Änderung ihrer Inhalte und Materialien zu ermöglichen. Die Wahl einer bestimmten offenen Lizenz (und damit verbunden bestimmte Möglichkeiten der Nachnutzung ihrer Inhalte) liegt hierbei bei den Urheber*innen selbst. Auf diese Weise werden die Einschränkungen des Urheberrechts überwunden; Urheber*innen bleiben aber gleichzeitig als solche anerkannt. Dies ist im Bereich von Wissenschaft und Forschung von besonderer Relevanz.

OER sind offen lizenziert und ermöglichen somit ihre freie, aber dennoch regulierte Verwendung mit verschiedenen Nutzungsgraden. Auf dem Portal twillo wird für eine offene Lizenzierung das standardisierte <B>Creative Commons - Lizenzsystem</B> empfohlen (vgl. u. a. <a aria-describedby="Quellenlink Unesco 2019" href="https://www.unesco.de/sites/default/files/2018-01/DUK_Leitfaden_OER_in_der_Hochschulbildung_2015_barrierefrei-1.pdf" target="_blank">DUK 2015</a>, <a aria-describedby="Link zum OER Portal Niedersachsen" href="https://www.oernds.de/oer/legal.html" target="_blank">OER Portal Niedersachsen 2021</a>)

### Die Bedingungen von Creative Commons-Lizenzen

Es existiert eine Vielzahl unterschiedlicher CC-Lizenzen, die sich erheblich voneinander unterscheiden. So können Urheber*innen mit ihrer Wahl einer CC-Lizenz die Nutzung ihrer Inhalte entweder relativ stark einschränken oder umfassend ermöglichen. Die u.s Liste gibt einen Überblick über gängige CC-Lizenzen.

&#9888;&#65039; <b>Wichtig:</b>Da OER nur dann umfänglich in der Hochschullehre etabliert werden können, wenn sie ohne weitreichende Restriktionen, kostenfrei verwendet, verändert und weiterverbreitet werden können, ist die Wahl einer besonders offenen CC-Lizenz bei ihrer Erstellung sinvoll. Dem pädagogischen – nicht dem rechtlichen – Sinn & Zweck von offenen Bildungsmaterialien entsprechen somit die Lizenzen CC 0, CC BY, CC BY SA, weil sie die Bearbeitung und Nutzung zu jeglichen Zwecken ermöglichen (<a aria-describedby="Link zum OER Portal Niedersachsen" href="https://www.oernds.de/oer/legal.html" target="_blank">OER Portal Niedersachsen 2021</a>).

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

<div>
   <button class="accordion">CC 0 = Ohne Bedingungen<img src="images/creative-commons_cc-zero.svg" alt="Abb. CC Zero Lizenz" titel="CC Zero Lizenz" height="60"/></button>
   <div class="panel">
      <p>Es bestehen keine Restriktionen im Hinblick auf die Verwendung, Veränderung und Verbreitung des Inhalts/Werks. Kopien und bearbeitete Versionen können auch kommerziell genutzt werden. Zwar sind keine Urheberangaben nötig, aus Wertschätzung wird die urhebende Person meist trotzdem genannt. 
        <br> <a aria-describedby="Link zur CC Zero Lizenz" href="https://creativecommons.org/publicdomain/zero/1.0/deed.de" target="_blank">Zur Lizenz</a></p>
   </div>
   <button class="accordion">CC BY = Namensnennung<img src="images/creative-commons_cc-by.svg" alt="Abb. CC BY Lizenz" titel="CC BY Lizenz" height="60"/></button>
   <div class="panel">
      <p>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks können auch kommerziell genutzt werden.
     <br> <a aria-describedby="Link zur CC BY Lizenz" href="https://creativecommons.org/licenses/by/4.0/deed.de" target="_blank">Zur Lizenz</a></p>
   </div>
   <button class="accordion">CC BY SA = Namensnennung und Weitergabe unter gleichen Bedingungen<img src="images/creative-commons_cc-by-sa.svg" alt="Abb. CC BY SA Lizenz" titel="CC BY SA Lizenz" height="60"/></button>
   <div class="panel">
      <p>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks können auch kommerziell genutzt werden.
     <br> <a aria-describedby="Link zur CC BY SA Lizenz" href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank">Zur Lizenz</a></p>
   </div>
   <button class="accordion">CC BY NC = Namensnennung und nicht kommerziell <img src="images/creative-commons_cc-by-nc.svg" alt="Abb. CC BY NC Lizenz" titel="CC BY NC Lizenz" height="60"/></button>
   <div class="panel">
      <p>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks können auch kommerziell genutzt werden.
     <br> <a aria-describedby="Link zur CC BY NC Lizenz" href="https://creativecommons.org/licenses/by-nc/4.0/deed.de" target="_blank">Zur Lizenz</a></p>
   </div>
   <button class="accordion">CC BY ND = Namensnennung und keine Bearbeitung<img src="images/creative-commons_cc-by-nd.svg" alt="Abb. CC BY ND Lizenz" titel="CC BY ND Lizenz" height="60"/></button>
   <div class="panel">
      <p>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks können auch kommerziell genutzt werden.
     <br> <a aria-describedby="Link zur CC BY ND Lizenz" href="https://creativecommons.org/licenses/by-nd/4.0/deed.de" target="_blank">Zur Lizenz</a></p>
   </div>
   <button class="accordion">CC BY NC SA = Namensnennung, nicht kommerziell und Weitergabe unter gleichen Bedingungen<img src="images/creative-commons_cc-by-nc-sa.svg" alt="Abb. CC BY NC SA Lizenz" titel="CC BY NC SA Lizenz" height="60"/></button>
   <div class="panel">
      <p>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks können auch kommerziell genutzt werden.
     <br> <a aria-describedby="Link zur CC BY NC SA Lizenz" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de" target="_blank">Zur Lizenz</a></p>
   </div>
   <button class="accordion">CC BY NC ND = Namensnennung, nicht kommerziell und keine Bearbeitung<img src="images/creative-commons_cc-by-nc-nd.vg.svg" alt="Abb. CC BY NC ND Lizenz" titel="CC BY NC ND Lizenz" height="60"/></button>
   <div class="panel">
      <p>Der Name der urhebenden Person muss genannt werden. Kopien und bearbeitete Versionen des Inhalts/Werks können auch kommerziell genutzt werden.
     <br> <a aria-describedby="Link zur CC BY NC ND Lizenz" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de" target="_blank">Zur Lizenz</a></p>
   </div>
</div>

*Die Liste  "CC-Lizenzen" von twillo ist lizenziert unter CC BY (4.0). Sie basiert auf "<a aria-describedby="Link zur Quelle (OER Portal Niedersachsen)" href="https://www.oernds.de/oer/legal.html" target="_blank">Creative Commons (CC) Lizenzen</a>" von twillo, <a aria-describedby="Link zur Quelle (CreativeCommons Seite)" href="https://creativecommons.org/licenses/by/4.0/deed.de" target="_blank">CC BY (4.0)</a>.*

### Weiterführende Informationen

Alle o.g. Informationen können Sie im Bereich Rechtliches auf twillo nachlesen.

Die wichtigsten Aspekte zum Thema Urheberrecht und offene Lizenzierung von Materialien finden Sie in dem u.s. Video "Urheberrecht für Nicht-Jurist:innen" (Hirsch 2020).

CC-Lizenzen auf einen Blick finden Sie z.B. in folgendem Handzettel der Martin-Luther-Universität-Wittenberg (o.J.): <a aria-describedby="Link zum Handzettel der Martin-Luther-Universität-Wittenberg" href="https://blog.llz.uni-halle.de/files/2018/11/Flyer_CC-CheatSheet_web.pdf" target="_blank">https://blog.llz.uni-halle.de/files/2018/11/Flyer_CC-CheatSheet_web.pdf</a>.

<figure>
  <iframe src="https://youtu.be/E955up7vtCk" frameborder="0" allowfullscreen="true"> </iframe>
  <figcaption style="text-align:center;font-size:14px;">Video 1: "Urheberrecht für Nicht-Jurist:innen" von Nele Hirsch, lizenziert unter CC 0 (1.0)</figcaption>
</figure>
