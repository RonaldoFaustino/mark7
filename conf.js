//Arquivo de configuração do Protractor


exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    specs: ['specs/**-spec.js'],
    baseUrl: 'https://mark7.herokuapp.com',
    onPrepare: function(){
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(20000);

        TIMEOUT = 3000;
        
        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenShotsFolder: './shots',
            takeScreenshots: true,
            cleanDestination:false,
            fixedScreenshotName:true

        }));


        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary:{
                displayErrorMessages: true,
                displayStacktrace: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true
            },
            colors:{
                enabled:true
            }
            
        }));
    },
    capabilities:{
        'browserName': 'chrome'
    }
}