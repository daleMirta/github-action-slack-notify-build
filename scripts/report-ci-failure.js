const results = require('../results.json');

console.log(`::set-output name=results,::${results.testResults.message}`);