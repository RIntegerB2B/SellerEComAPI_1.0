var mySqlDbConfig = require('../config/mySqlDatabase.config');
var mysql = require('mysql');

exports.createContentDetail = function(req, res) {
    var mySqlConnectionObj =null;
     if(!mySqlDbConfig.checkConnectionExist())
     mySqlConnectionObj = mySqlDbConfig.createMySqlConnection();
     sqlQuery = "CALL productContentDetailInsert(?,?)";
     console.log("Inside detail");
     console.log(req.body);
    var formattedInsertContentDetailQuery = prepareQuery(sqlQuery,[req.body.contentId, req.body.contentData]);
     mySqlDbConfig.mySqlCon.query(formattedInsertContentDetailQuery, function (err, result) {
        if (err) throw err;
        if(result.length >1){
            console.log("1 detail record inserted  " );
            
        }
        
    });
    /* if(!mySqlDbConfig.checkConnectionExist())
        mySqlConnectionObj = mySqlDbConfig.createMySqlConnection();
    mySqlConnectionObj.connect(function(err) {
        if (err) throw err;
        
        var sqlQuery = "CALL productContentInsert(?,?,?)";
        var formattedInsertContentQuery = prepareQuery(sqlQuery,[1,currentDatetimeValue,"Test"]);
        mySqlDbConfig.mySqlCon.query(formattedInsertContentQuery, function (err, result) {
        if (err) throw err;
        if(result.length >1){
            console.log("1 record inserted - " +  result[0][0].lastInsertedValue);
            sqlQuery = "CALL productContentDetailInsert(?,?)";
            var formattedInsertContentDetailQuery = prepareQuery(sqlQuery,[result[0][0].lastInsertedValue,req.body.contentData]);
            mySqlDbConfig.mySqlCon.query(formattedInsertContentDetailQuery, function (err, result) {
                if (err) throw err;
                console.log("1 detail record inserted  " );
            });
        }
        
        });
    }); */
    
}

exports.getAllContent = function(req, res) {
    // Retrieve and return all notes from the database.
    if(!mySqlDbConfig.checkConnectionExist())
        mySqlConnectionObj = mySqlDbConfig.createMySqlConnection();
    mySqlConnectionObj.connect(function(err) {
        if (err) throw err;
        
        var sqlQuery = "CALL productContentGet(?)";
        var formattedSelectContentQuery = prepareQuery(sqlQuery,[1]);
        mySqlDbConfig.mySqlCon.query(formattedSelectContentQuery, function (err, result) {
        if (err) throw err;
        res.send(result[0]);
        
        });
    });
};

exports.getContentDetail = function(req, res) {
    // Retrieve and return all notes from the database.
    if(!mySqlDbConfig.checkConnectionExist())
        mySqlConnectionObj = mySqlDbConfig.createMySqlConnection();
    mySqlConnectionObj.connect(function(err) {
        if (err) throw err;
        
        var sqlQuery = "CALL contentDetailGet(?)";
        var formattedSelectContentDetailQuery = prepareQuery(sqlQuery,[req.params.contentId]);
        mySqlDbConfig.mySqlCon.query(formattedSelectContentDetailQuery, function (err, result) {
        if (err) throw err;
        console.log(result[0]);
        res.send(result[0]);
        
        });
    });
};

exports.createContent = function(req, res) {
    var currentDateTime = new Date();
    if(!mySqlDbConfig.checkConnectionExist())
        mySqlConnectionObj = mySqlDbConfig.createMySqlConnection();
    mySqlConnectionObj.connect(function(err) {
        if (err) throw err;
        
        var sqlQuery = "CALL productContentInsert1(?,?,?)";
        var formattedCreateContentQuery = prepareQuery(sqlQuery,[req.body.clientId, currentDateTime, "Content Description"]);
        mySqlDbConfig.mySqlCon.query(formattedCreateContentQuery, function (err, result) {
            if (err) throw err;
            res.send(result[0][0]);
        
        });
    });
}

function prepareQuery(query, parameters){
    if(!query || !parameters) {
        throw  new Error('query and parameters function parameters should be specified.');
    }
    return mysql.format(query, parameters);
}