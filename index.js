/*
 * @LastEditTime: 2021-11-05 15:04:35
 * @Description: entry
 */

const localtunnel = require('localtunnel');

const logger = require("./utils/logger");

(async () => {
    const portList = [
        { subdomain: "qmyxpay2", port: 8078, local_host: "http://192.168.20.132" },
    ];
    portList.forEach(item => {
        localtunnel({ port: item.port, subdomain: item.subdomain }).then(tunnel => {
            // the assigned public url for your tunnel
            // i.e. https://abcdefgjhij.localtunnel.me
            logger.info(`expose ${item.local_host}:${item.port} successful! the url is "${tunnel.url}"`)

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
        })
    });
})();

// Options to bypass this page:
// Set and send a Bypass-Tunnel-Reminder request header (its value can be anything).
// or, Set and send a custom / non-standard browser User-Agent request header.