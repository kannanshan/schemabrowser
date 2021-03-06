exports.listen = {
    host: 'localhost',
    port: 1888
};

// databases to provide browsing for, postgres & mysql

exports.db = {

    base: {
        type: 'mysql',
        host: '127.0.0.1',
        user:     'root',
        password: '',
        database: 'EMAIL_CONFIG',

	// database map enables some neat navigation features
        // for jumping between related records; see views/inc/row_detail_value.jade 
	// for implementation of that.
  	//db_map:   base_db_map,

	// a buffer size for schema dumps, in kilobytes, defaults to 2000
	// this only matters for postgres databases, and only if you have local pg_dump
	// utility installed; 2000Kb may be not enough for large databases.
        //dump_buffer: 10000,

	// list of tables, grouped into sections,
	// see table_groups.txt.example
        //table_groups: 'base_table_groups_bsdata.txt',
    },
    
    
};


// store sessions in a file storate
var session = require('express-session');
var FileStore = require('session-file-store')(session);

exports.session_config = { 
    resave: true,
    saveUninitialized: true,
    secret: 'real sessions secret',
    store: new FileStore({
        path: "/var/dbb/sessions", //storage path
	// session time to live
        ttl:  600*3,
    })
};

// list of users and theirs passwords in plain text,
// see users.txt.example
exports.authenticate_userfile = 'users.txt';

// memcached can be used for some caching
exports.cache = false;
exports.cache_memcached = 'localhost:11211';

// for postgres schema browsing
exports.pg_dump_path = 'pg_dump';

// addons
/* 
exports.addons = {
    'feature': { db: [ 'base' ]},
};
*/

