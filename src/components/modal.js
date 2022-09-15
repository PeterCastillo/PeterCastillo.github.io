class modal extends HTMLElement {

    constructor(){
        super();
        this.id;
        this.firstname;
        this.lastname;
        this.email;
        this.img;

    }

    static get observedAttributes(){
        return['id','firstname','lastname','email','img']
    }

    attributeChangedCallback(nameAtr,odlValue,newValue){
        if (odlValue !== newValue) {
            switch(nameAtr){
                case "id":
                    this.id = newValue;
                break;
                case "firstname":
                    this.firstname = newValue;
                break;
                case "lastname":
                    this.lastname = newValue;
                break;
                case "email":
                    this.email = newValue;
                break;
                case "img":
                    this.img = newValue;
                break;
            }
          }
    }

    connectedCallback(){
        this.innerHTML=`
        <style>
            .modal {
                position: fixed;
                background: linear-gradient(rgba(5, 7, 12, 0.4),rgba(5, 7, 12, 0.4));
                width: 100vw;
                height: 100vh;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 50;
                padding: 1rem
            }


            .modal__info {
                background-color: #94B0DA;
                max-width: 30rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
                padding: 1.5rem;
                border-radius: 0.8rem;
            }

            .modal__info__img {
                width: 10rem;
                height: 10rem;
            }

            .modal__info__img img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 0.8rem;
            }

            .modal__info__about {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                gap: 0.5rem ;
            }
        </style>

        <div class="modal">
            <div class="modal__info">
                <div class="modal__info__img">
                    <img src="${this.img}" alt="${this.lastname},${this.firstname}">
                </div>
                <div class="modal__info__about ">
                    <span><b>ID:</b> ${this.id}</span>
                    <span><b>Nombre:</b> ${this.firstname}</span>
                    <span><b>Apellido:</b> ${this.lastname}</span>
                    <span><b>Email:</b> ${this.email}</span>
                </div>
            </div>
        </div>
        `
    }
}

window.customElements.define('modal-user' , modal);