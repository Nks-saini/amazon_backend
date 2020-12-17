// include library

const mongoose = require('mongoose')
const assert = require('assert')
// const db_url = process.env.DB_URL;   
const db_local_url = process.env.DB_URL_LOCAL;   


//establist data connection
mongoose.connect(
    db_local_url,
    {
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    },
    (error,link) =>{
        //check database connect error
        assert.strictEqual(error, null , "DB Connection fail..");

        //database conn success
        console.log("database connected...")
    }
);
