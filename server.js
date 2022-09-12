
const {app} = require('../app'); 
const {db} = require('./utils/db.util.js');

const serverStart = async () => {
    try {
        await db.authenticate();
        await db.sync();
        PORT = 9000;
        
        app.listen(PORT,() =>{
            console.log("running port 9000 ;D");
        })
    } catch (error) {
        console.log(error);
    }
}

serverStart();

