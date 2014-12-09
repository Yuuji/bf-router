var bfrequire = require('node-brainfuckex').require;
bfrequire(process.argv[2] + '.bf')(process.argv.slice(3));
