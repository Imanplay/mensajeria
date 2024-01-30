document.addEventListener('DOMContentLoaded', function (){})

function enviarMensaje(){
    const inputMensaje = document.getElementById('input-mensaje');
    const mensaje = inputMensaje.value.trim();

    if (mensaje !== ''){
     displayMensaje('user', mensaje);
     simulateReply();
     inputMensaje.value = '';
    }

}

function displayMensaje (sender, text){
    const mensajeContainer = document.getElementById('mensajes');
    const divMensaje = document.createElement('div');
    const divMensaje2 = document.createElement('div')
    divMensaje2.className = sender === 'otro' ? 'otro-mensaje':
    divMensaje2.innerText = text;
    divMensaje2.style.textAlign = 'right';
    divMensaje.className = sender === 'user' ? 'user-mensaje':
    divMensaje.innerText = text;
    divMensaje.style.textAlign = 'left';
    mensajeContainer.appendChild(divMensaje);
    mensajeContainer.appendChild(divMensaje2);
}

function handleKeyPrees(event){
    if(event.key === 'Enter'){
        enviarMensaje();
    }
}

function simulateReply(){
    setTimeout(function (){
        displayMensaje('otro', 'Hola soy Imanol, en que te ayudo.');
    },1000)
}