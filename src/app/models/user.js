// definimos elmodelo de como va a lucir el usuario en nuestra BD
//que campos va a tener, nombre, email, etc
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs'); //modulo que permite cifrar las claves

const userSchema = new mongoose.Schema({
    local: {
        email: String,
        password: String
    },
    facebook: {
        email: String,
        password: String,
        id: String,
        token: String
    },
});

//metodo que se encarga de generar y cifrar clave
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Verificar si el password es valido o no
userSchema.methods.validPassword  = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);