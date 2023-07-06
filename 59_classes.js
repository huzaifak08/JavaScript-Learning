// Class in JavaScript:

class RailwayForm {

    submit() {
        console.log(this.name, 'The form is submitted', this.trainno);
    }

    cancel = () => {
        console.log(this.name, 'The form is cancelled', this.trainno);
    }

    fill = (givenName, trainno) => {
        this.name = givenName;
        this.trainno = trainno;
    }
}

// Object of class:

let harryForm = new RailwayForm();
harryForm.fill('Huzaifa', 123456);
harryForm.submit();

let rohanForm = new RailwayForm();
rohanForm.fill('Kamran', 333666);
rohanForm.cancel();