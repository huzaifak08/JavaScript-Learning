// Constructors:

class RailwayForm {

    constructor(givenName, trainno) {

        this.name = givenName;
        this.trainno = trainno;

        console.log('Constructor Called...');
    }

    submit() {
        console.log(this.name, 'The form is submitted', this.trainno);
    }

    cancel = () => {
        console.log(this.name, 'The form is cancelled', this.trainno);
    }

}

let harryForm = new RailwayForm('Harry', 12345);
harryForm.submit();

let kamiForm = new RailwayForm('Kamran', 22222);
kamiForm.cancel();