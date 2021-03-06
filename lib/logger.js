const chalk = require('chalk');

/*eslint-disable */
const info = (msg, obj) => {
    console.log(chalk.bold.black(msg));
    if (obj) {
        console.log(obj);
    }
};

const debug = (msg, obj) => {
    if (process.debug) {
        console.log(chalk.bold.gray(msg));

        if (obj) {
            console.log(chalk.bold.gray(obj));
        }
    }
};

const error = (msg, err) => {
    console.log(chalk.bold.red(msg));

    if (err) {
        if (err instanceof Error && process.debug) {
            console.trace(err);
        } else {
            console.dir(err);
        }
    }
};

/*eslint-enable */

module.exports = { debug, info, error };