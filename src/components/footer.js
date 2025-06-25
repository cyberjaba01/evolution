class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-info">
                        <p>ООО "Юнитех" © 2022-2025 г.</p>
                        <p>Все права защищены, любое копирование преследуется по закону</p>
                        <p>г. Пенза, ул. Московская 27</p>
                    </div>
                    <div class="footer-contacts">
                        <p><a href="mailto:Info@evolution-soft.ru">Info@evolution-soft.ru</a></p>
                        <p><a href="tel:+79960805045">+7 996 080 50 45</a></p>
                    </div>
                </div>
            </footer>`;
    }
}

customElements.define("component-footer", Footer);