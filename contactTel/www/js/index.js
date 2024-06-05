document.addEventListener("DOMContentLoaded", function() {
    // Écoutez la soumission du formulaire
    document.getElementById("newContactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher le comportement de soumission par défaut
        
        // Récupérer les valeurs du formulaire
        let contactFirstName = document.getElementById("contactFirstName").value;
        let contactLastName = document.getElementById("contactLastName").value;
        let contactPhoneNumber = document.getElementById("contactPhoneNumber").value;
        
        // Créer une nouvelle entrée pour le contact
        let newContactEntry = `
            <li> 
                <a href="#">
                    <img src="img/WhatsApp Image 2024-06-05 à 16.45.50_4306d019.jpg" alt="profile photo">
                    <div>
                        <h1>${contactFirstName} ${contactLastName}</h1>
                        <p>${contactPhoneNumber}</p>
                    </div>
                </a>    
            </li>
        `;
        
        // Ajouter la nouvelle entrée à la liste des contacts existante
        let contactList = document.querySelector(".contact-list");
        contactList.insertAdjacentHTML("beforeend", newContactEntry);

        // Réinitialiser le formulaire
        document.getElementById("newContactForm").reset();
        
        // Revenir à la page principale
        document.getElementById("mainPage").style.display = "block";
        document.getElementById("formPage").style.display = "none";
    });

    // Écoutez le clic sur le bouton "Ajouter"
    document.getElementById("addButton").addEventListener("click", function() {
        document.getElementById("mainPage").style.display = "none";
        document.getElementById("formPage").style.display = "block";
    });
});
