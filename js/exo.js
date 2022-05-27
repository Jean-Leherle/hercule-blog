//console.log('test 1...2...1...2');
const app = {
    hercule: {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,

    }, //fin de hercule
    friendList: ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],
    createTitle: function () {
        const titleElement = document.createElement('h1');
        titleElement.className = 'banner__title';
        titleElement.innerText = `Vous consultez le profil de ${app.hercule.name}`;
        document.getElementById('header-banner').appendChild(titleElement);
    },
    displayAllWorks: function () {

        for (let counter = 0; counter < document.querySelectorAll('.panel--work').length; counter++) { //boucle autant de fois qu'il y a d'article (11 en l'occurence)
            base.displayWork(counter);
        }
    },
    isAvailable: function () {
        const availableTime = [8, 20] //idéalement à rattacher à l'objet hercule mais l'affichage par la fonction base.fillProfil ne le permet pas
        const avaibilityElem = document.getElementById('availability');
        if (base.getHour() >= availableTime[0] && base.getHour() < availableTime[1]) {
            avaibilityElem.innerText = 'disponible';
            avaibilityElem.classList.remove('off');
        } else {
            avaibilityElem.innerText = `indisponible de ${availableTime[1]}h à ${availableTime[0]}h`;
            avaibilityElem.classList.add('off');
        }

    },
    pseudoGenerator: function (firstName, dptNumber) {
        //return 'Toto-du-10'
        return `${firstName}-du-${dptNumber}`;

    },
    showTypicalKikooPseudo: function () {
        document.getElementById('profil-name').innerText = app.pseudoGenerator(app.hercule.name, app.hercule.department);
    },
    menuToggle: function () {
        const menuElement = document.getElementById('menu-toggler');
        menuElement.addEventListener('click', () => {
            document.getElementById('header-banner').classList.toggle('banner--open');
        })
    },


    init: function () {
        base.fillProfil(app.hercule);
        base.printFriends(app.friendList);
        base.setBestFriend(app.friendList[0]);
        app.createTitle();
        app.displayAllWorks();
        app.isAvailable();
        app.showTypicalKikooPseudo();
        app.menuToggle();

    } //fin de init

} //fin de app


document.addEventListener('DOMContentLoaded', app.init);