const {Pool} = require('pg'); // Get the PG Module
const connectionInfo = `postgres://mywebappuser:wtcc@localhost:5432/mywebapp`;
const pool = new Pool({connectionString: connectionInfo});
pool.query(
    'SELECT *  from bowlers',
    [],
    function(err, result) {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        console.log(result.rows);
        process.exit(0);
    }
);