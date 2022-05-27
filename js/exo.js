console.log('test 1...2...1...2');
const app = {
    hercule: {
        name: 'hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,
    },


    init: function () {
        base.fillProfil(app.hercule);
    }//fin de init

} //fin de app


document.addEventListener('DOMContentLoaded', app.init);