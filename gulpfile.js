const cssLinter = require(`gulp-stylelint`);
const jsTranspiler = require(`gulp-babel`);
const htmlCompressor = require(`gulp-htmlmin`);
const jsLinter = require(`gulp-eslint`);
const sync = require(`browser-sync`);
const { src, dest, series } = require(`gulp`);
const jsCompressor = require(`gulp-uglify`);
const cssCompressor = require(`gulp-uglifycss`);

//all of the npms downloaded

//Tasks that javascript has to do
let browserChoice = `default`; // used to open whatever the default browser is

// allows the page to refresh when any small changes are done on the page
let browserRefresh = () => {
    sync({
        notify: true,
        reloadDelay: 50,
        browserChoice,
        server: {
            baseDir: [
                `temp`,
            ]
        }
    });
};

// used to compress html files in a directory
let compressHTMLDev = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace:true}))
        .pipe(dest(`temp`));
};

let compressHTMLProd = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace:true}))
        .pipe(dest(`prod`));
};

// CSS portion
// checking to see any syntax error in CSS
let lintCSS = () => {
    return src(`styles/main.css`)
        .pipe(cssLinter({
            reporters: [
                {formatter: `string`, console: true}
            ]
        }))
        .pipe(dest(`temp/styles`));
};

let compressCSS = () => {
    return src (`styles/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod/styles`));
};

// Java portion
let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.result(result => {
            // Called for each ESLint result.
            console.log(`ESLint result: ${result.filePath}`);
            console.log(`# Messages: ${result.messages.length}`);
            console.log(`# Warnings: ${result.warningCount}`);
            console.log(`# Errors: ${result.errorCount}`);
        }))
        .pipe(dest(`temp/scripts`));
};

let transpileJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsTranspiler())
        .pipe(dest(`temp/scripts`));
};

let fixJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsTranspiler())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let gulpLint = () => {
    return src(`gulpfile.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.result(result => {
            // Called for each ESLint result.
            console.log(`ESLint result: ${result.filePath}`);
            console.log(`# Messages: ${result.messages.length}`);
            console.log(`# Warnings: ${result.warningCount}`);
            console.log(`# Errors: ${result.errorCount}`);
        }));
};


exports.default = series(
    lintCSS,
    lintJS,
    transpileJS,
    compressHTMLDev,
    browserRefresh
);

exports.build = series(
    compressHTMLProd,
    compressCSS,
    fixJS
);

exports.lint = series(
    gulpLint
);
