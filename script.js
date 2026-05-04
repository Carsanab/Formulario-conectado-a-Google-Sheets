// REEMPLAZA ESTA URL con la que copiaste en el Paso 1
const scriptURL = 'https://script.google.com/macros/s/AKfycbzKCHbtoMrhcI8PHu020ZLMGtOZkl8dZxJnXRIUPwy8d8cLowqfbfh8-XnGCYxp4YBIzw/exec';
const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');
const msg = document.getElementById('response-msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Bloqueamos el botón para evitar múltiples envíos
    btn.disabled = true;
    btn.innerText = 'Enviando...';

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        msg.classList.remove('hidden');
        form.reset();
        setTimeout(() => msg.classList.add('hidden'), 5000);
    })
    .catch(error => {
        console.error('¡Error!', error.message);
        alert('Hubo un error al enviar los datos.');
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerText = 'Enviar Datos';
    });
});