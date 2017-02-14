const nightwatch = require('nightwatch');
const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

const supportedThemes = {
    'bootstrap': 'bootstrap',
    'foundation': 'foundation',
    'simple': 'simple'
};
const jsonReportPath = 'reports/cucumber.json';
const reporterConfig = {
    theme: supportedThemes[args.theme] || 'bootstrap',
    jsonFile: jsonReportPath,
    output: 'reports/cucumber.html'
};

const parameters = Object.assign({
    config: 'nightwatch.conf.js'
}, args);

nightwatch.runner(parameters, () => {
    if (fs.existsSync(jsonReportPath)) {
        reporter.generate(reporterConfig);
    }
});

