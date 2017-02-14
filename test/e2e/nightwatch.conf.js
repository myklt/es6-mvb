const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

const seleniumHost = '127.0.0.1';
const isDebugEnvironmet = process.env.NODE_ENV === 'debug';

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'timeout.js',
        '--require', 'hooks/hooks.js',
        '--require', 'steps',
        '--format', 'pretty',
        '--format', 'json:reports/cucumber.json',
        '--format-options', '{"colorsEnabled":true}',
        'features'
    ]
});

module.exports = {
    output_folder: 'reports',
    page_objects_path: 'pages',
    globals_path: 'globals.js',
    live_output: true,
    test_workers: {
        // NOTE: Debugging tests is not supported when running in parallel, since a test worker is a separate node process.
        enabled: isDebugEnvironmet ? false : true,
        workers: 'auto'
    },
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: 'logs',
        host: seleniumHost,
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': chromedriver.path,
            'webdriver.gecko.driver': geckodriver.path
        }
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: seleniumHost,
            screenshots: {
                enabled: true,
                on_failure: true,
                path: 'screenshots'
            },
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                marionette: true
            }
        }
    }
}