// import { Collections } from './Constant';

const newman = require('newman'); // require newman in your project
const moment = require('moment');

/**
 * 
 * @param {collection to run} _collectionName 
 */
module.exports = function (_collectionName) {

    const Collections = {
        environmentLocal: require("../collections/local.postman_environment.json"),
        globals: require("../collections/MyWorkspace.postman_globals.json")
    }

    /**
     * 
     * @param {collection to run} _collectionName 
     * @param {passs true from fun call if wants failed test report} onlyShowFailed 
     * @param {passs true from fun call if wants normal newman report} normalReportGenerated 
     */
    this.run = function (_collectionName, onlyShowFailed = false, normalReportGenerated = false) {
        return new Promise((resolve, reject) => {
            newman.run({
                collection: require("../collections/Cord_API_V3_" + _collectionName + ".postman_collection.json"),
                environment: Collections.environmentLocal,
                globals: Collections.globals,
                delayRequest: 1000,  
                reporters: normalReportGenerated ? ['html'] : ['htmlextra'],        
                reporter: {
                    htmlextra: {
                        logs: true,
                        // browserTitle: _collectionName+ " Newman_Report",
                        browserTitle: _collectionName + " Newman_Report " + moment().format("DD-MM/hh:mm"),
                        title: _collectionName,
                        omitHeaders: true,
                        skipHeaders: "Authorization",
                        showOnlyFails: onlyShowFailed,
                        // hideRequestBody: ["Login"],

                        // export:'./'+ _collectionName +" "+ moment().format("DD-MM-YYY / hh:mm"),

                        // titleSize: 4,
                        // export: './report.html',
                        // template: './template.hbs'
                        // showOnlyFails: true,
                        // noSyntaxHighlighting: true,
                        // testPaging: true,
                        // browserTitle: collectionName.replace(".postman_collection.json",""),
                        // browserTitle: "Register login browser title",
                        // hideRequestBody: ["Login"],
                        // hideResponseBody: ["Auth Request"],
                        // showEnvironmentData: true,
                        // skipEnvironmentVars: ["API_KEY"],
                        // showGlobalData: true,
                        // skipGlobalVars: ["API_TOKEN"],
                        // skipSensitiveData: true,
                        // showMarkdownLinks: true,
                        // showFolderDescription: true,
                        // timezone: "Australia/Sydney"
                    },
                    html: {
                        export: './newman'
                    // template: './template.hbs'
                    }
                },
            }, function (err) {
                if (err) { throw err; }
                // console.log('collection run complete!');
                // console.log("Booooooom... " + _collectionName.toUpperCase() + " collection newman report is ready.")
                console.log('\u001b[' + 32 + 'm' + '\nBooooooom... ' + _collectionName + ' collection newman report is ready.\n' + '\u001b[0m');
            }).on('start', function (err, args) {
                // console.log("\nWoohoo... " + _collectionName.toUpperCase() + " is runnning...\n");
                // console.log('\u001b[' + 31 + 'm' + 'hello stack' + '\u001b[0m');
                // console.log('\u001b[' + 31 + 'm' + '\nWoohoo... collection ' + _collectionName.toUpperCase() + ' is runnning...\n' + '\u001b[0m');
                console.log(changeColor("\nWoohoo... collection ",31) + _collectionName + changeColor(" is runnning...\n",31));

                if (err) { console.log(err) }
            }).on('beforeDone', function (err, data) {
                if (err) { console.log(err) }
            }).on('done', function (err, summary) {
                console.log('collection run Done!');
                if (err) { reject(err) } else { resolve(summary) }
            })
        })
    }
}

function changeColor(message , colorCode) {
    return '\u001b[' + colorCode + 'm' + message + '\u001b[0m';
}
