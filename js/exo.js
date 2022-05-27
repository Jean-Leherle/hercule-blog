console.log('test 1...2...1...2');
const app = {
    hercule: {
        name: 'hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,
    },//fin de hercule
    friendList: ['Jupiter', 'Junon', 'Alcmène','Déjanire'],


    init: function () {
        base.fillProfil(app.hercule);
        base.printFriends(app.friendList);
        base.setBestFriend(app.friendList[0]);

    }//fin de init

} //fin de app


document.addEventListener('DOMContentLoaded', app.init);