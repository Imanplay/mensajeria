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
    divMensaje.className = sender === 'user' ? 'user-mensaje': 'otro-mensaje';
    divMensaje.innerText = text;
    divMensaje.style.textAlign = 'right';
    mensajeContainer.appendChild(divMensaje);
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