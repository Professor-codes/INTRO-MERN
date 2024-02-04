var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopKart', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // WE'RE CONNECTED!
    console.log("Connected");
});

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greet = "My name is " + this.name;
    console.log(greet);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var kitty = new Kitten({ name: "kitty" });
console.log(kitty.name);
kitty.speak();

// kitty.save(function (err, kitty) {
//     if (err) return console.error(err);
//     kitty.speak();
// });
