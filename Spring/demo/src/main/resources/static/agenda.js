







fetch("http://localhost:8080/allContacts")
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        inyectarContactos(data);
        rellenarContactos(data);
    })