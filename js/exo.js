console.log('test 1...2...1...2');
const app = {
    hercule: {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,
    },//fin de hercule
    friendList: ['Jupiter', 'Junon', 'Alcmène','Déjanire'],
    createTitle: function(){
        const titleElement=document.createElement('h1');
        titleElement.className='banner__title';
        titleElement.innerText=`Vous consultez le profil de ${app.hercule.name}`;
        document.getElementById('header-banner').appendChild(titleElement);
    },


    init: function () {
        base.fillProfil(app.hercule);
        base.printFriends(app.friendList);
        base.setBestFriend(app.friendList[0]);
        app.createTitle();

    }//fin de init

} //fin de app


document.addEventListener('DOMContentLoaded', app.init);