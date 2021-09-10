/*
 * @LastEditTime: 2021-09-10 10:55:04
 * @Description: entry
 */

const localtunnel = require('localtunnel');

const logger = require("./utils/logger");

(async () => {
    let port = 89;
    const tunnel = await localtunnel({ port, subdomain: "xxxx" });

    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
    logger.info(`expose port ${port} successful! the url is "${tunnel.url}"`)

    tunnel.on('close', () => {
        logger.info("tunnels are closed");
    });
    tunnel.on('request', request => {
        logger.info(request);
    });
    tunnel.on('error', error => {
        logger.error(error);
    });
    // tunnel.close();
})();

// Options to bypass this page:
// Set and send a Bypass-Tunnel-Reminder request header (its value can be anything).
// or, Set and send a custom / non-standard browser User-Agent request header.