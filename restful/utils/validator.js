module.exports = {

    user:(app, req, res)=>{
        req.assert('name', 'O nome é obrigatorio').notEmpty();
        req.assert('email', 'O email é obrigatorio').notEmpty();
    
        let errors = req.validationErrors();
    
        if (errors){
            app.utils.error.send(errors, req, res);
            return false;
    
        }else{
            return true;
        }
    }

};