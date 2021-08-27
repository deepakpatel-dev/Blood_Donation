const mongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

function getConnection(callback)
{
    mongoClient.connect(url,(err,client)=>
    {
        if(err)
        {
            console.log(err)
            callback(false)
        }
        else
        {
            var db = client.db('bloodbank')
            callback(db)    
        }
    })
}

module.exports = getConnection;