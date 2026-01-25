// Initialisation EmailJS
(function () {
    emailjs.init("ZfBFIRmWJYh9tlMF2"); // remplace par ta clé publique
})();


// Fonction pour envoyer le message
function envoyer_formulaire() {

    let btn = document.getElementById('button');

    document.getElementById('formulaire_contact')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Envoi en cours ...';

        let serviceID = 'default_service';
        let templateID = 'template_jozri9c';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            btn.value = 'Send Email';
            alert('Envoyé!');
            document.getElementById('formulaire_contact').reset();
            }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
            });
            
});
}

