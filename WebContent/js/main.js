document.addEventListener('DOMContentLoaded', function () {

    console.info("DOM fully ready");

    // Materialize initialization
    M.AutoInit();   

    // AJAX first call
    const endpoint = 'http://localhost:8080/perreraWS/service/perro';

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", endpoint);
    xhttp.send();

    xhttp.onreadystatechange = function () {

        console.debug('readyState %s: ', this.readyState);

        // Hide loading spin
        let loader = document.getElementById("spinner");
        loader.style.display = "none";

        if (this.readyState == 4 && this.status == 200) {

            console.debug(this.status, this.responseText);

            const dataFromApi = JSON.parse(this.responseText);

            populateList(dataFromApi); // Call the function to fill the HTML list           

        }
    }; // End AJAX first call
});

// Get the order values selected by the user
function getOrderValues() {

    const orderBy = document.getElementById('orderBy').value;
    const orderType = (document.getElementById('orderType').checked ? 'desc' : 'asc');
    console.debug('Order values from HTML - Order by: ' + orderBy + ' - Order type: ' + orderType);

    const endpointWithParameters = `http://localhost:8080/perreraWS/service/perro?orderBy=${orderType}&campo=${orderBy}`
    console.debug(endpointWithParameters);

    // AJAX call with HTML values
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", endpointWithParameters);
    xhttp.send();

    xhttp.onreadystatechange = function () {

        console.debug('readyState %s: ', this.readyState);

        // Hide loading spin
        let loader = document.getElementById("spinner");
        loader.style.display = "none";

        if (this.readyState == 4 && this.status == 200) {

            console.debug(this.status, this.responseText);

            const dataFromApi = JSON.parse(this.responseText);

            populateList(dataFromApi); // Call the function to fill the HTML list           

        }

    }; // End AJAX call with HTML values
};

// Populate HTML list
function populateList(dataFromApi) {

    let eldogList = document.getElementById("dog-list");
    eldogList.innerHTML = "";
    console.debug("List emptied");

    dataFromApi.forEach(ApiItem => {

        eldogList.innerHTML +=
            `<li class="collection-item avatar">
        <img src="img/logo_dog.png" alt="" class="circle">
        <span id="dog-name" class="title">${ApiItem.nombre}</span> <span>(Id: ${ApiItem.id})</span>
        <p>${ApiItem.raza}</p>
        </li>`

    });

}; // End Populate HTML list