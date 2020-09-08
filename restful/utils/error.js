

module.exports = {

    send: (err, req, resp, code = 400)=>{
        resp.status(code).json({
            error:err
        })
    }


};