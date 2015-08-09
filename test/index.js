var path        = require('path');
var fs          = require('fs');
var QUnitServer = require('../lib/index.js');


var BASE_DIR      = __dirname;
var TESTS_DIR     = path.join(BASE_DIR, './tests');
var FIXTURES_PATH = path.join(TESTS_DIR, './fixtures');
var MARKUP_PATH   = path.join(TESTS_DIR, './markup');
var DATA_PATH     = path.join(TESTS_DIR, './data');

var ASSET_PATH = path.join(TESTS_DIR, './resources/script.js');


var script = fs.readFileSync(ASSET_PATH, 'utf-8');

function configApp (app) {
    app.post('/custom/:data', function (req, res) {
        res.send(req.params['data']);
    });
}

module.exports = new QUnitServer()
    .fixtures(FIXTURES_PATH)
    .markup(MARKUP_PATH)
    .data(DATA_PATH)
    .scripts({ src: '/script.js', content: script })
    .configApp(configApp)
    .create();
