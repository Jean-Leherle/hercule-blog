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
    formAlert: function () {
        const fromElement=document.getElementById('contact')
        fromElement.addEventListener('click', (event)=>{
            event.preventDefault();
            alert('Hercule ne souhaite pas être dérangé');
        })
        
    },
    displayVote: function(){
        const herculeVote= Math.round((base.vote.hercule*100/(base.vote.hercule+base.vote.cesar)))+'%'  //calcul du vote avec arrondie en prenant uniquement cesar et hercule en compte, 
        const cesarVote= Math.round((base.vote.cesar*100/(base.vote.hercule+base.vote.cesar)))+'%'      //si il y a d'autre participant utiliser un for( key in vote)
        herculeVoteElement=document.getElementById('trends-hercule');
        herculeVoteElement.querySelector('.people__popularity').innerText=herculeVote;
        cesarVoteElement=document.getElementById('trends-cesar');
        cesarVoteElement.querySelector('.people__popularity').innerText=cesarVote;
        herculeVoteElement.querySelector('.people__bar').style.width=herculeVote
        cesarVoteElement.querySelector('.people__bar').style.width=cesarVote

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
        app.formAlert();
        app.displayVote();

    } //fin de init

} //fin de app


document.addEventListener('DOMContentLoaded', app.init);