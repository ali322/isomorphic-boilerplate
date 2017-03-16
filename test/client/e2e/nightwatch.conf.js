require('babel-register')

/* eslint-disable no-trailing-spaces*/
module.exports = {
    src_folders: ['test/client/e2e/spec'],
    output_folder: 'test/client/e2e/reports',
    globals_path: 'test/client/e2e/global.js',

    selenium: {
        start_process: true,
        server_path: require('selenium-server').path,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': require('chromedriver').path
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}
