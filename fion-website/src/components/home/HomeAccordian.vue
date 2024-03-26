<template>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Kann ich Lastgänge von Untermessungen oder von vorherigen Jahren miteinander vergleichen?
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Sie können mehrere Lastgänge eines Kunden hochladen und in derselben Analysemappe visualisieren, miteinander vergleichen und analysieren.  Das gilt für Untermessungen, Lastgängen von weiteren Jahren und weiterer Energieformen wie Gas und Wärme. Sie können sich die Lastgänge entweder separat oder gemeinsam visualisieren.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Wie dokumentiere ich Beobachtungen in der Software?
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Beobachtungen dokumentieren Sie, indem Sie direkt in dem Diagramm auf deinen Datenpunkt klicken und eine neue Beobachtung erstellen. Der Beobachtungsassistant öffnet sich und führt sie durch die Erstellung einer Beobachtung. Damit sind Ihre Beobachtungen datenpunktbezogen und werden entsprechend visualisiert.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Kann ich mir verschiedene Zeiträume für die Charts ansehen?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Sie können die angezeigten Charts für beliebige Zeiträume definieren. Dazu benutzen Sie ganz einfach unsere Navigationsleiste, mit der Sie intuitiv einstellen können, welchen Zeitraum Sie sich anschauen möchten.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Welche Diagrammtypen werden gezeigt?
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Wir haben alle für Lastganganalysen übliche Diagramme für Sie bereitgestellt wie Dauerkennlinie,  Leistungskurve, Heatmap und Balkendiagramme für den Energieverbrauch. Durch die Navigation können Sie sich dazu auch verschiedene Zeiträume anzeigen lassen und Datenpunkte filtern.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Können auch einzelne Grafiken exportiert werden?
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Sie können sowohl den gesamten Report aber auch einzelne Grafiken in den üblichen Formaten einfach exportieren.
        </div>
      </div>
    </div>
  </div>
  <div class="footnote">
    Sie haben noch weitere Fragen, dann schreiben sie uns eine Email an hello@fion-energy.com
  </div>
</template>
<script>
export default {
  name: "HomeAccordian",
}
</script>

<style scoped>
.accordion-item {
  border: none;
  border-bottom: 1px solid #EDEDED;
  padding: 20px 0;
}
.accordion-item h2 button {
  font-size: 24px;
  padding-bottom: 10px;
  padding-left: 0;
  font-weight: 300;
  outline: 0;
}
.accordion-item h2 button:focus {
  outline: 0;
  box-shadow: none;
}
.accordion-button:not(.collapsed) {
  background-color: transparent;
  box-shadow: none;
  color: black;
}

.accordion-body {
  color: #22075e;
  font-size: 16px;
  padding-left: 0;
}
.accordion {
  margin-bottom: 40px;
}
.footnote {
  font-size: 20px;
  color: #8c8c8c;
  margin-bottom: 60px;
  font-weight: 300;
}
.accordion-button::after {
  content: '+';
  background: transparent;
  color: #8c8c8c;
  font-size: 30px;
  margin-top: -20px;
}
.accordion-button:not(.collapsed)::after {
  content: "";
  background-image: var(--bs-accordion-btn-active-icon);
  margin-top: 0;
}
</style>
