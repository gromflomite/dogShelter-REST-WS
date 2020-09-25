/* 
// Console output levels
console.info("Console - Info");
console.log("Console - Log");
console.warn("Console - Warn");
console.error("Console - Error");
console.debug("Console - Debug");
*/

// Declaring array of dogs
const dogList = [{
        "id": 1,
        "name": "Rex",
        "breed": "Terrier"

    },

    {
        "id": 2,
        "name": "Martin",
        "breed": "Labrador"
    },

    {
        "id": 3,
        "name": "Cash",
        "breed": "Terrier"
    },

    {
        "id": 4,
        "name": "Aldan",
        "breed": "Boxer"
    },

    {
        "id": 5,
        "name": "Leon",
        "breed": "Doberman"
    }
];

document.addEventListener('DOMContentLoaded', function() {

    let loader = document.getElementById("spinner");
    loader.style.display = "none";

    console.info("DOM fully ready")

    let eldogList = document.getElementById("dog-list");
    eldogList.innerHTML = "";
    console.debug("List emptied");

    dogList.forEach(dog => {

        eldogList.innerHTML +=

            `<li class="collection-item avatar">
        <img src="img/logo_dog.png" alt="" class="circle">
        <span id="dog-name" class="title">${dog.name}</span> <span>(Id: ${dog.id})</span>
        <p>${dog.breed}</p>
        </li>`

    });

});