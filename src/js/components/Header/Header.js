class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header class="header" id="header">
                <div class="logo-container">
                    <a href="https://evolution-soft.ru"><img src="/src/images/icon_evolution.png" class="logo-img"></a> 
                    <div class="logo-text">
                        <div class="logo"><a href="https://evolution-soft.ru/index.html" style="text-decoration: none; color: white;"><h2>ЭВОЛЮЦИЯ</h2></a></div>
                        <a href="tel:+79960505045" class="phone"><img src="/src/images/phone2.png" alt="modal_phone"><span> +7 996 050 50 45</span></a>
                    </div>
                </div>
                <div class="header__burger-icon">
                    <div class="burger-icon__menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
                <nav class="nav">
                    <ul>
                        <li><a class="nav-link" href="https://evolution-soft.ru/#about">О компании</a></li>
                        <li><a class="nav-link" href="https://evolution-soft.ru/#clients">Наши клиенты</a></li>
                        <li><a class="nav-link" href="https://evolution-soft.ru/#faq">Частые вопросы</a></li>
                        <li><a class="nav-link" href="https://evolution-soft.ru/#tariffs">Тарифы Битрикс24</a></li>
                        <li><a class="nav-link" href="https://evolution-soft.ru/pages/portfolio.html">Наши работы</a></li>
                    </ul>
                </nav>
            </header>
            <nav class="nav-phone disabled">
                <div class="burger-icon__menu-close">+</div>
                <ul>         
                    <li><a class="nav-link" href="https://evolution-soft.ru/#about">О компании</a></li>
                    <li><a class="nav-link" href="https://evolution-soft.ru/#clients">Наши клиенты</a></li>
                    <li><a class="nav-link" href="https://evolution-soft.ru/#faq">Частые вопросы</a></li>
                    <li><a class="nav-link" href="https://evolution-soft.ru/#tariffs">Тарифы Битрикс24</a></li>
                    <li><a class="nav-link" href="https://evolution-soft.ru/pages/portfolio.html">Наши работы</a></li>
                </ul>
            </nav>`;
    }
}

customElements.define("component-header", Header);