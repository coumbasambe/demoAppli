function calculerImc() {
    const poids = document.getElementById('poids');
    const taille = document.getElementById('taille');
    const messageLabel = document.getElementById('message');

    const imc = poids.value / Math.pow(taille.value, 2); 
    let message = 'Vous êtes ';

    if (imc < 16.5){
        message += 'en état de dénutrition.';
    }
    else if (imc >= 16.5 && imc < 18.5){
        message += 'en état de maigreur.';
    }
    else if (imc >= 18.5 && imc < 25){
        message += 'dans la plage de poids normale.';
    }
    else if (imc >= 25 && imc < 30){
        message += 'en surpoids.';
    }
    else if (imc >= 30 && imc < 35){
        message += 'en obésité modérée.';
    }
    else {
        message += 'en obésité sévère.';
    }
    
    // Display the message on the web page
    messageLabel.textContent = message;
}
