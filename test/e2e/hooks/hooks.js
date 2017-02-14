const {defineSupportCode} = require('cucumber');

defineSupportCode(({After}) => {

    After(function (scenario, done) {
        const durationInSeconds = (scenario.duration/1000).toFixed(3);
        console.log(`Scenario took ${durationInSeconds} seconds`)
        done();
    });
});