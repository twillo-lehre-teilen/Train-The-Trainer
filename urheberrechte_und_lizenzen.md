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

&#9888;&#65039; <b>Wichtig:</b>Da OER nur dann umfänglich in der Hochschullehre etabliert werden können, wenn sie ohne weitreichende Restriktionen, kostenfrei verwendet, verändert und weiterverbreitet werden können, ist die Wahl einer besonders offenen CC-Lizenz bei ihrer Erstellung sinvoll. Dem pädagogischen – nicht dem rechtlichen – Sinn & Zweck von offenen Bildungsmaterialien entsprechen somit die Lizenzen CC 0, CC BY, CC BY SA, weil sie die Bearbeitung und Nutzung zu jeglichen Zwecken ermöglichen (<a aria-describedby="Link zum OER Portal Niedersachsen" href="https://www.oernds.de/oer/legal.html" target="_blank">OER Portal Niedersachsen 2021</a>)(OER Portal Niedersachsen 2021)

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
   <button class="accordion">CC 0 = Ohne Bedingungen<img src="images/creative-commons_cc-zero.svg" alt="Abb. CC Zero Lizenz" titel="CC Zero Lizenz" height="100"/></button>
   <div class="panel">
      <p>Es bestehen keine Restriktionen im Hinblick auf die Verwendung, Veränderung und Verbreitung des Inhalts/Werks. Kopien und bearbeitete Versionen können auch kommerziell genutzt werden. Zwar sind keine Urheberangaben nötig, aus Wertschätzung wird die urhebende Person meist trotzdem genannt.</p>
   </div>
</div>
