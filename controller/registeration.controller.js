const Registration = require("../model/registeration");


module.exports.createUser = async (req,res) => {
    try{
        const data = req.body;

        const register = await Registration.create(data);
        res.send({register}); 
    }catch(error) {
        res.send({error});
    }
}