class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const { shadowRoot } = this;
        shadowRoot.innerHTML = '';
        shadowRoot.appendChild(this.htmlToElement().content);
    }

    htmlToElement() {
        const html = `
            <style>
                .card-component-container {
                    padding: 10rem 1rem 1rem 1rem;
                    border-radius: 0.5rem;
                    background-color: var(--card-component-color);
                    height: 23rem;
                }                       
            </style>
            <div class="card-component">
                <div class="card-component-container">
                    <slot></slot>
                </div>
            </div>
        `;

        const template = document.createElement('template');
        template.innerHTML = html;
        return template;
    }
}

customElements.define('card-component', CardComponent);