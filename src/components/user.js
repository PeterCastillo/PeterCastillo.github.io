class user extends HTMLElement {

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
            .section__users__about {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                background-color:#94B0DA;
                padding: 0.7rem;
                justify-content: center;
                align-items: center;
                border-radius: 0.8rem;
                position: relative;
            }
            
            .section__users__about__img {
                width: 6rem;
                height: 6rem;
            }
            
            .section__users__about__img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 0.8rem;
            }
            
            .section__users__about__info {
                display: flex;
                flex-direction: column;
                width: 12rem;
                gap: 0.3rem;
            }
            .click {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 25;
            }
            
            .click:hover {
                cursor: pointer;
            }
        </style>

        <div class="section__users__about">
            <div class="section__users__about__img">
                <img class="img" src="${this.img}" alt="${this.lastname},${this.firstname}">
            </div>
            <div class="section__users__about__info">
                <span class="id"><b>ID:</b> ${this.id}</span>
                <span class="firstname"><b>Nombre:</b> ${this.firstname}</span>
                <span class="lastname"><b>Apellido:</b> ${this.lastname}</span>
                <span class="email"><b>Email:</b> ${this.email}</span>
            </div>
            <div class="click" data-id="${this.id}"></div>
        </div>
        `
    }

}

window.customElements.define('user-info' , user);