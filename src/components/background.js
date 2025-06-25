

class Background extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <section class="map-section">

                <div class="map-background">
                </div>


                <div id="marker-msc" class="marker msc" style="top: 39%; left: 57%; width: 15px; height: 15px;" data-city="Москва"></div>
                <div id="st-petersburg" class="marker big" style="top: 36.5%; left: 55%; width: 15px; height: 15px;" data-city="Санкт-Петербург"></div>
                <div id="penza" class="marker big" style="top: 41%; left: 57.8%; width: 15px; height: 15px;" data-city="Пенза"></div>
                <div id="ekaterinburg" class="marker big" style="top: 34.5%; left: 64%; width: 15px; height: 15px;" data-city="Екатеринбург"></div>
                <div id="archangelsk" class="marker big" style="top: 31.9%; left: 56.3%; width: 15px; height: 15px;" data-city="Архангельск"></div>
                <div id="kaluga" class="marker big" style="top: 40%; left: 55.9%; width: 15px; height: 15px;" data-city="Калуга"></div>
                <div id="vladivostok" class="marker big" style="top: 44%; right: 20.3%; width: 15px; height: 15px;" data-city="Владивосток"></div>
                <div id="tver" class="marker big" style="top: 37.3%; left: 56.3%; width: 15px; height: 15px;" data-city="Тверь"></div>

                <div id="emirates" class="marker small" style="top: 56%; left: 61.3%; width: 10px; height: 10px;" data-city="Эмираты (ОАЭ)"></div>
                <div id="switzerland" class="marker mid" style="top: 45.2%; left: 50.5%; width: 12px; height: 12px;" data-city="Швейцария"></div>
                <div id="malaysia" class="marker small" style="top: 69.2%; left: 74.1%; width: 10px; height: 10px;" data-city="Малайзия"></div>
                <div id="turkish" class="marker mid" style="top: 48.5%; left: 55%; width: 12px; height: 12px;" data-city="Турция"></div>
                <div id="china" class="marker mid" style="top: 40%; left: 70%; width: 12px; height: 12px;" data-city="Китай"></div>
                <div id="mavriki" class="marker small" style="top: 76%; left: 60.9%; width: 10px; height: 10px;" data-city="Остров Маврикий"></div>
                <div id="alabama" class="marker mid" style="top: 51.3%; left: 31%; width: 12px; height: 12px;" data-city="Штат Алабама"></div>

            </section>`;
    }
}

customElements.define("component-background", Background);