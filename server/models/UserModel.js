const mongodb = require('./DBConnection')

var User = function()
{
    this.saveUser = function(data,callback)
    {
        mongodb((db)=>
        {
            if(db){
                db.collection('user').insertOne(data);
                
                callback(true)
            }else{
                callback(false)
            }
        })
    }
}

module.exports = new User()