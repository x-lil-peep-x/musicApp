let user = require('../models/User');

//Obtener todos los usuarios como JSON
function getUsers(req,res) {
    user.findAll().then(users =>{
       res.json(users);
    });
}
//Guardar un nuevo Usuario
function save(req,res){
    user.create(req.body)
        .then(user => res.json(user));
}
function updateUser(req,res){
    res.status(200)
        .send("Funcion para actualizar los usuarios")
        .catch((error) => {
            console.log(error);
        });
}

function destroy (req,res){
    res.status(200).send("Funcion para eliminar los usuarios")
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    destroy,
    updateUser,
    getUsers,
    save
};