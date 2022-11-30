

// CLASES INVITADO Y FIESTA
class Guest {
    constructor(id, name, age, provision){
        this.id = id;
        this.name = name;
        this.age = age;
        this.provision = provision;
    }

    sectionColorSet(){
        const MAX_COLOR = 16777215; // #FFFFFF - Hexadecimal
        let randomColor = Math.floor(Math.random() * MAX_COLOR);
        let complementColor = MAX_COLOR - randomColor;
        let guestSection = document.getElementById(`guest-${this.id}`);
        guestSection.style.backgroundColor = "#"+randomColor.toString(16);
        guestSection.style.color = "#"+complementColor.toString(16);
    }//FUNCION PARA CAMBIO DE COLOR DE CARTA

    guestComponent(){
        return `
        <section id="guest-${this.id}" class="text-center m-1 col-11 col-sm-5 card">
            <h2>${this.name}</h2>
            <p class="m-0"><b>Edad:</b> ${this.age}</p>
            <p class="mb-1"><b>Trajo:</b> ${this.provision}</p>
        </section>
        `;//SE CREA UNA CARTA DE INVITADO
    }
}

class Party {
    constructor(guestList){
        this.guestList = guestList;
    }

    buildParty(){
        let finalComponent = "";
        let guestsCard = `
        <section class="text-center m-1 col-11 col-sm-5 card">
        <h2>Lista de Invitados:</h2>
        <ul id="guest-list"></ul>
        </section>`; //CREA CARTA DE LISTA DE INVITADOS CON UN UL DONDE SE AÑADIRAN LOS INVITADOS
        let provisionsCard = `
        <section class="text-center m-1 col-11 col-sm-5 card">
        <h2>Lista de Provisiones:</h2>
        <ul id="provision-list"></ul>
        </section>`;
        for(let i = 0; i < this.guestList.length; i++){
            finalComponent += this.guestList[i].guestComponent();//SE CONCATENA EL CODIGO HTML PARA AGREGAR CADA CARTA DE INVITADO
        }
        return finalComponent + guestsCard + provisionsCard;//SE CONCATENAN LAS CARTAS DE INVITADOS CON LAS CARTAS DE LISTAS(2)
    }
}

//FUNCION DEL BOTON PARA IMPRIMIR FIESTA
function printParty() {
    const divWrapper = document.getElementById("wrapper"); //REFERENCIA DE DIV QUE CONTIENE LAS CARTAS
    let fiesta1 = new Party(listaInvitados);//CREA UNA INSTANCIA DE OBJETO FIESTA
    divWrapper.innerHTML = fiesta1.buildParty(); //IMPRIME LAS CARTAS DE INVITADOS EN DIV CONTENEDOR
    const guestList = document.getElementById("guest-list"); //REFERENCIAS DE LOS UL DENTRO DE LAS CARTAS CREADAS DE LISTAS DE INVITADOS O PROVISIONES
    const provisionList = document.getElementById("provision-list");
    for(let i = 0; i < listaInvitados.length; i++){
        listaInvitados[i].sectionColorSet();//CAMBIA DE COLOR LAS CARTAS DE INVITADOS
        let li = document.createElement("li");//CREA ELEMENTOS LI PARA LISTAS DE INVITADOS Y PROVISIONES
        let li2 = document.createElement("li");
        li.innerHTML = `${listaInvitados[i].name}`;//AGREGA TEXTO DEL INVITADO ACTUAL AL LI CREADO
        li2.innerHTML = `${listaInvitados[i].provision}`;
        guestList.appendChild(li);//AÑADE EL LI AL UL CON ID guestList
        provisionList.appendChild(li2);//AÑADE EL LI AL UL CON ID provisionList
    }
    
}

//FORM PARA AÑADIR USUARIOS
const form = document.getElementById("form");
let newName = document.getElementById("new-name");
let newAge = document.getElementById("new-age");
let newProvision = document.getElementById("new-provision");
let listaInvitados = [];
let ids = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    listaInvitados.push(new Guest(ids, newName.value, newAge.value, newProvision.value));
    ids++;
    alert("Invitado Añadido");
    //console.log(listaInvitados);
    form.reset();
});




/*listaInvitados = [
     new Guest(0, "Miguel", "31", "Tacos"),
     new Guest(1, "Luis", "29", "Botanas"),
     new Guest(2, "Pedro", "32", "Cervezas"),
     new Guest(3, "Raul", "26", "Postre"),
 ];*/


