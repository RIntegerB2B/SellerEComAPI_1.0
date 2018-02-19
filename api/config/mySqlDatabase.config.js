var mysql = require('mysql');

module.exports = {
    mySqlCon: mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "MySql",
        database: "sellerecom",
        multipleStatements: true
      })
}
module.exports.createMySqlConnection = function(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "MySql",
        database: "sellerecom",
        multipleStatements: true
      })
}
var connectionObj =null;
module.exports.checkConnectionExist =function(){
    if(connectionObj){
        if(connectionObj.state === 'disconnected'){
            return false;
        }
        else
            return true;
    } 
    else
        return false;
}


