const request = require('request');
const tar = require('tar');
const path = require('path');
const extract = tar.x({
  cwd: path.resolve(__dirname, '../')
});

console.log('downloading and unpacking sputnikvm-dev please wait...');

request('http://builds.etcdevteam.com/sputnikvm-dev/v0.2.x/svmdev-osx-v0.2.0-36-46a63e0.tar.gz').pipe(extract);
