const boton = document. querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');




const generarCv = async () => {
    try {

        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const {results } = await respuesta.json();
        const datos = results [0];
        console.log(datos);

        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        correo.textContent = datos.email;
        telefono.textContent = datos.phone;
        dob.textContent = datos.dob.age;
        date.textContent= datos.dob.date;
        gender.textContent = datos.gender;
        
        locacion.textContent = datos.location.country;
        estado.textContent = datos.location.state;
        ciudad.textContent = datos.location.city;
        nat.textContent=datos.nat;
        
        

    } catch (error) {
        console.log(error);
    }
    
}
boton.addEventListener('click', generarCv);

document.addEventListener('DOMContentLoaded', generarCv);

function mostrar (){
    document.getElementById('cv').style.display = 'block';
}