var names = ['fred', 'bill', 'spiffy'];

names.forEach(function(name) {
    console.log(name);
});

names.forEach((name) => {
    console.log('arrow ', name);
});

names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('angus'));

var person = {
    name: 'Angus J',
    greet: function () {
       names.forEach((name) => {
           console.log(this.name + 'hi ' + name);
       }) 
    }
}

person.greet();
