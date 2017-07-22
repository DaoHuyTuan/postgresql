const pg = require("pg");
const pool = new pg.Pool({
    host:'localhost',
    port:9999,
    database:'NODE2906',
    user:'postgres',
    password:'thuytrang297',
    max:5,
    idleTimeoutMillis:1000
});
const textsql = 'DELETE FROM public."Product" WHERE id = 3';
function querydb(sql,cb){
    pool.connect((error,client) => {
    
    client.query(sql,(errQuery,data) => {
        
        cb(data);
    });
});
}
querydb(textsql,x => console.log(x));