fetch('kotlin.txt')
        
.then(response => response.text())
.then(data => {
    const contenidoDiv = document.getElementById('contenido');
    contenidoDiv.innerText = data;
})
.catch(error => console.error(error));