var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.info('链接成功.....')
})

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);


var felyne = new Kitten({name : 'Felyne'});
console.info(felyne.name)
felyne.speak();

  
var fluffy = new Kitten({name : 'fluffy'});
var Elliot = new Kitten({name : 'Elliot'});
fluffy.speak();

fluffy.save((error, fluffy) => {
    if(error) return console.error(error)
    console.info("save suucessfully! the name of the cat is fluffy")
})

Elliot.save((error, Elliot) => {
    if(error) return console.error(error)
    console.info("save suucessfully! the name of the cat is Elliot")
})



Kitten.find((error, Kittens) => {
    if(error) console.error(error)
    console.info(Kittens)
})