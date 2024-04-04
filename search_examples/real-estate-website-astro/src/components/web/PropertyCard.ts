export default class PropertyCard extends HTMLElement {
    canonical: string = "";
    avatar: string = "";
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
        }
        this.shadowRoot!.innerHTML = `
        <style>
            a {                        
                cursor: pointer;
            }
            div {
                margin: 0 0.8em;
                background: white;
                padding: 0.7em;
                border-radius: 9px;
                width: 220px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            }
            div:hover{
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
            h1 {
                font-size: 1em;
            }
            img {
                margin: 0 auto;
                width: 100%;
            }
        </style>

        <div id="the-div">                                    
        </div>
        `;

        const div = this.shadowRoot!.getElementById("the-div")!;
        let container = div;
        if (this.canonical !== "") {
            container = document.createElement("a");
            div.appendChild(container);
            //@ts-ignore
            container.href = this.canonical;
            //@ts-ignore
            container.target = "_blank";
        }
        if (this.title !== "") {
            const h = document.createElement("h1");
            h.innerText = this.title;
            container.appendChild(h);
        }
        if (this.avatar !== "") {
            const img = document.createElement("img");
            img.src = this.avatar;
            container.appendChild(img);
        }
    }
}