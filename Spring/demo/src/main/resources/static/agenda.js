import { contactList } from "./components.js";

const inyectarContactos = (data) => {
    const listContainer = document.querySelector('.contact-list');
    data.forEach(contacto => {
        listContainer.innerHTML += contactList;
    });
}
const rellenarContactos = (data) => {
    const contactos = document.querySelectorAll('li');
    contactos.forEach((contacto,index) => {
        if (data[index]) {
                    contacto.querySelector('.contact-id').textContent = data[index].id;
        contacto.querySelector('.contact-name').textContent = data[index].nombre;
        contacto.querySelector('a').href = "http://localhost:8080/contacto/" + data[index].id;
        console.log(data[index].id)
        }
    })
}

fetch("http://localhost:8080/allContacts")
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        inyectarContactos(data);
        rellenarContactos(data);
    })
    .catch(error => console.error('Error al obtener los contactos:', error));   