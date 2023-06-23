import {getHotCity} from "../service/getHotCitys.js"
class HotCity extends HTMLElement{
    constructor(){
        super();

        const templateContent = document.querySelector("#hot-city").content;
        const shadowRoot = this.attachShadow({mode:'open'});

        shadowRoot.append(templateContent.cloneNode(true));
        
    }
   async connectedCallback (){
        const res =await  getHotCity()
        res.topCityList.map(item=>{
            this.createItem(item)
        })
    }
    createItem(item){
        const {name,id} = item
        const div = document.createElement("div");
        div.className = "item"
        div.textContent = name;
        div.id = id
        const content = this.shadowRoot.querySelector(".content");
        content.append(div)
        div.addEventListener("click",()=>{
            localStorage.setItem("Id",div.id)
            localStorage.setItem("local",div.textContent)
            window.location.href ="index.html"
        })
    }
}

customElements.define('my-hot-city', HotCity);